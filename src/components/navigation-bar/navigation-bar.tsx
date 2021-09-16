import { NextPage } from 'next';
import 'bootstrap/dist/css/bootstrap.css';
import { AppBar, Box, Toolbar , Typography } from '@material-ui/core';

const NavigationBar: NextPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="bg-primary" position="static">
        <Toolbar>
          <Typography className="ms-2" variant="h6" component="div" >
            Todo App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;
