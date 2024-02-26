import { ChakraProvider } from "@chakra-ui/react";
import AlertProvider from "./AlertContext";
const ContextProvider = ({ children }) => {
  return (
    <ChakraProvider>
      <AlertProvider>{children}</AlertProvider>
    </ChakraProvider>
  );
};

export default ContextProvider;
