import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  const {
    data: role,
    isPending: roleloading,
    refetch,
  } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !loading && !!user && !!user.email,
    queryFn: async () => {
      // TO DO: RETURN USER NULL COMMENTED
      console.log("role check compo ", user?.email);
      if (!user?.email) return null;
      const res = await axiosSecure.get(`/users/role/${user?.email}`);
      console.log("role check", res.data);
      return res.data.role;
    },
  });
  return [role, roleloading, refetch];
};

export default useRole;
