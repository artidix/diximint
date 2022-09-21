import { Avatar, Box } from "@mui/material"

export const ImageBox = ({img, label} : {img: string, label?: string}) => {

  return (
    <Box display='flex' flexDirection='row' justifyContent='center' margin='1rem' marginBottom='2rem'>
      <img alt="Sample" src={'img/' + img} style={{
        // width: 200,
        // height: 200,
        maxWidth: '100%',
        height: 'auto'
      }} />
      {label && <Box position={'absolute'} color='white'>{label}</Box>}
    </Box>
  )
}