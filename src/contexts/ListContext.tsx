import { DarkTheme, LightTheme } from "@/themes";
import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";

interface IItemContextData {
  id: number;
  name: string;
  done: boolean;
}

interface Props {
  children: React.ReactNode;
}

const ListContext = createContext({} as IItemContextData);

export const useAppThemeContext = () => {
  return useContext(ListContext);
};

export const AppThemeProviderc: React.FC<Props> = ({ children }) => {
  // const [list, setList] = useState<IItemContextData[]>();
  
  return (<></>
  //   <ListContext.Provider>
  //     <ThemeProvider theme={theme}>
  //       <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default} color={theme.palette.text.primary}>
  //         {children}
  //       </Box>0
  //     </ThemeProvider>
  //   </ListContext.Provider>
  );
}