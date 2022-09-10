import Button from '@mui/material/Button';
import { mintThunk } from './features/mint/mintTunk';
import { useAppDispatch } from './hooks';
import { MintThunkInput } from './features/mint/mintTunk';

export const Main = () => {
  const dispatch = useAppDispatch();

  const requestMinting = async (phrase: string) => {
    var mintRequest = {phrase} as MintThunkInput;
    var res = await dispatch(mintThunk(mintRequest));

    console.log('RES', res.payload);
  }

  return (
    <>
      <Button variant="contained" onClick={() => requestMinting('zombie unicorn eats rainbow')}>Mint it!</Button>
    </>
  )
}