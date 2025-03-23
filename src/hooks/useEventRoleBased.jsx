import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useEventRoleBased = () => {
  // TO DO : EITA DELETE KORE DIBO
  // VENDOR BA ADMIN ER CREATE KORA JEI EVENT GULO USER ORDER KORECHE SEI EVENTS GULO ROLE BASED GET KORA
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: paymentByRole = [], refetch } = useQuery({
    queryKey: ["paymentByRole", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/rolebased/${user?.email}`);
      console.log("rolbased from hook", res.data.data);
      return res.data.data;
    },
    enabled: !!user?.email,
  });
  return [paymentByRole, refetch];
};

export default useEventRoleBased;
