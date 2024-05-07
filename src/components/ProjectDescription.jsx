import { Typography, Paper, Link } from "@mui/material";

export default function ProjectDescription() {
  return (
    <Paper
        elevation={5}
        sx={{ maxWidth: 900, mx: "auto", padding: 3 }}
      >
        <Typography variant="h6" component="h4" >About</Typography>
        <Typography component="p" sx={{ paddingLeft: 2, fontSize: 16 }} >
          This project was built with <Link href="https://react.dev/" target="_blank">ReactJS</Link> and <Link href="https://mui.com/" target="_blank">MUI</Link> libraries 
          on the front end, and <Link href="https://expressjs.com/" target="_blank">ExpressJS</Link> and <Link href="https://www.mongodb.com/" target="_blank">MongoDB</Link> on 
          the back end. <br />
          The main purpose of this web application is to serve an exercise to better my skills as a fullstack software developer using JavaScript. <br />
          Another goal is to have some project to show in my resume for my potential employers where they can see what I&apos;m capable of.
        </Typography>
        <Typography variant="h6" component="h4" >Repository</Typography>
        <Typography component="p" sx={{ paddingLeft: 2, fontSize: 16 }}>
          The front end can be found at the following public <Link href="https://github.com/Miguelrom/contacts-mui" target="_blank" >GitHub repo</Link>. <br />
          The back end can be found at the following public <Link href="https://github.com/Miguelrom/contacts-api" target="_blank" >GitHub repo</Link>.
        </Typography>
        <Typography variant="h6" component="h4" >Author</Typography>
        <Typography component="p" sx={{ paddingLeft: 2, fontSize: 16 }} >
          Miguel Romero V
        </Typography>
        <Typography variant="h6" component="h4" >My portfolio</Typography>
        <Typography component="p" sx={{ paddingLeft: 2, fontSize: 16 }} >
          I showcase my lastest projects on my <Link href="https://miguelrom.github.io/" target="_blank">personal portfolio</Link>.
        </Typography>
        <Typography variant="h6" component="h4" >LinkedIn</Typography>
        <Typography component="p" sx={{ paddingLeft: 2, fontSize: 16 }} >
          If you want you can check out my <Link href="https://www.linkedin.com/in/miguel-romero-v/" target="_blank">LinkedIn</Link>.
        </Typography>
      </Paper>
  );
}