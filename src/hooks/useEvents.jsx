import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useEvents = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: events = [], refetch } = useQuery({
    queryKey: ["events", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/events/${user?.email}`);
      //console.log("events from email based", res.data);
      return res.data;
    },
    enabled: !!user?.email,
  });
  return [events, refetch];
};

export default useEvents;
