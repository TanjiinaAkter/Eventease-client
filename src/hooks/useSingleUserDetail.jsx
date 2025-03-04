import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSingleUserDetail = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: userinfo = [] } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/update/${user?.email}`);
      // console.log(res.data);
      return res.data;
    },
    enabled: !!user?.email,
  });
  return [userinfo];
};

export default useSingleUserDetail;
