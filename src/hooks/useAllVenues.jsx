import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllVenues = () => {
  const axiosPublic = useAxiosPublic();
  const { data: venues = [], refetch } = useQuery({
    queryKey: ["venues"],
    queryFn: async () => {
      const res = await axiosPublic.get("/venues");
      console.log(res.data);
      return res.data;
    },
  });
  return [venues, refetch];
};

export default useAllVenues;
