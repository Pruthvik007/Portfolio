import { createContext, useState } from "react";

export const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false,
    type: "success",
    message: "",
  });

  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: (type, message) => setState({ isOpen: true, type, message }),
        onClose: () => setState({ isOpen: false, type: "", message: "" }),
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
