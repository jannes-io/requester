import React from 'react';
import { SnackbarProvider } from 'notistack';

const App: React.FC = () => (
  <SnackbarProvider
    disableWindowBlurListener
    maxSnack={4}
  >
    <div>Hello</div>
  </SnackbarProvider>
);


export default App;
