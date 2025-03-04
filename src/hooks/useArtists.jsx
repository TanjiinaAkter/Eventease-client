import { useQuery } from "@tanstack/react-query";

import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useArtists = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { data: artists = [], refetch } = useQuery({
    queryKey: ["artists"],
    queryFn: async () => {
      const res = await axiosPublic.get("/artists");
      console.log(res.data);
      return res.data;
    },
    enabled: !!user?.email,
  });
  return [artists, refetch];
};

export default useArtists;
