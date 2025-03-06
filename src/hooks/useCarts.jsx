import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCarts = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: allcarts = [], refetch } = useQuery({
    queryKey: ["allcarts", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts/single/${user?.email}`);
      console.log("user added cart items", res.data);
      return res.data;
    },
    enabled: !!user?.email,
  });
  return [allcarts, refetch];
};

export default useCarts;
