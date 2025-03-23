import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const usePaymentByRole = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: paymentDetailsByRole = [], refetch } = useQuery({
    queryKey: ["paymentDetailsByRole", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/rolebased/${user?.email}`);
      console.log("pay-aadjddaddddd", res?.data);
      return res.data;
    },
    enabled: !!user?.email,
  });
  return [paymentDetailsByRole, refetch];
};

export default usePaymentByRole;
