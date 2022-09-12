import React, { useEffect, useState } from 'react'
import { useAccount, useConnect, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'
import { Button, Box, Modal } from '@mui/material'
import { WalletConnectButtons } from './WalletConnectButtons'

export function Profile() {
  const { address, connector, isConnected } = useAccount()
  const { data: ensAvatar } = useEnsAvatar({ addressOrName: address })
  const { data: ensName } = useEnsName({ address })
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect()
  const [showConnect, setShowConnet] = useState(false);

  const { disconnect } = useDisconnect()

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => { console.log('opening...'); setOpen(true); };
  const handleClose = () => { console.log('closing...'); setOpen(false); };

  const styles: { container: React.CSSProperties } = {
    container: {
    }
  }

  if (isConnected) {
    return (
      <Box style={styles.container}>
        <img src={ensAvatar ?? ''} alt="ENS Avatar" />
        <Box>{ensName ? `${ensName} (${address})` : address}</Box>
        <Box>Connected to {connector?.name}</Box>
        <button onClick={() => disconnect()}>Disconnect</button>
      </Box>
    )
  } else return (
    <React.Fragment>
      <Button color='secondary' onClick={handleOpen}>Profile</Button>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <WalletConnectButtons />
      </Modal>
    </React.Fragment>
  )

  
}