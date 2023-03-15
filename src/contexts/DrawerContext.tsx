import { createContext, useCallback, useContext, useState } from "react";

interface IDrawerContextData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
}

interface Props {
  children: React.ReactNode;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

export const DrawerProvider: React.FC<Props> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
  }, []);
 
  return (
    <DrawerContext.Provider value={{isDrawerOpen, toggleDrawerOpen}}>
     {children}
    </DrawerContext.Provider>
  );
}