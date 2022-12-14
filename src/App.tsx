import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from "@emotion/react";

import { chain, WagmiConfig, createClient, configureChains } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
// import { alchemyProvider } from 'wagmi/providers/alchemy'

import { Main } from "./Main";
import { About } from "./About";
import { Navbar } from "./Navbar";
import { theme } from "./theme";
// import { ALCHEMY_API_KEY } from "./common/app.config";

const { chains, provider, webSocketProvider } = configureChains([chain.localhost], [publicProvider()]);

const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({ chains, options: { appName: 'wagmi' } }),
    new WalletConnectConnector({ chains, options: { qrcode: true } }),
    new InjectedConnector({ chains, options: { name: 'Injected', shimDisconnect: true } })
  ],
  provider,
  webSocketProvider,
});

function App() {
  return (
    <Fragment>
      <CssBaseline />

      <ThemeProvider theme={theme}>
        <WagmiConfig client={client}>
          <header>
            <Navbar />
          </header>
          
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={<Main />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </BrowserRouter>
        </WagmiConfig>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
