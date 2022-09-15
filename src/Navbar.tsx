import { Box, Button } from '@mui/material';
import { Profile } from './features/auth/ProfileButton';

const styles: { parts: React.CSSProperties } = {
  parts: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'middle',
    color: 'white'
  }
};

export const Navbar = () => {
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', color: 'white' }}>
      <Box style={styles.parts}><Button color='secondary' href={'/play'}>Win NFT</Button></Box>
      <Box style={styles.parts}><Button color='secondary' href={'/'}>Mint</Button></Box>
      <Box style={styles.parts}><Profile /></Box>
    </Box>
  )
}