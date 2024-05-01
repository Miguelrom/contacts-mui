import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Tabs, Tab } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

export default function NavigationBar() {

  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(location.pathname);

  const handleTabChange = (event, value) => {

    setSelectedTab(value);
  }

  return (
      <AppBar position="sticky" sx={{ backgroundColor: 'white' }}>
        <Toolbar sx={{  }}>
          <Tabs value={selectedTab} onChange={handleTabChange} >
            <Tab label='Home' value='/' component={Link} to='' />
            <Tab label='Contacs' value='/contacts' component={Link} to='contacts' />
            <Tab label='About' value='/about' component={Link} to='about' />
          </Tabs>
        </Toolbar>
      </AppBar>
    
  );
}