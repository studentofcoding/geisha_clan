import "./App.css";

// import Header from './components/Header';
// import Team from "./components/Team";
import { createTheme, ThemeProvider } from "@material-ui/core";

// import Carousel from "./components/Carousel";

// import styled from "styled-components";


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

// const ButtonLink = styled(Button)`
//   width: 100%;
//   text-align: center;
//   padding: auto !important;
//   background-color: #7a2031 !important;
//   color: white;
// `;

const App = () => {
  return (
    <>
      {/* <ThemeProvider theme={theme}>
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect={true}>
            <WalletDialogProvider>
            </WalletDialogProvider>
          </WalletProvider>
        </ConnectionProvider>
      </ThemeProvider> */}
      <ThemeProvider theme={theme}>
        <div className="app-container">
          <section id="home" className="landing hero_section">
            {/* <Header /> */}
            <div className="Container">
              {/* <img
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
              </div> */}
            </div>
          </section>
          
          {/* <section id="journey" className="section journey">
            <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
              <div className="flex flex-col w-full justify-center items-start text-center">
                <p className="title sm:text-5xl font-bold w-full">
                  NEW JOURNEY
                </p>
                <p className="content mt-3">
                  After taking part in the huge history of becoming a Japanese artist, Geisha want to find a new identity that had been lost in the modern era due to doubt and misconception.
                  <br />
                  <br />
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
              <Carousel />
            </div>
          </section>

          <section className="section main-section joinclan">
            <div className="joinClan w-full container mx-auto flex flex-row items-center">
              <div id="joinclan" className="title w-full justify-center text-center">
                <img
                  className="joinClanLogo py-10"
                  src="./join_clan.png"
                  alt="Join The Clan"
                  draggable="false"
                />
              </div>
              <div className="flex flex-wrap flex-col w-full justify-center items-center text-center lg:text-left">
                <div className="px-4 py-2 m-5 wallet border-solid border-4 border-white rounded-lg">
                  <div className="content flex flex-row justify-around mx-3 text-left">
                    <p className="w-2/3">
                      Price per geisha 0.77 SOL
                    </p>
                    <img
                      className="smallLogo w-1/3"
                      src="./logo_white.png"
                      alt="Join The Clan"
                      draggable="false"
                    />
                  </div>
                  <ButtonLink><a target="_blank" rel="noreferrer" className="mint-link" style={{textDecoration: "none !important"}} href="https://mint.thegeishaclan.com/">Join the clan</a></ButtonLink>
                  <p className="content mx-3 text-left">
                    Please use Phantom wallet for the best experience
                  </p>
                </div>
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
                  <p className="chapter">Chapter 1: The Journey
                  </p>
                  <p>
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
                  <p className="chapter">Chapter 2: Sakura Season (桜)
                  </p>
                  <p>
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
                  <p className="chapter">Chapter 3 : Explore & Prepare
                  </p>
                  <p>
                    The clan will prepare and look for mysterious creatures to help geisha assembling the force to protect their culture and identity.
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
                  <p className="chapter">Chapter 4 : The Story Continues
                  </p>
                  <p>
                    The Geisha Clan looking for new Alliance.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="team main-section">
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

              <Team />
            </div>
          </section> */}
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
