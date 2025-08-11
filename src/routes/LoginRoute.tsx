import { Route, Routes } from "react-router-dom";
import LoginPage from "../view/pages/login";

const LoginRoute: React.FC = () => {
    return(
    <Routes>
        <Route path='/' element = {<LoginPage />} />
      </Routes>
    )
}

export default LoginRoute;