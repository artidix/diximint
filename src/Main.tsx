import { Paper, Button, Box, Container, Grid, Typography } from '@mui/material';
import { useAccount } from 'wagmi';
import { useSnackbar } from 'notistack';
import { mintThunk } from './features/mint/mintTunk';
import { useAppDispatch, useAppSelector } from './hooks';
import { MintThunkInput } from './features/mint/mintTunk';
import { useEffect, useState } from 'react';
import { ChainClient } from './common/chainclient';
import { ConnectWalletButton } from './features/auth/ConnectWalletButton';
import { CONTRACT_ADDRESS } from './common/app.config';
import { Tmp } from './Tmp';

const styles = {
  root: {
    flexGrow: 1,
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'middle',
    padding: '3rem'
  },
  central: {
    display: 'flex',
    justifyContent: 'center',
    border: '1px purple solid',
    borderRadius: '10px',
    padding: '.5rem',
    margin: '.1rem',
    backgroundColor: '#FFEDFF'
  }
};

export const Main = () => {
  const dispatch = useAppDispatch();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [currentPrice, setCurrentPrice] = useState(0);
  const { address, connector, isConnected } = useAccount();

  const requestMinting = async (phrase: string) => {
    var mintRequest = { phrase } as MintThunkInput;
    var res = await dispatch(mintThunk(mintRequest));

    const result = res.payload as any;
    if (result.id) {
      enqueueSnackbar(`${phrase}: ${result.id}`);
    }
  }

  async function fetchCurrentPrice(address: string) {
    const chainClient = new ChainClient(address);
    await chainClient.getCurrentPrice();
  }

  useEffect(() => {
    console.log('Contract Address:', CONTRACT_ADDRESS);
    if(address) {
      fetchCurrentPrice(address);
    }
  }, [address])

  if (isConnected) {
    return (
      <Paper style={styles.root}>
        ...
        <Box style={styles.central}></Box>
        <Box style={styles.central}>enter your phrase</Box>
        <Button variant="contained" onClick={() => requestMinting('zombie unicorn eats rainbow')}>Mint</Button>
        <Tmp />
        ...
        <Box style={styles.central}>game rules</Box>
        <Box style={styles.central}>current items count</Box>
        <Box style={styles.central}>opensea</Box>
        <Box style={styles.central}>which network</Box>

        <Container maxWidth={false}>
          <Grid container justifyContent='center' alignItems='center' sx={{ height: '30vh', border: '1px solid #0000AA', width:'50vw' }}>
            <Grid item container maxWidth='100vw'>
              <Grid item xs={6} sx={{ height: 60, backgroundColor: 'primary.main' }}>
                <Typography variant='h4'>Mint AI NFT</Typography>
              </Grid>
              <Grid item xs={6} sx={{ height: 60, backgroundColor: 'secondary.main'}}>
                <Typography variant='h4'>Guess and Win</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    )
  } else {
    return (
      <Paper style={styles.root}>
        <ConnectWalletButton />
      </Paper>
    )
  }


}