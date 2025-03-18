import { createBrowserRouter } from "react-router-dom";
import AccountPage from "./AccountPage";
import RegistrationForm from "./RegistrationForm";

const router = createBrowserRouter([
    {
        path : "/",
        element : <RegistrationForm />,
    },
    {
        path : "/AccountPage",
        element : <AccountPage />,
    }, 
]);

export default router;