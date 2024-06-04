import facebook from "../../assets/pic/fb_icon_325x325.png";
import useAuth from "../../hooks/useAuth";

const FacebookLogin = () => {
  const { facebookLogin } = useAuth();

  const handleLogin = () => {
    facebookLogin()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <button
        onClick={handleLogin}
        className="flex flex-col justify-center items-center w-full rounded-lg"
      >
        <img className="w-10" src={facebook} alt="" />
        Facebook Login
      </button>
    </div>
  );
};

export default FacebookLogin;
