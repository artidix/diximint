import { Paper, Box, styled, Avatar } from '@mui/material';
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
  border-radius: 4px;
  padding-top: 1rem;
`

export const Main = () => {
  const { address, isConnected } = useAccount();

  if (isConnected) {
    return (
      <StyledRoot>
        <StyledPaper>
          <StyledInsiderBlock>
            <Box display='flex' flexDirection='row' justifyContent='center'>
              <Avatar variant={"rounded"} alt="The image" src={'img/1703527298_color_zebra_with_transparent_background.png'} style={{
                width: 200,
                height: 200,
              }} />
              <Box position={'absolute'}>Sample</Box>
            </Box>
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