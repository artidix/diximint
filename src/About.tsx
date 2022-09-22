import { Box, Button, Paper, styled } from "@mui/material"
import { CenteredRowBox } from "./common/CenteredRowBox"
import { ImageBox } from "./common/ImageBox"

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
  max-width: 30rem;
  border: 1px solid #BB00AA;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  padding: 1rem;
`

export const About = () => {
  return (
    <StyledRoot>
      <StyledPaper>
        <StyledInsiderBlock>
          <CenteredRowBox>
            🦓
          </CenteredRowBox>
          <CenteredRowBox marginTop='.5rem'>
            Mint your unique NFT created by AI
          </CenteredRowBox>
          <CenteredRowBox>
            Then challenge others to guess it!
          </CenteredRowBox>
          <CenteredRowBox>
            <ImageBox img='artidix_logo2.png' />
          </CenteredRowBox>
          <CenteredRowBox>
            Type what do you want to see on the picture then just Mint it.
          </CenteredRowBox>
          <CenteredRowBox marginBottom='.5rem'>
            Every next NFT costs more. Hurry up while it's cheap!
          </CenteredRowBox>
          <CenteredRowBox>
            <Button href='/'>🥁 Try 🥁</Button>
          </CenteredRowBox>
          <CenteredRowBox marginTop='.5rem'>
            Later you will be able to join the Game: share link to your image and challenge others to guess what was your initial text phrase. The closest winner takes over your NFT and gets ability to mint a new one for free to continue The Game. But you win the money if they don't guess it right 😉
          </CenteredRowBox>
          <CenteredRowBox display='flex' flexDirection='row' justifyContent='center' marginTop='1rem'>
            <a href='https://www.coinbase.com/price/polygon' target="_blank">
              <img src='images/powered-by-polygon.png' alt='Powered by Polygon' height='26px' />
            </a>
          </CenteredRowBox>
        </StyledInsiderBlock>
      </StyledPaper>
    </StyledRoot>
  )
}