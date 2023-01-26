const Grid = () => {
  return {
    MuiGrid: {
      styleOverrides: {
        item: {
          display: 'flex',
          alignItems: 'center',
          width: '100%',
        },
      },
    },
  };
};

export default Grid;
