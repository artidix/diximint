import React, { useEffect } from 'react'
import { useAccount, useConnect, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'
import { Button, Box, Modal, Grid } from '@mui/material'


export const WalletConnectButtons = () => {
  const { address, connector, isConnected } = useAccount()
  const { data: ensAvatar } = useEnsAvatar({ addressOrName: address })
  const { data: ensName } = useEnsName({ address })
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect()

  const { disconnect } = useDisconnect()

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const styles: { container: React.CSSProperties, item: React.CSSProperties,tmp: React.CSSProperties } = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '100vh',
      backgroundColor: '#090018A0'
    },
    item: {
      margin: '.5rem'
    },
    tmp: {
      border: '1px #BB00AA solid',
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem 1rem 2rem 1rem',
      minWidth: '18rem',
      maxWidth: '30rem',
    }
  }

  return (
    <Box style={styles.container}>
      <Box style={styles.tmp}>
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
    </Box>

    // <Grid container justifyContent='center' alignItems='center' sx={{ height: '100vh', border: '1px solid #0000AA' }}>
    //   <Grid item container>
    //     <Grid item xs={6} sx={{ height: '100vh', backgroundColor: 'primary.main', border: '3px #FF00DD solid' }} justifyContent="center">
    //       111
    //     </Grid>
    //   </Grid>
    // </Grid>
  )
}