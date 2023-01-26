const Button = () => {
  return {
    MuiButton: {
      defaultProps: { disableElevation: true, size: 'small' },
      styleOverrides: {
        root: {
          fontWeight: 'bold',
        },
      },
    },
  };
};

export default Button;
