import React, { useState } from 'react'
import { useAccount } from 'wagmi'
import { Button, Box } from '@mui/material'
import { WalletConnectButtons } from './WalletConnectButtons'
import { DisconnectMenuButton } from './DisconnectMenuButton'
import { StyledModal } from '../../common/StyledModal'

export function Profile() {
  const { address, connector, isConnected } = useAccount()
  // const { data: ensAvatar } = useEnsAvatar({ addressOrName: address })
  // const { data: ensName } = useEnsName({ address })

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const styles: { container: React.CSSProperties } = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0,
    }
  }

  if (isConnected) {
    // console.log(`connected to ${connector?.name} by ${ensName ?? address}`);
    // console.log('ensAvatar:', ensAvatar);
    return (
      <Box style={styles.container} onClick={() => console.log('to open')}>
        <DisconnectMenuButton />
      </Box>
    )
  } else return (
    <React.Fragment>
      <Button color='secondary' onClick={handleOpen}>Sign in</Button>
      <StyledModal open={open} onClose={handleClose} aria-labelledby="auth-modal" aria-describedby="authentication-options">
        <Box>
          <WalletConnectButtons />
        </Box>
      </StyledModal>
    </React.Fragment>
  )


}