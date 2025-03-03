import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useVendors = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: vendors = [], refetch } = useQuery({
    queryKey: ["vendors"],
    queryFn: async () => {
      const res = await axiosSecure.get("/vendors");
      console.log(res.data);
      return res.data;
    },
    enabled: !!user?.email,
  });

  return [vendors, refetch];
};

export default useVendors;
