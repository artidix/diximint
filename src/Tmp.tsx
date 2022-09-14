import React from 'react'
import { Menu, MenuItem, Divider, Button } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';

const styles = {
  menu: {
    backgroundColor: 'brown',
    border: '1px blue solid'
  },
  item: {
    backgroundColor: 'yellow',
  },
  icon: {
    margin: '1rem .5rem .5rem .5rem',
    border: '1px lime solid'
  }
}

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
        style={styles.menu}
      >
        {/* <Divider sx={{ my: 0.1 }} /> */}
        <MenuItem style={styles.item} onClick={handleClose} disableRipple>
          <LogoutIcon style={styles.icon} />
          Disconnect
        </MenuItem>
      </Menu>
    </React.Fragment>
  )
}