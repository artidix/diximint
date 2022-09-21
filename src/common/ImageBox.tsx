import { Avatar, Box } from "@mui/material"

export const ImageBox = ({img, label} : {img: string, label?: string}) => {
  const maxWidth = 400;

  return (
    <Box display='flex' flexDirection='row' justifyContent='center' margin='1rem' marginBottom='2rem' maxWidth='300px'>
      <img alt="Sample" src={'img/' + img} style={{
        maxWidth: '100%',
        height: 'auto'
      }} />
      {label && <Box position={'absolute'} color='white'>{label}</Box>}
    </Box>
  )
}