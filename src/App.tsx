import "./App.css";
import "./adds_a.css";
// import "./adds_b.css";

import { useMemo } from "react";
import Header from './components/Header';

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

import Carousel from "./components/Carousel";

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

// const nftName = "Geisha Clan";

const theme = createTheme({
  palette: {
    type: "dark",
  },
  overrides: {
    MuiButtonBase: {
      root: {
        justifyContent: "flex-start",
      },
    },
    MuiButton: {
      root: {
        textTransform: undefined,
        padding: "12px 16px",
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
      getSolletExtensionWallet({ network }),
    ],
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect={true}>
          <WalletDialogProvider>
            <div className="app-container">
              <section id="home" className="hero_section bigLogo">
                <Header />
                <div className="Container">
                  {/* <img
                    className="Hero_Bookmark__1UTaa"
                    src="./img-bookmark-icon.svg"
                    alt="Bookmark Icon"
                    draggable="false"
                  /> */}
                  <img
                    className="bigLogo"
                    src="./BIG_LOGO.png"
                    alt="The Geisha Clan"
                    draggable="false"
                  />
                  {/* <h1 className="title_home">
                    THE GEISHA CLAN
                  </h1> */}
                  <div className="Hero_LinksContainer__De3u8">
                    {/* <a
                      href="https://geishaclan.netlify.app"
                      rel="noreferrer"
                    >
                      Discord
                    </a>
                    <a
                      href="https://geishaclan.netlify.app"
                      rel="noreferrer"
                    >
                      Twitter
                    </a> */}
                    <button>
                      Discord
                    </button>
                    <button>
                      Twitter
                    </button>
                  </div>
                </div>
              </section>
              <section id="journey" className="section">
                <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
                  <div className="flex flex-col w-full justify-center items-start text-center">
                    <p className="title sm:text-5xl font-bold w-full">
                      NEW JOURNEY
                    </p>
                    <p className="content mt-3">
                      AFTER TAKING PART IN A HUGE HISTORY BECOMING A JAPANESE ARTIST.
                      <br/>
                      GEISHA WANT TO FIND A NEW IDENTITY THAT HAD BEEN LOST IN THE MODERN ERA BECAUSE OF DOUBT AND MISCONCEPTION.
                      <br/>
                      AFTER A LONG JOURNEY, THE GEISHA FINALLY FOUND A WAY TO ENTER THE SOLANA BLOCKCHAIN AND WAS READY TO MAKE A NEW LIFE THAT WILL BE ETERNAL.
                    </p>
                    {/* <div className="hide">
                      <Home
                        candyMachineId={candyMachineId}
                        config={config}
                        connection={connection}
                        startDate={startDateSeed}
                        treasury={treasury}
                        txTimeout={txTimeout}
                      />
                    </div> */}
                  </div>
                </div>
              </section>
              <section id="theclan" className="the_clan_section main-section">
                <div className="container mx-auto w-full flex flex-wrap flex-col items-center">
                  <p className="title sm:text-5xl font-bold w-full">
                    THE CLAN
                  </p>
                  {/* <div className="Featured_Heading__1R2vu">
                  </div> */}
                  <Carousel />
                </div>
              </section>

              <section id="joinclan" className="section main-section">
                <div className="joinClan w-full container mx-auto flex flex-row  items-center">
                  <div className="title w-full justify-center text-center">
                    JOIN THE CLAN
                  </div>
                  <div className="flex flex-wrap flex-col w-full justify-center items-center text-center lg:text-left">
                    {/* <p className="title text-2xl font-bold">
                      This will be <span className="font-bold">the headline</span>
                    </p> */}
                    <p className="content mx-3">
                      This will be headline
                    </p>
                    <Home
                      candyMachineId={candyMachineId}
                      config={config}
                      connection={connection}
                      startDate={startDateSeed}
                      treasury={treasury}
                      txTimeout={txTimeout}
                    />
                    <p className="content mx-3">
                      This will be short description
                    </p>
                  </div>
                </div>
              </section>

              <section id="roadmap" className='section roadmap-section'>
              <div className="flex flex-col w-full justify-center items-start text-center sm:text-left">
                <p className='title w-full sm:text-5xl font-bold text-center sm:text-center text-2xl my-8'>ROADMAP</p>
                <div className="card lg:card-side w-full">
                  <div className="avatar m-4">
                    <div className="w-24 h-24">
                      <img alt="roadmap" src="./logo.png" />
                    </div>
                  </div> 
                  <div className="card-body"> 
                    <p>Chapter 1: The Journey
                      <br/>
                      The best Geisha starts a Journey and found a way to enter Solana Blockchain, The Clan will celebrate by Giving away Solana NFT To the community.
For The Geisha Owner there will be 10 raffle to get 1 Special Geisha and 9 Geisha.</p>
                  </div>
                </div> 
                <div className="card lg:card-side w-full">
                  <div className="avatar m-4">
                    <div className="w-24 h-24">
                      <img alt="roadmap" src="./logo.png" />
                    </div>
                  </div>  
                  <div className="card-body">
                    <p>Chapter 2: Sakura Season (桜)
                    <br/>
                      After all The Geisha Clan deployed, Season is changed and a very magical time to make a Secondary Market Placement for The Clan.</p>
                  </div>
                </div>
                <div className="card lg:card-side w-full">
                  <div className="avatar m-4">
                    <div className="w-24 h-24">
                      <img alt="roadmap" src="./logo.png" />
                    </div>
                  </div>  
                  <div className="card-body">
                    <p>Chapter 3 : Explore & Prepare
                    <br/>
                      The Geisha Clan will listed rarity on HowRare, so all the The Clan knows what the power they hold.</p>
                  </div>
                </div>
                <div className="card lg:card-side w-full">
                  <div className="avatar m-4">
                    <div className="w-24 h-24">
                      <img alt="roadmap" src="./logo.png" />
                    </div>
                  </div>  
                  <div className="card-body">
                    <p>Chapter 4 : The Story Continues
                    <br/>
                      The Geisha Clan looking for new Alliance.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* <section id="team" className="section main-section">
                <div className="team w-full container mx-auto flex flex-row  items-center">
                  <div className="title w-full justify-center text-center">
                    THE GEISHA TEAM
                  </div>
                  <div className="flex flex-wrap flex-col w-full justify-center items-center text-center lg:text-left">
                    
                    <p className="content mx-3">
                      IPATARCH
                    </p>
                    <p className="content mx-3">
                      IPATARCH
                    </p>
                    <p className="content mx-3">
                      IPATARCH
                    </p>
                    <p className="content mx-3">
                      IPATARCH
                    </p>
                  </div>
                </div>
              </section> */}
            </div>
          </WalletDialogProvider>
        </WalletProvider>
      </ConnectionProvider>
    </ThemeProvider>
  );
};

export default App;
