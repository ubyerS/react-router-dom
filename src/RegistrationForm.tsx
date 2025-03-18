import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { User } from "./types";

const RegistrationForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const user : User = { username, password };
        navigate("/accountPage", {state : user});
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username"> Имя пользователя </label>
                <input
                type = "text"
                id = "username"
                value = {username}
                onChange={(e) => setUsername(e.target.value)}
            />
            </div>
        <div>
            <label htmlFor="password"> Пароль </label>
            <input
            type = "password"
            id = "password"
            value = {password}
            onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <button type = "submit"> Зарегистрироваться </button>
        </form>
    );
};

export default RegistrationForm;