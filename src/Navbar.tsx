import { Box } from '@mui/material';

const styles = {
  parts: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'middle',
    color: 'white'
  }
};

export const Navbar = () => {
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', color: 'white' }}>
      <Box style={styles.parts}>Attack NFTs</Box>
      <Box style={styles.parts}>Mint</Box>
      <Box style={styles.parts}>Addr</Box>
    </Box>
  )
}