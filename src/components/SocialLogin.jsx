import { FcGoogle } from "react-icons/fc";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";

const SocialLogin = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { googleSign } = useAuth();
  const handleGoogleSignAuth = () => {
    googleSign()
      .then((res) => {
        const userInfo = {
          email: res.user.email,
          name: res.user.displayName,
        };

        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
        });
        navigate("/");
      })

      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <hr className="my-4 bg-white h-[2px] w-full mx-auto" />
      <div
        onClick={handleGoogleSignAuth}
        className="w-full mx-auto rounded-full bg-[#0000007A] border-[#44cfbf] border-2 flex items-center justify-center ">
        <button className="flex text-white font-semibold  items-center justify-center">
          <FcGoogle className="pr-4 text-5xl " /> GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
