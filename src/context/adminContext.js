import { createContext, useContext, useReducer } from "react";

const AdminContext = createContext();

const adminReducer = (state, action) => {
  switch (action.type) {
    case "login":
      localStorage.setItem("admin", true);
      return { authenticated: true };
    case "logout":
      localStorage.setItem("admin", false);
      return { authenticated: false };
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
