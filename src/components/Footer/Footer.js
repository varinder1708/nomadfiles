import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

import Typography from "@mui/material/Typography";


export default function GuestFooter() {
    return (
        <Box
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
            p: 1,
          }}
          component="footer"
        >
          <Container maxWidth="sm">
            <Typography variant="body2" color="text.secondary" align="center">
              {"Copyright © "}
              {/* <Link color="inherit" href="https://your-website.com/">
                Your Website
              </Link>{" "} */}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Container>
        </Box>
      );
  }