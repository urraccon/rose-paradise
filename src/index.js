import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import 'normalize.css';
import { createTheme, ThemeProvider } from '@mui/material';
import '@fontsource/jost/100.css';
import '@fontsource/jost/200.css';
import '@fontsource/jost/300.css';
import '@fontsource/jost/400.css';
import '@fontsource/jost/500.css';
import '@fontsource/jost/600.css';
import '@fontsource/jost/700.css';
import '@fontsource/jost/800.css';
import '@fontsource/jost/900.css';

const theme = createTheme({
  typography: {
    fontFamily: 'Jost',
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
