import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
//import Typography from '@mui/material/Typography';
//import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import logo from '../../assets/logo/logo.png';
import news from '../../assets/logo/news.png';
//import MenuIcon from '@mui/icons-material/Menu';

const Header: React.FC = () => {
   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar
            position="static"
            sx={{
               display: 'flex',
               height: '207px',
               justifyContent: 'center',
               opacity: 0.8,
               /* alignItems: 'center', */
               }} >
            <Toolbar
               /* sx={{
                  gap: '1rem',
                  alignItems: 'center',
               }} */
            >
               <IconButton
                  /* size="large" */
                  /* edge="end" */
                  color="inherit"
                  aria-label="menu"
                  sx={{
                     ml: '42%',
                     /* mr: 2, */
                     /* fontWeight: 800, */
                     /* textAlign: 'center', */
                     /* marginLeft: 'auto',
                     marginRight: 'auto', */
                  }}
               >
                  <img src={logo} alt="logo" width={156} height={115} />
                  {/* logo */}
                  {/* <MenuIcon /> */}
               </IconButton>
               <Box sx={{ flex: '1' }} />
               <IconButton
                  size="large"
                  /* edge="end" */
                  color="inherit"
                  aria-label="menu"
                  sx={{
                     mr: '16%',
                     /* justifyContent: 'right', */
                     fontWeight: 800,
                     /*  marginLeft: 'auto',
                      marginRight: 'auto', */
                  }}
               >
                  <img src={news} alt="news" width={216} height={47} />
               </IconButton>
               {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Новини
               </Typography> */}
               {/* <Button color="inherit" sx={{  color: '#FFFFFF' , fontWeight: '800' }}>OK</Button> */}
            </Toolbar>
         </AppBar>
      </Box>
   )
}

export default Header;