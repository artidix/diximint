import Button from '@mui/material/Button';
import {requestMint} from './features/mint/mintSlice';
import {useDispatch} from 'react-redux';

export const Main = () => {
  const dispatch = useDispatch();

  const requestMinting = (phrase: string) => {
    dispatch(requestMint(phrase));
  }

  return (
    <Button variant="contained" onClick={() => requestMinting('zombie unicorn eats rainbow')}>Mint it!</Button>
  )
}