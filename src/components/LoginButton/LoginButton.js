import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithPopup } = useAuth0();
  return (
    <button className="header-user-area__button header-user-area__button--login" onClick={() => loginWithPopup()}>
      Login
    </button>
  )
}

export default LoginButton;