import { createContext, useContext, useReducer } from "react";
import { registerHandler, loginHandler } from "../services/users";

const AdminContext = createContext();

const manageAuth = (state, result) => {
  if (result.ok) {
    localStorage.setItem("token", result.token);
    return { ...state, token: result.token };
  } else {
    return { ...state };
  }
};

const authReducer = async (state, action) => {
  let result = "";
  switch (action.type) {
    case "register":
      result = await registerHandler(action.payload);
      action.callback(result);
      return manageAuth(state, result);
    case "login":
      result = await loginHandler(action.payload);
      action.callback(result);
      return manageAuth(state, result);
    case "logout":
      localStorage.clear();
      return { ...state, token: "" };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    token: localStorage.getItem("token"),
  });
  const value = { state, dispatch };
  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
