import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useArtists = () => {
  const axiosPublic = useAxiosSecure();
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
