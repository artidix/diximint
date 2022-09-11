import { Button } from "@mui/material";
import { useAppDispatch } from "../../hooks";
import { requestLoginThunk } from "./requestLoginThunk";

export const ConnectWalletButton = () => {
  const dispatch = useAppDispatch();

    const connectWallet = async () => {
        // dispatch(requestLoginThunk());
        console.log('Connecting...');
    }

    return (
      <Button onClick={connectWallet} variant='contained'>Connect Wallet</Button>
    );
}