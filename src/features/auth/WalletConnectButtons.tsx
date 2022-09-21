import React, { useEffect } from 'react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { Button, Box, Modal, Grid } from '@mui/material'


export const WalletConnectButtons = () => {
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect()

  const styles: { container: React.CSSProperties, item: React.CSSProperties, tmp: React.CSSProperties } = {
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
      margin: '.5rem',
      padding: '1rem 2rem 1rem 2rem'
    },
    tmp: {
      border: '1px #BB00AA solid',
      position: 'absolute' as 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem 1rem 2rem 1rem',
      backgroundColor: '#09001880'
    }
  }

  return (
    <Box style={styles.tmp}>
      {connectors.map((connector, i) => (
        <Button 
          style={styles.item}
          variant='contained'
          disabled={!connector.ready} key={connector.id} onClick={() => { connect({ connector }); }}>
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