import {useState} from "react";
export const LoginButton = function (WrappedComponent) {
  return () => {
    const [user, setUser] = useState(false);

    function handleLogin () {
      console.log(user ? 'Logout' : 'Login')
    }

    return <WrappedComponent text={user ? 'Logout' : 'Login'} onClick={handleLogin} />
  }
}