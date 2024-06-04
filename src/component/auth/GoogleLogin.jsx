import google from "../../assets/pic/google_logo-google_icongoogle-512.webp";
import useAuth from "../../hooks/useAuth";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const handleLogin = () => {
    googleLogin().then((data) => {
      //   if (data?.user?.email) {
      //     const userInfo = {
      //       name: data?.user?.displayName,
      //       email: data?.user?.email,
      //       photo: data?.user?.photoURL,
      //     };
      //     fetch("http://localhost:4000/user", {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify(userInfo),
      //     })
      //       .then((res) => res.json())
      //       .then((data) => console.log(data));
      //   }
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
