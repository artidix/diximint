import React from 'react'
import { Menu, MenuItem, Divider, Button, Box } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';

export const Tmp = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Button onClick={handleClick} variant='contained'>Menu</Button>
      <Menu
        id="profile-menu" MenuListProps={{ 'aria-labelledby': 'menu-buttom', }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {/* <Divider sx={{ my: 0.1 }} /> */}
        <MenuItem onClick={handleClose} >
          <Button startIcon={<LogoutIcon />}>Disconnect</Button>
        </MenuItem>
      </Menu>
    </React.Fragment>
  )
}