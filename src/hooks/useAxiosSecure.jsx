import axios from "axios";

import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const axiosSecure = axios.create({
  baseURL: "https://eventease-server.vercel.app",
});
const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    // request interceptor to add authorization header to call all secure api
    const requestInterceptor = axiosSecure.interceptors.request.use(
      function (config) {
        const token = localStorage.getItem("access-token");
        console.log("token nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn", token);
        config.headers.authorization = `Bearer ${token}`;

        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    const responseInterceptor = axiosSecure.interceptors.response.use(
      function (response) {
        return response;
      },
      async (error) => {
        const status = error.response.status;
        console.log("interceptor response error", status);
        if (status === 401 || status === 403) {
          navigate("/login");
          await logOut();
        }
        // promise ta reject kore dibo ar reject er karon hishbe error take dicchi
        return Promise.reject(error);
      }
    );
    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [logOut, navigate]);
  // return kore dite hobe must
  return axiosSecure;
};

export default useAxiosSecure;
