import React from "react";
import { Header } from "@/components/layout/Header/index";
import { SideBar } from "@/components/layout/SideBar/SideBar";
import { Footer } from "@/components/layout/Footer/Footer";
import { Main } from "@/components/layout/Main/Main";
import { AppThemeProvider } from "@/contexts/ThemeContext";
import { DrawerProvider } from "@/contexts";

export const TaskManager: React.FC = () => {
  return(
    <AppThemeProvider>
      <DrawerProvider>
      <SideBar>
        <Header/>
        <Main/>
        <Footer/>
      </SideBar>
      </DrawerProvider> 
    </AppThemeProvider>
  )
}


