"use client";
import { GoogleSocialWalletConnector } from "@zerodevapp/wagmi";
import {
  EthereumClient,
  w3mProvider,
  w3mConnectors,
} from "@web3modal/ethereum";
import { Web3Modal, Web3Button } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";

const projectId: string = process.env.PROJECT_ID || "";
const { chains, provider, webSocketProvider } = configureChains(
  [polygonMumbai],
  [w3mProvider({ projectId: projectId })]
);
const client = createClient({
  autoConnect: false,
  connectors: [
    new GoogleSocialWalletConnector({
      options: {
        projectId: projectId,
      },
    }),
    ...w3mConnectors({
      projectId: projectId,
      version: 1,
      chains,
    }),
  ],
  provider,
  webSocketProvider,
});
const ethereumClient = new EthereumClient(client, chains);

const Web3ModalWallet = () => {
  return (
    <>
      <WagmiConfig client={client}>
        <Web3Button />
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
};

export default Web3ModalWallet;
