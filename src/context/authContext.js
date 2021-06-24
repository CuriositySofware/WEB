import { createContext, useContext, useReducer } from "react";

const AdminContext = createContext();

const manageAuth = (state, result) => {

  if (result.ok) {
    localStorage.setItem("token", result.token);
    return {
      ...state,
      first_name: result.user.first_name,
      last_name: result.user.last_name,
      email: result.user.email,
      type: result.user.type,
      token: result.token,
      isLoggedIn: true,
      isLoading: false,
    };
  } else {
    return { ...state };
  }
};
const manageInfo = (state, result) => {
  return {
    ...state,
    first_name: result.first_name,
    last_name: result.last_name,
    email: result.email,
    type: result.type,
    isLoggedIn: true,
    isLoading: false,
  };
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "userInfo":
      return manageInfo(state, action.payload);
    case "register":
      return manageAuth(state, action.payload);
    case "login":
      return manageAuth(state, action.payload);
    case "logout":
      localStorage.clear();
      return {
        ...state,
        token: "",
        first_name: "",
        last_name: "",
        email: "",
        type: "",
        isLoggedIn: false,
        isLoading: false,
      };
    case "notLoading":
      return { ...state, isLoading: false };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    token: localStorage.getItem("token"),
    first_name: "",
    last_name: "",
    type: "",
    isLoggedIn: false,
    isLoading: true,
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
