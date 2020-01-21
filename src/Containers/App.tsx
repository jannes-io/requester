import React from 'react';
import { SnackbarProvider } from 'notistack';
import { I18nextProvider, I18nextProviderProps } from 'react-i18next';
import { MuiThemeProvider } from '@material-ui/core';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import Layout from './Layout';
import RequestContainer from './RequestContainer';

/*
color palette:
#70798C
#F5F1ED
#DAD2BC
#A99985
*/

const appTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#70798C',
    },
    secondary: {
      main: '#F5F1ED',
    },
    type: 'dark',
  },
});

const App: React.FC<I18nextProviderProps> = ({ i18n }) => (
  <MuiThemeProvider theme={appTheme}>
    <SnackbarProvider
      disableWindowBlurListener
      maxSnack={4}
    >
      <I18nextProvider i18n={i18n}>
        <Layout>
          <RequestContainer />
        </Layout>
      </I18nextProvider>
    </SnackbarProvider>
  </MuiThemeProvider>
);

export default App;
