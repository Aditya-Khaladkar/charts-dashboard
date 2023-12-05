import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function ButtonAppBar() {
  const navigate = useNavigate();

  const handleDataClick = () => {
    // Use the navigate function to navigate to the "/data" route
    navigate("/data");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          {/* Use Link to navigate to the "/data" route */}
          <Link to="/data" style={{ textDecoration: 'none' }}>
            <Button color="inherit">Data</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
