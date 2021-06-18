import "./App.css";
import "./styles/styles.scss";
import AppRouter from "./AppRouter";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  );
}

export default App;
