import React from 'react';
import Main from './src/screens/Main';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { ThemeProvider } from './src/context/theme';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </Provider>
  );
}
