import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useVenues = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: venues = [], refetch } = useQuery({
    queryKey: ["venues", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/venues/${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });
  return [venues, refetch];
};

export default useVenues;
