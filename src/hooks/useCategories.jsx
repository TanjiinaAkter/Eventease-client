import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCategories = () => {
  const axiosPublic = useAxiosPublic();
  const { data: categories = [], refetch } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axiosPublic.get("/categories");
      console.log(res.data);
      return res.data;
    },
  });
  return [categories, refetch];
};

export default useCategories;
