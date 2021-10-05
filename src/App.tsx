import "./App.css";
import { useMemo } from "react";

import Home from "./Home";

import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolletExtensionWallet,
} from "@solana/wallet-adapter-wallets";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
import { createTheme, ThemeProvider } from "@material-ui/core";

const treasury = new anchor.web3.PublicKey(
  process.env.REACT_APP_TREASURY_ADDRESS!
);

const config = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_CONFIG!
);

const candyMachineId = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_ID!
);

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

const txTimeout = 30000; // milliseconds (confirm this works for your project)

const nftName = "Geisha Clan";

const theme = createTheme({
    palette: {
        type: 'dark',
    },
    overrides: {
        MuiButtonBase: {
            root: {
                justifyContent: 'flex-start',
            },
        },
        MuiButton: {
            root: {
                textTransform: undefined,
                padding: '12px 16px',
            },
            startIcon: {
                marginRight: 8,
            },
            endIcon: {
                marginLeft: 8,
            },
        },
    },
});

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [
        getPhantomWallet(),
        getSlopeWallet(),
        getSolflareWallet(),
        getSolletWallet({ network }),
        getSolletExtensionWallet({ network })
    ],
    []
  );

  return (
      <ThemeProvider theme={theme}>
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect={true}>
            <WalletDialogProvider>
              <div className='app-container'>
                <section className='section main-section'>
                  <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    {/* Left Col */}
                    <div className="w-full md:w-3/5 justify-center text-center">
                      <img className="md:w-5/5 z-50" width="550px" alt="NFT name" src="/logo.png" />
                    </div>
                    {/* Right Col */}
                    <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                      <p className='title text-2xl font-bold'>This will be <span className='font-bold'>{nftName}</span> headline</p>
                      <p className='mt-3'>
                        This will be {nftName} short description
                      </p>
                      <Home
                        candyMachineId={candyMachineId}
                        config={config}
                        connection={connection}
                        startDate={startDateSeed}
                        treasury={treasury}
                        txTimeout={txTimeout}
                      />
                    </div>
                  </div>
                </section>
              </div>
            </WalletDialogProvider>
          </WalletProvider>
        </ConnectionProvider>
      </ThemeProvider>
  );
};

export default App;
