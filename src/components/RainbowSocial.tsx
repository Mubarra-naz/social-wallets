"use client";
import "@rainbow-me/rainbowkit/styles.css";
import {
  googleWallet,
  facebookWallet,
  githubWallet,
  discordWallet,
  twitchWallet,
  twitterWallet,
} from "@zerodevapp/wagmi/rainbowkit";
import {
  ConnectButton,
  RainbowKitProvider,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import { polygonMumbai, goerli } from "wagmi/chains";
import { WagmiConfig, configureChains, createClient } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "@wagmi/core/providers/jsonRpc";

const defaultProjectId: string = process.env.PROJECT_ID || "";
const allowedChains = [polygonMumbai, goerli];
const connectors = connectorsForWallets([
  {
    groupName: "Social",
    wallets: [
      googleWallet({
        chains: allowedChains,
        options: { projectId: defaultProjectId },
      }),
      facebookWallet({
        chains: allowedChains,
        options: { projectId: defaultProjectId },
      }),
      githubWallet({
        chains: allowedChains,
        options: { projectId: defaultProjectId },
      }),
      discordWallet({
        chains: allowedChains,
        options: { projectId: defaultProjectId },
      }),
      twitchWallet({
        chains: allowedChains,
        options: { projectId: defaultProjectId },
      }),
      twitterWallet({
        chains: allowedChains,
        options: { projectId: defaultProjectId },
      }),
    ],
  },
]);

const { chains, provider, webSocketProvider } = configureChains(allowedChains, [
  publicProvider(),
  jsonRpcProvider({
    rpc: () => ({
      http: process.env.RPC_URL || "",
    }),
  }),
]);
const client = createClient({
  autoConnect: false,
  connectors,
  provider,
  webSocketProvider,
});

const RainbowSocial = () => {
  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains} modalSize="compact">
        <div>
          <ConnectButton label="Conenct Social" />
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default RainbowSocial;
