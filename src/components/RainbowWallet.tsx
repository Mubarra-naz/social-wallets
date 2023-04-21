"use client";
import "@rainbow-me/rainbowkit/styles.css";
import {
  ConnectButton,
  RainbowKitProvider,
  getDefaultWallets,
} from "@rainbow-me/rainbowkit";
import { polygonMumbai, goerli } from "wagmi/chains";
import { WagmiConfig, configureChains, createClient } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

const defaultProjectId: string = process.env.PROJECT_ID || "";
const allowedChains = [polygonMumbai, goerli];

const { chains, provider, webSocketProvider } = configureChains(allowedChains, [
  publicProvider(),
]);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: defaultProjectId,
  chains,
});

const client = createClient({
  autoConnect: false,
  connectors,
  provider,
});

const RainbowWallet = () => {
  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains} modalSize="wide">
        <div>
          <ConnectButton />
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default RainbowWallet;
