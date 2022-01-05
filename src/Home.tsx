import { useEffect, useState } from "react";
import styled from "styled-components";
import Countdown from "react-countdown";
import { Button, CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import * as anchor from "@project-serum/anchor";

import { LAMPORTS_PER_SOL } from "@solana/web3.js";

import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";

import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
  shortenAddress,
} from "./candy-machine";

import { isWhitelisted } from "./whitelisted";

const ConnectButton = styled(WalletDialogButton)`
  width: 100%;
  text-align: center;
  background-color: #7a2031 !important;
  color: white;
`;

const CounterText = styled.span``; // add your styles here

const MintContainer = styled.div``; // add your styles here

const MintButton = styled(Button)``; // add your styles here

export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
}

const Home = (props: HomeProps) => {
  const [, setBalance] = useState<number>();
  const [isActive, setIsActive] = useState(false); // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT

  const [, setItemsAvailable] = useState(0);
  const [, setItemsRedeemed] = useState(0);
  const [itemsRemaining, setItemsRemaining] = useState(0);

  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });

  const [, setStartDate] = useState(new Date(props.startDate));

  const wallet = useAnchorWallet();
  const [candyMachine, setCandyMachine] = useState<CandyMachine>();

  const [address, setAddress] = useState("");
  const now = new Date().getTime();

  const launchDateWhitelisted = new Date(
    Date.UTC(2021, 10, 11, 0, 0, 0, 0)
  ).getTime();
  const launchDate = new Date(Date.UTC(2021, 10, 29, 0, 5, 0, 0)).getTime();
  const [whitelisted, setWhitelisted] = useState(false);
  const [canMint, setCanMint] = useState(false);

  useEffect(() => {
    if (!address) {
      setCanMint(false);
      return;
    }

    if (now < launchDateWhitelisted) {
      setCanMint(false);
      return;
    }

    if (whitelisted && now >= launchDateWhitelisted) {
      setCanMint(true);
      return;
    }

    if (!whitelisted && now >= launchDateWhitelisted && now < launchDate) {
      setCanMint(false);
      return;
    }

    if (now >= launchDate) {
      setCanMint(true);
    }
  }, [whitelisted, address, launchDate, launchDateWhitelisted, now]);

  useEffect(() => {
    if (wallet) setAddress(wallet?.publicKey.toBase58());
  }, [wallet]);

  useEffect(() => {
    if (address) {
      setWhitelisted(isWhitelisted(address));
    }
  }, [address]);

  const refreshCandyMachineState = () => {
    (async () => {
      if (!wallet) return;

      const {
        candyMachine,
        goLiveDate,
        itemsAvailable,
        itemsRemaining,
        itemsRedeemed,
      } = await getCandyMachineState(
        wallet as anchor.Wallet,
        props.candyMachineId,
        props.connection
      );

      setItemsAvailable(itemsAvailable);
      setItemsRemaining(itemsRemaining);
      setItemsRedeemed(itemsRedeemed);

      setIsSoldOut(itemsRemaining === 0);
      setStartDate(goLiveDate);
      setCandyMachine(candyMachine);
    })();
  };

  const onMint = async () => {
    try {
      setIsMinting(true);
      if (wallet && candyMachine?.program) {
        const mintTxId = await mintOneToken(
          candyMachine,
          props.config,
          wallet.publicKey,
          props.treasury
        );

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          props.txTimeout,
          props.connection,
          "singleGossip",
          false
        );

        if (!status?.err) {
          setAlertState({
            open: true,
            message: "Congratulations! Mint succeeded!",
            severity: "success",
          });
        } else {
          setAlertState({
            open: true,
            message: "Mint failed! Please try again!",
            severity: "error",
          });
        }
      }
    } catch (error: any) {
      // TODO: blech:
      let message = error.msg || "Minting failed! Please try again!";
      if (!error.msg) {
        if (error.message.indexOf("0x138")) {
        } else if (error.message.indexOf("0x137")) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          setIsSoldOut(true);
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: "error",
      });
    } finally {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
      setIsMinting(false);
      refreshCandyMachineState();
    }
  };

  useEffect(() => {
    (async () => {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, props.connection]);

  useEffect(refreshCandyMachineState, [
    wallet,
    props.candyMachineId,
    props.connection,
  ]);

  return (
    <main>
      {wallet && (
        <p>Wallet {shortenAddress(wallet.publicKey.toBase58() || "")}</p>
      )}

      {wallet && <p>Remaining: {itemsRemaining}</p>}

      <MintContainer className='mt-4 text-centered'>
        {!wallet ? (
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
            {/* <ConnectButton>Connect Wallet</ConnectButton> */}
            <ConnectButton disabled>Geisha Clan will be launched soon..</ConnectButton>
            <p className="content mx-3 text-left">
              Please use Phantom wallet for the best experience
            </p>
          </div>
        ) : (
          <>
            {!whitelisted ? (
              <>
                <div className="waiting text-center text-lg font-bold text-white">
                  {/* <p style={{display:"none"}}>
                    {itemsAvailable}  NFTs left!
                  </p>
                  <p style={{display:"none"}}>
                    {itemsRedeemed}  NFTs left!
                  </p> */}
                </div>
                <MintButton
                  disabled={isSoldOut || isMinting || !isActive || !canMint}
                  onClick={onMint}
                  variant="outlined"
                >
                  {isSoldOut ? (
                    "Geisha Clan SOLD OUT!"
                  ) : isActive ? (
                    isMinting ? (
                      <CircularProgress />
                    ) : (
                      `Mint your Geisha!`
                    )
                  ) : (
                    <Countdown
                      // date={startDate}
                      date={launchDate}
                      onMount={({ completed }) => completed && setIsActive(true)}
                      onComplete={() => setIsActive(true)}
                      renderer={renderCounter}
                    />
                  )}
                </MintButton>
              </>
            ) : (
              <>
                <div className="waiting text-center text-lg font-bold text-white">
                  {/* <p style={{display:"none"}}>
                    {itemsAvailable}  NFTs left!
                  </p>
                  <p style={{display:"none"}}>
                    {itemsRedeemed}  NFTs left!
                  </p> */}
                  <p className='text-lg font-bold text-white text-opacity-90 mb-4'>You're whitelisted!</p>
                </div>
                <MintButton
                  disabled={isSoldOut || isMinting || !isActive || !canMint}
                  onClick={onMint}
                  variant="outlined"
                >
                  {isSoldOut ? (
                    "Geisha Clan SOLD OUT!"
                  ) : isActive ? (
                    isMinting ? (
                      <CircularProgress />
                    ) : (
                      `Mint your Geisha!`
                    )
                  ) : (
                    <Countdown
                      // date={startDate}
                      date={launchDateWhitelisted}
                      onMount={({ completed }) => completed && setIsActive(true)}
                      onComplete={() => setIsActive(true)}
                      renderer={renderCounter}
                    />
                  )}
                </MintButton>
              </>
            )}
          </>
        )}
      </MintContainer>

      <Snackbar
        open={alertState.open}
        autoHideDuration={6000}
        onClose={() => setAlertState({ ...alertState, open: false })}
      >
        <Alert
          onClose={() => setAlertState({ ...alertState, open: false })}
          severity={alertState.severity}
        >
          {alertState.message}
        </Alert>
      </Snackbar>
    </main>
  );
};

interface AlertState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}

const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
  return (
    <CounterText>
      {hours + (days || 0) * 24} hours, {minutes} minutes, {seconds} seconds
    </CounterText>
  );
};

export default Home;
