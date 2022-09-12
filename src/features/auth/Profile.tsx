import React from 'react'
import { useAccount, useConnect, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'
import { Button, Box } from '@mui/material'

export function Profile() {
  const { address, connector, isConnected } = useAccount()
  const { data: ensAvatar } = useEnsAvatar({ addressOrName: address })
  const { data: ensName } = useEnsName({ address })
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect()

  const { disconnect } = useDisconnect()

  const styles: { connected: React.CSSProperties, disconnected: React.CSSProperties } = {
    connected: {
      border: '3px lime solid'
    },
    disconnected: {
      border: '3px violet solid',
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem',
      maxWidth: '15rem'
    }
  }

  if (isConnected) {
    return (
      <Box style={styles.connected}>
        <img src={ensAvatar ?? ''} alt="ENS Avatar" />
        <Box>{ensName ? `${ensName} (${address})` : address}</Box>
        <Box>Connected to {connector?.name}</Box>
        <button onClick={() => disconnect()}>Disconnect</button>
      </Box>
    )
  }

  return (
    <Box style={styles.disconnected}>
      {connectors.map((connector) => (
        <Button
          variant='contained'
          disabled={!connector.ready} key={connector.id} onClick={() => connect({ connector })}>
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