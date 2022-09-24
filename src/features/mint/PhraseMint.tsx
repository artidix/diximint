import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks';
import { CurrentPriceComponent } from '../play/CurrentPriceComponent'
import { currentPriceSelector, setPhrase } from './mintSlice';
import { MintButton } from './MintButton';
import { CenteredRowBox } from '../../common/CenteredRowBox';
import { STABILITY_AI_KEY } from "../../common/app.config"
import { generate, generateAsync } from 'stability-ts'


export const PhraseMint = () => {
  const dispatch = useAppDispatch();
  const phrase = useAppSelector(currentPriceSelector);

  const setInputPhrase = (inputPhrase: string) => {
    dispatch(setPhrase(inputPhrase));
  }

  // const sampleIPFSid = 'Qmd286K6pohQcTKYqnS1YhWrCiS4gz7Xi34sdwMe9USZ7u';
  async function handleGeneration() {
    console.log('calling with', STABILITY_AI_KEY);

    const samplePhrase = 'Badass cat skateboarding over the rainbow';

    // try {
    //   const hz = await generateAsync({
    //     prompt: samplePhrase,
    //     apiKey: STABILITY_AI_KEY,
    //   });

    //   console.log(hz);
    // } catch(e) {
    //   console.log(e);
    // }

    // const api = generate({
    //   prompt: samplePhrase,
    //   apiKey: STABILITY_AI_KEY,
    // })
    
    // api.on('image', ({ buffer, filePath }) => {
    //   console.log('Image', buffer, filePath)
    // })
    
    // api.on('end', (data) => {
    //   console.log('Generating Complete', data)
    // })


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
          onClick={handleGeneration}
          sx={{ margin: '.5rem', width: '10rem', padding: '1rem 2rem 1rem 2rem' }}>
          Generate
        </Button>
      </CenteredRowBox>
      <CenteredRowBox>
        <Button variant="contained"
          disabled
          sx={{ margin: '.5rem', width: '10rem', padding: '1rem 2rem 1rem 2rem' }}>
          IPFS
        </Button>
      </CenteredRowBox>
      <CenteredRowBox>
      <Button variant="contained"
          disabled
          sx={{ margin: '.5rem', width: '10rem', padding: '1rem 2rem 1rem 2rem' }}>
          Finalize
        </Button>
      </CenteredRowBox>
    </React.Fragment>
  )
}