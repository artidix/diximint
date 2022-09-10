import { Paper, Button } from '@mui/material';
import { useSnackbar } from 'notistack';
import { mintThunk } from './features/mint/mintTunk';
import { useAppDispatch } from './hooks';
import { MintThunkInput } from './features/mint/mintTunk';

const styles = {
  root: {
    flexGrow: 1,
    display: 'flex',
    margin: 16,
    justifyContent: 'center',
    alignItems: 'middle'
  }
};

export const Main = () => {
  const dispatch = useAppDispatch();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const requestMinting = async (phrase: string) => {
    var mintRequest = { phrase } as MintThunkInput;
    var res = await dispatch(mintThunk(mintRequest));

    const result = res.payload as any;
    if (result.id) {
      enqueueSnackbar(`${phrase}: ${result.id}`);
    }
  }

  return (
    <Paper style={styles.root}>
      <Button variant="contained" onClick={() => requestMinting('zombie unicorn eats rainbow')}>Mint it!</Button>
    </Paper>
  )
}