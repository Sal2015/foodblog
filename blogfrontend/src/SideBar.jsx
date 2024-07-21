import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import GraphicEq from '@mui/icons-material/GraphicEq';

export default function SideBar() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
        backgroundColor: 'black', // Set background color to black
        color: 'white', // Set text color to white
        height: '100%',
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Adminadd Blog', 'Admindelete Blog'].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)', // Slightly lighter background on hover
              },
            }}
          >
            <ListItemButton
              component="a"
              href={`/${text.toLowerCase().replace(' ', '-')}`}
              sx={{ color: 'white' }} // Ensure text color is white
            >
              <ListItemIcon sx={{ color: 'white' }}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ backgroundColor: 'white' }} /> {/* Divider color to white */}
      <List>
        {['Users'].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)', // Slightly lighter background on hover
              },
            }}
          >
            <ListItemButton
              component="a"
              href={`/${text.toLowerCase().replace(' ', '-')}`}
              sx={{ color: 'white' }} // Ensure text color is white
            >
              <ListItemIcon sx={{ color: 'white' }}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            sx={{ color: 'white' }} // Ensure button icon color is white
          >
            <GraphicEq sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            sx={{ '& .MuiDrawer-paper': { backgroundColor: 'black', color: 'white' } }} // Ensure drawer background color is black
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
