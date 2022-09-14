import React, { useEffect, useState } from 'react'
import Blockies from 'react-blockies'
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

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const styles: { container: React.CSSProperties } = {
    container: {
    }
  }

  if (isConnected) {
    console.log(`connected to ${connector?.name} by ${ensName ?? address}`);
    console.log('ensAvatar:', ensAvatar);
    return (
      <Box style={styles.container}>
        {
          ensAvatar ? <img src={ensAvatar ?? ''} alt="ENS Avatar" />
            : <Blockies seed={address?.toLocaleLowerCase() ?? ''} size={10} scale={3} />
        }

        {/* <Box>{ensName ? `${ensName} (${address})` : address}</Box> */}
        <Button color='secondary' onClick={() => disconnect()}>Disconnect</Button>
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