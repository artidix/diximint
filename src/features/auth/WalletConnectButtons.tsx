import React, { useEffect } from 'react'
import { useAccount, useConnect, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'
import { Button, Box, Modal } from '@mui/material'


export const WalletConnectButtons = () => {
  const { address, connector, isConnected } = useAccount()
  const { data: ensAvatar } = useEnsAvatar({ addressOrName: address })
  const { data: ensName } = useEnsName({ address })
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect()

  const { disconnect } = useDisconnect()

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const styles: { container: React.CSSProperties, item: React.CSSProperties } = {
    container: {
      border: '3px #FF00DD solid',
      display: 'flex',
      flexDirection: 'column',
      paddingTop: '2rem',
      paddingBottom: '2rem',
      maxWidth: '20rem',
      // backgroundColor: '#120030'
    },
    item: {
      margin: '.5rem'
    }
  }

  return (
    <Box style={styles.container}>
      {connectors.map((connector) => (
        <Button style={styles.item}
          variant='contained'
          disabled={!connector.ready} key={connector.id} onClick={() => {connect({ connector }); handleClose()}}>
          {connector.name}
          {!connector.ready && ' (unsupported)'}
          {isLoading &&
            connector.id === pendingConnector?.id &&
            ' (connecting)'}
        </Button>
      ))}

      {error && <div>{error.message}</div>}
    </Box>
  )
}