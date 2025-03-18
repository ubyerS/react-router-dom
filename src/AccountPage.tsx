import { useLocation } from "react-router-dom";
import { User } from "./types";

const AccountPage = () => {
    const location = useLocation();
    const user = location.state as User;
  
    return (
      <div>
        <h1>Профиль</h1>
        <p>Имя пользователя {user.username}</p>
        <p>Пароль {user.password}</p>
      </div>
    );
  };
  
  export default AccountPage;