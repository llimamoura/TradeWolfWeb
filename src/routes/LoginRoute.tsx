import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../view/pages/login";

export function LoginRoute() {
	return (
		<Routes>
			<Route path="/" element={<LoginPage />} />
		</Routes>
	);
}
