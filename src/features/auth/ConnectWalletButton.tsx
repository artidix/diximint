import { useState } from "react";
import { Box, Button, styled } from "@mui/material";
import { useAppDispatch } from "../../hooks";
import { WalletConnectButtons } from "./WalletConnectButtons";
import { StyledModal } from "../../common/StyledModal";

export const ConnectWalletButton = () => {
  // const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const StyledBox = styled(Box)`
    padding: 2rem;
    margin: 1rem;
  `

  return (
    <StyledBox>
      <Button onClick={handleOpen} variant='contained' color='secondary' sx={{padding: '1rem 2rem 1rem 2rem'}}>Connect Wallet</Button>
      <StyledModal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <WalletConnectButtons />
      </StyledModal>
    </StyledBox>
  );
}