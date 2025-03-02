import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useVendors = () => {
  const axiosSecure = useAxiosSecure();
  const { data: vendors = [], refetch } = useQuery({
    queryKey: ["vendors"],
    queryFn: async () => {
      const res = await axiosSecure.get("/vendors");
      console.log(res.data);
      return res.data;
    },
  });

  return [vendors, refetch];
};

export default useVendors;
