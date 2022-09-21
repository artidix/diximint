import { Paper, Box, styled, Avatar } from '@mui/material';
import { useAccount } from 'wagmi';
import { ImageBox } from './common/ImageBox';
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
            <ImageBox img='1703527298_color_zebra_with_transparent_background.png' label='Sample' />
            <PhraseMint />

            <ImageBox img='3515549339_zebra_unicorn_in_a_galaxy.png' label='Sample' />
          </StyledInsiderBlock>
        </StyledPaper>
      </StyledRoot>
    )
  } else {
    return (
      <Box>
        <Box display='flex' flexDirection='row' justifyContent='center'>
          <ImageBox img='1703527298_color_zebra_with_transparent_background.png' />
          <ImageBox img='3515549339_zebra_unicorn_in_a_galaxy.png' />
          <ImageBox img='2138429532_colored_zebra_unicorn_in_a_galaxy.png' />
        </Box>

        <Box display='flex' flexDirection='row' justifyContent='center'>
          <ConnectWalletButton />
        </Box>

        <Box display='flex' flexDirection='row' justifyContent='center'>
          <ImageBox img='3833673006_color_zebra_unicorn_in_a_galaxy.png' />
          <ImageBox img='3200915494_zebra_unicorn_in_a_galaxy.png' />
          <ImageBox img='3745541906_colored_cat_with_unicorn_in_a_galaxy.png' />
        </Box>
      </Box>
    )
  }
}