import "./App.css";
import { Toaster } from "sonner"
import { LoginRoute } from "./routes/LoginRoute";

export function App() {
  return (
    <>
      <LoginRoute />
      <Toaster position="top-right" richColors   />
    </>
  );
}

export default App;
