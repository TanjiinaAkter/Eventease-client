import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: role, isPending: roleloading } = useQuery({
    queryKey: ["role", user?.email],
    queryFn: async () => {
      if (!user?.email) return null;
      const res = await axiosSecure.get(`/users/role/${user?.email}`);
      console.log("role check", res.data);
      return res.data.role;
    },
    enabled: !!user?.email,
  });
  return [role, roleloading];
};

export default useRole;