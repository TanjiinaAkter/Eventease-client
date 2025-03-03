import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useArtists = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosSecure();
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
