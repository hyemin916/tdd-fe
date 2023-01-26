import { Box, LinearProgress } from '@mui/material';

const Loader = () => (
  <Box sx={styles.wrapper}>
    <LinearProgress color="primary" />
  </Box>
);

const styles = {
  wrapper: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 2001,
    width: '100%',
  },
};

export default Loader;
