import React from 'react';
import { Paper, Button, Box, Typography, TextField, styled } from '@mui/material';
import { useAccount } from 'wagmi';
import { mintThunk } from './features/mint/mintTunk';
import { useAppDispatch, useAppSelector } from './hooks';
import { MintThunkInput } from './features/mint/mintTunk';
import { useEffect, useState } from 'react';
import { ChainClient } from './common/chainclient';
import { ConnectWalletButton } from './features/auth/ConnectWalletButton';
import { CONTRACT_ADDRESS } from './common/app.config';
import { CurrentPriceComponent } from './features/play/CurrentPriceComponent';
import { MintButton } from './features/mint/MintButton';
import { currentPriceSelector, setPhrase } from './features/mint/mintSlice';
import { PhraseMint } from './features/mint/PhraseMint';

const RootContainer = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-height: 70vh;
`

const StyledPaper = styled(Paper)`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
`

const StyledInsider = styled(Box)`
  min-width: 20rem;
  border: 1px solid #BB00AA;
  display: flex;
  flex-direction: column;
`

export const Main = () => {
  const [currentPrice, setCurrentPrice] = useState(null as Number | null);
  const { address, isConnected } = useAccount();

  

  if (isConnected) {
    return (
      <RootContainer>
        <StyledPaper>
          <StyledInsider>
            <PhraseMint />
          </StyledInsider>
        </StyledPaper>
      </RootContainer>
    )
  } else {
    return (
      <RootContainer>
        <ConnectWalletButton />
      </RootContainer>
    )
  }
}