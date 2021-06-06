import { createContext, useContext, useReducer } from "react";
import { registerHandler } from "../services/users";

const AdminContext = createContext();

const adminReducer = async (state, action) => {
  let result = "";
  switch (action.type) {
    case "register":
 
      result = await registerHandler(action.payload);
      action.callback(result);
      //Hay que cambiar esto
      return { ...state, authenticated: true };
    case "login":
      localStorage.setItem("admin", true);
      return { ...state, authenticated: true };
    case "logout":
      localStorage.setItem("admin", false);
      return { ...state, authenticated: false };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const AdminProvider = ({ children }) => {
  const [state, dispatch] = useReducer(adminReducer, {
    authenticated: localStorage.getItem("admin") === "false" ? false : true,
  });

  const value = { state, dispatch };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};

const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error("useAdmin must be used within a AdminProvider");
  }
  return context;
};

export { AdminProvider, useAdmin };
