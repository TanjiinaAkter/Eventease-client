import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllevents = () => {
  const axiosPublic = useAxiosPublic();
  const { data: allevents = [] } = useQuery({
    queryKey: ["allevents"],
    queryFn: async () => {
      const res = await axiosPublic.get("/events");
      console.log(res.data);
      return res.data;
    },
  });
  return [allevents];
};

export default useAllevents;
