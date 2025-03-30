import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCarts = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: allcarts = [], refetch } = useQuery({
    queryKey: ["allcarts", user?.email],
    enabled: !loading && !!user && !!user.email,
    queryFn: async () => {
      if (!user?.email) return [];
      const res = await axiosSecure.get(`/carts/single/${user?.email}`);
      console.log("user added cart items", res.data);
      return res.data;
    },
  });
  return [allcarts, refetch];
};

export default useCarts;
