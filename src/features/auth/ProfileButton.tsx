import React, { useEffect, useState } from 'react'
import Blockies from 'react-blockies'
import { useAccount, useConnect, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'
import { Button, Box, Modal, Menu, MenuItem } from '@mui/material'
import { WalletConnectButtons } from './WalletConnectButtons'
import LogoutIcon from '@mui/icons-material/Logout';

export function Profile() {
  const { address, connector, isConnected } = useAccount()
  const { data: ensAvatar } = useEnsAvatar({ addressOrName: address })
  const { data: ensName } = useEnsName({ address })
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect()
  const [showConnect, setShowConnet] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorEl(null);
  };

  const { disconnect } = useDisconnect()

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const styles: { container: React.CSSProperties } = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0,
      cursor: 'pointer',
    }
  }

  if (isConnected) {
    console.log(`connected to ${connector?.name} by ${ensName ?? address}`);
    console.log('ensAvatar:', ensAvatar);
    return (
      <Box style={styles.container} onClick={handleOpenMenu}>
        {
          ensAvatar ? <img src={ensAvatar ?? ''} alt="ENS Avatar" />
            : <Blockies seed={address?.toLocaleLowerCase() ?? ''} size={10} scale={3} />
        }

        {/* <Box>{ensName ? `${ensName} (${address})` : address}</Box> */}
        <Button color='secondary' onClick={() => disconnect()}>Disconnect</Button>
        <Menu
          id="profile-menu" MenuListProps={{ 'aria-labelledby': 'menu-buttom', }}
          anchorEl={anchorEl}
          open={openMenu}
          onClose={closeMenu}
        >
          {/* <Divider sx={{ my: 0.1 }} /> */}
          <MenuItem onClick={handleClose} >
            <Button startIcon={<LogoutIcon />}>Disconnect</Button>
          </MenuItem>
        </Menu>
      </Box>
    )
  } else return (
    <React.Fragment>
      <Button color='secondary' onClick={handleOpen}>Sign in</Button>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <WalletConnectButtons />
      </Modal>
    </React.Fragment>
  )


}