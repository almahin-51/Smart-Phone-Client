import google from "../../assets/pic/google_logo-google_icongoogle-512.webp";
import useAuth from "../../hooks/useAuth";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const handleLogin = () => {
    googleLogin().then((data) => {
      console.log(data);
    });
  };

  return (
    <div>
      <button
        onClick={handleLogin}
        className="flex flex-col justify-center items-center w-full rounded-lg"
      >
        <img className="w-10" src={google} alt="" />
        Google Login
      </button>
    </div>
  );
};

export default GoogleLogin;
