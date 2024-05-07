import { Typography } from "@mui/material";
import ProjectDescription from "../components/ProjectDescription";


export default function About() {
  return (
    <>
      <Typography
        align="center"
        variant="h4"
        component="h1"
        sx={{ marginBottom: 4 }}
      >
        About this project
      </Typography>
      <ProjectDescription />
    </>
  );
}