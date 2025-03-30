import axios from "axios";
const axiosPublic = axios.create({
  baseURL: "https://eventease-server.vercel.app",
});
//https://eventease-server.vercel.app/
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
