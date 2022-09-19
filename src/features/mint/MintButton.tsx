import { Button } from "@mui/material"
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { useSnackbar } from "notistack";
import { mintThunk, MintThunkInput } from "./mintTunk";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { currentPriceSelector } from "./mintSlice";

export const MintButton = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();
  const phrase = useAppSelector(currentPriceSelector);

  
  const requestMinting = async (_phrase: string) => {
    var mintRequest = { phrase: _phrase } as MintThunkInput;
    var res = await dispatch(mintThunk(mintRequest));

    const result = res.payload as any;
    if (result.id) {
      enqueueSnackbar(`${_phrase}: ${result.id}`);
    }
  }

  return (
    <Button
      variant="contained"
      sx={{ margin: '.5rem' }}
      disabled={phrase == ''}
      startIcon={<RocketLaunchIcon />}
      onClick={() => requestMinting(phrase)}>
      Mint
    </Button>
  )
}