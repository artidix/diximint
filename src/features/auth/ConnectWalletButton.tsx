import { Fragment, useState } from "react";
import { Button } from "@mui/material";
import { useAppDispatch } from "../../hooks";
import { WalletConnectButtons } from "./WalletConnectButtons";
import { StyledModal } from "../../common/StyledModal";

export const ConnectWalletButton = () => {
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <Fragment>
      <Button onClick={handleOpen} variant='contained' color='secondary'>Connect Wallet</Button>
      <StyledModal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <WalletConnectButtons />
      </StyledModal>
    </Fragment>
  );
}