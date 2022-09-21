import { Paper, Box, styled, useMediaQuery } from '@mui/material';
import { useAccount } from 'wagmi';
import { ImageBox } from './common/ImageBox';
import { ConnectWalletButton } from './features/auth/ConnectWalletButton';
import { PhraseMint } from './features/mint/PhraseMint';
import { theme } from './theme';

const StyledRoot = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-height: 67vh;
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
  const bigScreen = useMediaQuery(theme.breakpoints.up('md'));

  if (isConnected) {
    return (
      <StyledRoot>
        <StyledPaper>
          <StyledInsiderBlock>
            <ImageBox img='3032612296_badass_cat_riding_harley_davidson.png' label='Sample' />
            <PhraseMint />
            <Box display='flex' flexDirection='row' justifyContent='center' margin='1rem'>
              <a href='https://www.coinbase.com/price/polygon' target="_blank">
                <img src='images/powered-by-polygon.png' alt='Powered by Polygon' height='26px' />
              </a>
            </Box>
          </StyledInsiderBlock>
        </StyledPaper>
      </StyledRoot>
    )
  } else {
    return (
      <Box>
        <Box display='flex' flexDirection='row' justifyContent='center' paddingTop='1rem'>
          <ImageBox img='3515549339_zebra_unicorn_in_a_galaxy.png' />
          <ImageBox img='1866953365_zebra_unicorn_in_a_galaxy.png' />
          <ImageBox img='2138429532_colored_zebra_unicorn_in_a_galaxy.png' />
        </Box>

        <Box display='flex' flexDirection='row' justifyContent='center'>
          <ConnectWalletButton />
        </Box>

        <Box display='flex' flexDirection='row' justifyContent='center'>
          <ImageBox img='4045315391_color_zebra_unicorn_in_a_galaxy.png' />
          <ImageBox img='2524076326_colored_cat_with_unicorn_in_a_galaxy.png' />
          <ImageBox img='34022896_colored_zebra_unicorn_in_a_galaxy.png' />
        </Box>
      </Box>
    )
  }
}