import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Tabs, Tab } from '@mui/material';
import { Link, matchPath, useLocation } from 'react-router-dom';

const getSelectedTab = (pathname) => {

  if (matchPath({ path: '/contacts', end: false}, pathname)) {
    return '/contacts';
  } else if (matchPath('/about', pathname)) {
    return '/about';
  }

  return '/';
}

export default function NavigationBar() {

  const { pathname } = useLocation();

  const [selectedTab, setSelectedTab] = useState('/');

  useEffect(() => {

    setSelectedTab(getSelectedTab(pathname));

  }, [pathname]);


  return (
      <AppBar position="sticky" sx={{ backgroundColor: 'white' }}>
        <Toolbar sx={{  }}>
          <Tabs value={selectedTab}  >
            <Tab label='Home' value='/' component={Link} to='' />
            <Tab label='Contacs' value='/contacts' component={Link} to='contacts' />
            <Tab label='About' value='/about' component={Link} to='about' />
          </Tabs>
        </Toolbar>
      </AppBar>
    
  );
}