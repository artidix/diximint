import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from "@emotion/react";

import { WagmiConfig, createClient, defaultChains, configureChains } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

import { Main } from "./Main";
import { About } from "./About";
import { Navbar } from "./Navbar";
import { theme } from "./theme";
import { Auth } from "./features/auth/Auth";
import { Profile } from "./features/auth/Profile";
import { ALCHEMY_API_KEY } from "./common/app.config";

const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
  alchemyProvider({ apiKey: ALCHEMY_API_KEY }),
  publicProvider(),
]);

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
    <React.Fragment>
      <CssBaseline />

      <ThemeProvider theme={theme}>
        <Auth />

        <header>
          <WagmiConfig client={client}>
            <Navbar />
          </WagmiConfig>
        </header>

        {/* <Profile /> */}

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
