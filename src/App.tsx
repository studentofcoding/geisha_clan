import "./App.css";
// import "./adds_a.css";
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
              <section id="home" className="landing hero_section">
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
              <section id="journey" className="section journey">
                <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
                  <div className="flex flex-col w-full justify-center items-start text-center">
                    <p className="title sm:text-5xl font-bold w-full">
                      NEW JOURNEY
                    </p>
                    <p className="content mt-3">
                    After taking part in the huge history of becoming a Japanese artist, Geisha want to find a new identity that had been lost in the modern era due to doubt and misconception.
                    <br/>
                    <br/>
                    After a long Journey, The Geisha Clan finally found a way to the blockchain and was ready to make a new eternal life.
                    </p>
                  </div>
                </div>
              </section>
              <section className="section main-section">
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
                <div className="joinClan w-full container mx-auto flex flex-row items-center">
                  <div id="joinclan" className="title w-full justify-center text-center">
                    {/* JOIN THE CLAN */}
                    <img
                      className="joinClanLogo py-10"
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
              <div id="roadmap" className="flex flex-col w-full justify-center items-start text-left sm:text-center">
                <p className='title w-full sm:text-5xl font-bold text-center sm:text-center text-2xl my-8'>ROADMAP</p>
                <div className="card lg:card-side w-full">
                  <div className="avatar m-4">
                    <div className="w-24 h-24">
                      <img alt="roadmap" src="./logo_white.png" />
                    </div>
                  </div> 
                  <div className="content card-body"> 
                    <p>Chapter 1: The Journey
                      <br/>
                      The best Geisha starts a Journey and found a way to enter Solana Blockchain,
The Clan will celebrate by Giving away best Solana NFT to the community, 
and a Geisha for Lucky Holder.
</p>
                  </div>
                </div> 
                <div className="card lg:card-side w-full">
                  <div className="avatar m-4">
                    <div className="w-24 h-24">
                      <img alt="roadmap" src="./logo_white.png" />
                    </div>
                  </div>  
                  <div className="content card-body">
                    <p>Chapter 2: Sakura Season (桜)
                    <br/>
                    After all The Geisha Clan gets deployed, Season will change. 
And would be very magical time to make a Secondary Market and Rarity Placement for The Clan.
</p>
                  </div>
                </div>
                <div className="card lg:card-side w-full">
                  <div className="avatar m-4">
                    <div className="w-24 h-24">
                      <img alt="roadmap" src="./logo_white.png" />
                    </div>
                  </div>  
                  <div className="content card-body">
                    <p>Chapter 3 : Explore & Prepare
                    <br/>
                    The clan will prepare and look for mysterious creatures to help geisha assembling the force to protect their culture and identity.</p>
                  </div>
                </div>
                <div className="card lg:card-side w-full">
                  <div className="avatar m-4">
                    <div className="w-24 h-24">
                      <img alt="roadmap" src="./logo_white.png" />
                    </div>
                  </div>  
                  <div className="content card-body">
                    <p>Chapter 4 : The Story Continues
                    <br/>
                    The Geisha Clan looking for new Alliance.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="team section main-section">
                <div id="team" className="w-full container mx-auto flex flex-row items-center">
                  <div className="w-1/2 m-10">
                    <img
                      className="geisha_team"
                      src="./geisha_team.png"
                      alt="The Geisha Clan"
                      draggable="false"
                    />
                    <div className="flex justify-center w-full text-center">
                      <button className="sosmed_button">
                        <a href="https://twitter.com/thegeishaclan">
                        Twitter
                        </a>
                      </button>
                      <button className="sosmed_button">
                        <a href="https://discord.gg/b97UnqYN2w">
                        Discord
                        </a>
                      </button>
                    </div>
                  </div>

                  <div className="w-1/2 m-12 team-pic justify-center items-center text-center">
                    <img
                      className="team_pic"
                      src="./team_picture.png"
                      alt="The Geisha Team"
                      draggable="false"
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
