import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSinglePaymentUser = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: userpayments = [], refetch } = useQuery({
    queryKey: ["userpayments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/single/${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });
  return [userpayments, refetch];
};

export default useSinglePaymentUser;
