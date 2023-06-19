
import { useState } from "react";
import TemporaryDrawer from "../layout/appLayout";
import { Button, Grid } from "@mui/material";
import { useDispatch } from "../../context/ContextProvider";
import { types } from "../../context/storeReducer";

export const SettingsPage = () => {
    const [ theme, setTheme ] = useState("")
    const dispatch = useDispatch();
  const dark = () => {
    dispatch({ type: types.dark });    
  };
  const ligth = () => {
   dispatch({ type: types.ligth });    
  };

  return (
    <div>
        <TemporaryDrawer></TemporaryDrawer>
        <Grid sx={{ m: 5 }} >
        <Button variant="contained" sx={{ m: 10 }}  onClick={() => dark()}>
        Dark Theme
      </Button>
      <Button variant="contained" sx={{ m: 10 }}  onClick={() => ligth()}>
        Ligth Theme
      </Button>
        </Grid>
      
      </div>
  )
 }