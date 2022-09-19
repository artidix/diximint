import { Box, TextField } from '@mui/material'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks';
import { CurrentPriceComponent } from '../play/CurrentPriceComponent'
import { MintButton } from './MintButton';
import { currentPriceSelector, setPhrase } from './mintSlice';


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
      <Box display='flex' flexDirection='row' justifyContent='center'>
        <MintButton phrase={phrase} />
      </Box>
    </React.Fragment>
  )
}