import "./App.css";
import "./styles/styles.scss";
import AppRouter from "./AppRouter";
import { AdminProvider } from "./context/adminContext";

function App() {
  return (
    <>
      <AdminProvider>
        <AppRouter />
      </AdminProvider>
    </>
  );
}

export default App;
