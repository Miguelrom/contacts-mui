import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import { Container } from "@mui/material";

export default function Root() {

  return (
    <>
      <NavigationBar />
      <Container component='main' maxWidth='xl' sx={{ paddingTop: 2}}>
        <Outlet />
      </Container>
    </>
  );
}