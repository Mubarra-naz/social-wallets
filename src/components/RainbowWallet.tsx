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
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

const defaultProjectId: string = process.env.PROJECT_ID || "";
const allowedChains = [polygonMumbai, goerli];

const { chains, provider, webSocketProvider } = configureChains(allowedChains, [
  publicProvider(),
  jsonRpcProvider({
    rpc: () => ({
      http: process.env.RPC_URL || "",
    }),
  }),
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
