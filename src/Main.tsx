import { Paper, Box, styled } from '@mui/material';
import { useAccount } from 'wagmi';
import { ConnectWalletButton } from './features/auth/ConnectWalletButton';
import { PhraseMint } from './features/mint/PhraseMint';

const StyledRoot = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-height: 70vh;
`

const StyledPaper = styled(Paper)`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
`

const StyledInsiderBlock = styled(Box)`
  min-width: 20rem;
  border: 1px solid #BB00AA;
  display: flex;
  flex-direction: column;
`

export const Main = () => {
  const { address, isConnected } = useAccount();

  if (isConnected) {
    return (
      <StyledRoot>
        <StyledPaper>
          <StyledInsiderBlock>
            <PhraseMint />
          </StyledInsiderBlock>
        </StyledPaper>
      </StyledRoot>
    )
  } else {
    return (
      <StyledRoot>
        <ConnectWalletButton />
      </StyledRoot>
    )
  }
}