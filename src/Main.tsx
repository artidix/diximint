import { Paper, Button, Box } from '@mui/material';
import { useSnackbar } from 'notistack';
import { mintThunk } from './features/mint/mintTunk';
import { useAppDispatch } from './hooks';
import { MintThunkInput } from './features/mint/mintTunk';
import { useEffect, useState } from 'react';
import { getCurrentPrice } from './common/chainclient';

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

  const requestMinting = async (phrase: string) => {
    var mintRequest = { phrase } as MintThunkInput;
    var res = await dispatch(mintThunk(mintRequest));

    const result = res.payload as any;
    if (result.id) {
      enqueueSnackbar(`${phrase}: ${result.id}`);
    }
  }

  async function fetchCurrentPrice() {
    const priceResponse = await getCurrentPrice();
    console.log('PRICE RESPONSE:', priceResponse);
  }

  useEffect(() => {
    fetchCurrentPrice();
  })

  return (
    <Paper style={styles.root}>
      <Button variant="contained">Login</Button>
      ...
      <Box style={styles.central}></Box>
      <Box style={styles.central}>enter your phrase</Box>
      <Button variant="contained" onClick={() => requestMinting('zombie unicorn eats rainbow')}>Mint</Button>
      ...
      <Box style={styles.central}>game rules</Box>
      <Box style={styles.central}>current items count</Box>
      <Box style={styles.central}>opensea</Box>
      <Box style={styles.central}>which network</Box>
    </Paper>
  )
}