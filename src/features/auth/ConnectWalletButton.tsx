import { useState } from "react";
import { Box, Button, styled } from "@mui/material";
import { WalletConnectButtons } from "./WalletConnectButtons";
import { StyledModal } from "../../common/StyledModal";

export const ConnectWalletButton = () => {

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
      <StyledModal open={open} onClose={handleClose}>
        <Box>
          <WalletConnectButtons />
        </Box>
      </StyledModal>
    </StyledBox>
  );
}