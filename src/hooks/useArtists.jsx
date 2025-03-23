import { useQuery } from "@tanstack/react-query";

import useAxiosPublic from "./useAxiosPublic";

const useArtists = () => {
  const axiosPublic = useAxiosPublic();
  const { data: artists = [], refetch } = useQuery({
    queryKey: ["artists"],
    queryFn: async () => {
      const res = await axiosPublic.get("/artists");
      console.log(res.data);
      return res.data;
    },
  });
  return [artists, refetch];
};

export default useArtists;
