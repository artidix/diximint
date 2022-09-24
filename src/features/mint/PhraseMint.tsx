import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks';
import { CurrentPriceComponent } from '../play/CurrentPriceComponent'
import { currentPriceSelector, setPhrase } from './mintSlice';
import { MintButton } from './MintButton';
import { CenteredRowBox } from '../../common/CenteredRowBox';


export const PhraseMint = () => {
  const dispatch = useAppDispatch();
  const phrase = useAppSelector(currentPriceSelector);

  const setInputPhrase = (inputPhrase: string) => {
    dispatch(setPhrase(inputPhrase));
  }


  return (
    <React.Fragment>
      <CurrentPriceComponent />
      <TextField
        id="input-phrase"
        onChange={(e) => setInputPhrase(e.target.value)}
        placeholder="Type your phrase"
        variant="outlined"
        sx={{
          input: {
            textAlign: "center",
          },
          margin: '.5rem',
        }}
      />
      <CenteredRowBox>
        <MintButton phrase={phrase} />
      </CenteredRowBox>
      <CenteredRowBox>
        <Button variant="contained"
          sx={{ margin: '.5rem', width: '10rem', padding: '1rem 2rem 1rem 2rem' }}>
          Generate
        </Button>
      </CenteredRowBox>
      <CenteredRowBox>
        <div>... upload to IPFS</div>
      </CenteredRowBox>
      <CenteredRowBox>
        <div>... finalize</div>
      </CenteredRowBox>
    </React.Fragment>
  )
}