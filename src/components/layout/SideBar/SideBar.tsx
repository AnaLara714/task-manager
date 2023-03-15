import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { 
  Button,
         Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, 
         ListItemText, TextField, Typography, useMediaQuery, useTheme 
       } from "@mui/material";
import { Add, ArrowRight, DateRange, Delete, Inbox, Today } from '@mui/icons-material';
import { Box } from "@mui/system";
import { useDrawerContext } from "@/contexts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { addProject, removeProject, seenProject } from "@/store/projectSlicer";
import { useStyles } from "./SideBar.style";

interface Props {
  children: React.ReactNode;
};

interface IListItemLinkProps {
  label: string;
  iconLeft: any;
  iconRight?: any;
  visibility?: string;
  onClick: (() => void) | undefined;
};

const ListItemLink: React.FC<IListItemLinkProps> = ({ iconLeft, iconRight, label, onClick, visibility }) => {
  // const resolvedPath = useResolvedPath("/");
  // const macth = useMatch({ path: resolvedPath.pathname, end: false});

  const handleClick = (prop: any) => {
    // navigate(to);
    onClick?.();
  };

  return (
    <ListItemButton onClick={handleClick} className={visibility}>
      <ListItemIcon>{iconLeft}</ListItemIcon>
      <ListItemText>{label}</ListItemText>
      <ListItemIcon>{iconRight}</ListItemIcon>
    </ListItemButton>
  );
};


export const SideBar: React.FC<Props> = ({ children }) => {
  const [NameProject, setNameProject] = React.useState("");
  const [addNameProject, setAddNameProject] = React.useState(false);

  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();
  const styles = useStyles();
  const projects = useSelector((state: RootState) => state.project.projects);
  const dispacth = useDispatch();

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));


  const onCreateNewProjectButtonClick = () => {
    setAddNameProject(true);
    setNameProject("");
  }
  const onAddNameProjectInputChange = (e:any) => {
    setNameProject(e.target.value);
  }
  const onAddProjectButtonClick = () => {
    NameProject === "" ? alert("Adicione o nome do projeto") : dispacth(addProject(NameProject));
    setAddNameProject(false);
  }
  const onCancelProjectButtonClick = () => {
    setAddNameProject(false);
  }
  const onRemoveProjectButtonClick = (id:number) => {
    dispacth(removeProject(id));
  }
  const onSeeMoreProject = (id: number) => {
    dispacth(seenProject(id));
  }

  return (
    <>
      <Drawer open={isDrawerOpen} variant={smDown ? "temporary" : "permanent"} onClose={toggleDrawerOpen} >
        <Box width={theme.spacing(32)} height={"100%"} display={"flex"} flexDirection={"column"}>
          <Box width="100%" height={theme.spacing(20)} display="flex" flexDirection={"column"} alignItems="center" justifyContent="center">
            <Icon sx={{width:theme.spacing(8), height:theme.spacing(8) }}> 
              <AccountCircleIcon htmlColor={theme.palette.text.primary} sx={{ fontSize: 55 }} /> 
            </Icon>
            <Typography>Ana Lara</Typography>
          </Box>
          <Divider/>
          <Box flex={1}>
            <List component={"nav"}>
              {projects.map(project => 
                <ListItemLink
                  key={project.id}
                  iconLeft={<ArrowRight htmlColor={theme.palette.text.primary}/>}
                  iconRight={project.canBeDeleted ? <Delete onClick={() => onRemoveProjectButtonClick(project.id)} htmlColor={theme.palette.text.primary}/> : undefined }
                  label={project.title}
                  onClick={ (() => onSeeMoreProject(project.id)) || (smDown ? toggleDrawerOpen : undefined)}
                />
              )}
            </List> 
            <List component={"nav"}>
              <ListItemLink 
                iconLeft={<Add htmlColor={theme.palette.text.primary}/>}
                label={"Criar projetos"}
                onClick={(onCreateNewProjectButtonClick) || (smDown ? toggleDrawerOpen : undefined)}
                visibility={addNameProject ? styles.visibleOFF : styles.visibleON}
              />
              <div className={styles.inputNameProject}>
                <TextField 
                  value={NameProject}
                  onChange={onAddNameProjectInputChange}  
                  className={addNameProject ? `${styles.visibleON}  ${styles.inputNameProject}` : styles.visibleOFF}
                />
                <Button 
                  onClick={onAddProjectButtonClick} 
                  className={addNameProject ? styles.visibleON : styles.visibleOFF}
                >
                  <Typography className={styles.buttonAdd} color={theme.palette.text.primary}>Adicionar</Typography>
                </Button>
                <Button 
                  onClick={onCancelProjectButtonClick} 
                  className={addNameProject ? styles.visibleON : styles.visibleOFF}
                >
                  <Typography className={styles.buttonCancel} color={theme.palette.text.primary}>Cancelar</Typography>
                </Button>
              </div>
          </List>
          </Box>
        </Box>
      </Drawer>
      <Box height={"100vh"} marginLeft={smDown ? 0 : theme.spacing(32)}>
        {children}
      </Box>
    </>
  );
}
