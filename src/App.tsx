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
              <section id="home" className="landing hero_section bigLogo">
                <Header />
                <div className="Container">
                  <img
                    className="bigLogo"
                    src="./BIG_LOGO.png"
                    alt="The Geisha Clan"
                    draggable="false"
                  />
                  <div className="Hero_LinksContainer__De3u8">
                    <button className="sosmed_button">
                      <a href="https://discord.gg/b97UnqYN2w">
                      Discord
                      </a>
                    </button>
                    <button className="sosmed_button">
                      <a href="https://twitter.com/thegeishaclan">
                      Twitter
                      </a>
                    </button>
                  </div>
                </div>
              </section>
              <section className="section journey">
                <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
                  <div className="flex flex-col w-full justify-center items-start text-center">
                    <p id="journey" className="title sm:text-5xl font-bold w-full">
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
              <section className="the_clan_section main-section">
                <div className="container mx-auto w-full flex flex-wrap flex-col items-center">
                  <p id="theclan" className="title sm:text-5xl font-bold w-full">
                    THE CLAN
                  </p>
                  {/* <div className="Featured_Heading__1R2vu">
                  </div> */}
                  <Carousel />
                </div>
              </section>

              <section className="section main-section joinclan">
                <div className="joinClan w-full container mx-auto flex flex-row  items-center">
                  <div id="joinclan" className="title w-full justify-center text-center">
                    {/* JOIN THE CLAN */}
                    <img
                      className="bigLogo p-20"
                      src="./join_clan.png"
                      alt="Join The Clan"
                      draggable="false"
                    />
                  </div>
                  <div className="flex flex-wrap flex-col w-full justify-center items-center text-center lg:text-left">
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

              <section className='section roadmap-section'>
              <div className="flex flex-col w-full justify-center items-start text-center sm:text-left">
                <p id="roadmap" className='title w-full sm:text-5xl font-bold text-center sm:text-center text-2xl my-8'>ROADMAP</p>
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

            <section className="team section main-section">
                <div id="team" className=" w-full container mx-auto flex flex-row  items-center">
                  <div className="w-2/6">
                    <img
                      // className="w-2/6"
                      src="./geisha_team.png"
                      alt="The Geisha Clan"
                      draggable="false"
                    />
                  </div>

                  <div className="w-2/6">
                    <img
                      className="footer_logo"
                      src="./logo.png"
                      alt="The Geisha Clan"
                      draggable="false"
                    />
                  </div>

                  <div className="flex flex-wrap flex-col w-2/6 justify-center items-center text-center lg:text-left">
                    <button className="footer_button w-full">
                      <a href='https://geishaclan.netlify.app/'>
                      IPATARCH
                      </a>
                    </button>
                    <button className="footer_button w-full">
                      <a href='https://geishaclan.netlify.app/'>
                      Clevt
                      </a>
                    </button>
                    <button className="footer_button w-full">
                      <a href='https://geishaclan.netlify.app/'>
                      Ark
                      </a>
                    </button>
                    <button className="footer_button w-full">
                      <a href='https://geishaclan.netlify.app/'>
                      Sens
                      </a>
                    </button>
                  </div>
                </div>
                <div className="flex justify-end w-full text-right">
                    <button className="sosmed_button">
                      <a href="https://discord.gg/b97UnqYN2w">
                      Discord
                      </a>
                    </button>
                    <button className="sosmed_button">
                      <a href="https://twitter.com/thegeishaclan">
                      Twitter
                      </a>
                    </button>
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
