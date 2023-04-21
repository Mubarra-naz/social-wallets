import RainbowWallet from "@/components/RainbowWallet";
import RainbowSocial from "@/components/RainbowSocial";
import React from "react";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import Web3ModalWallet from "@/components/Web3Modal";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-8 pt-10 text-center w-[100%]">
      <h1 className="text-5xl py-8 text-emerald-600">
        Account Abstraction Baiscs
      </h1>
      <h5 className="text-xl pb-8 max-w-[90%]">
        Web3 Basic Concepts(Account Abstraction, ERC-4337), AA Transactions,
        Mint NFTs, Social Wallets
      </h5>
      <div className="flex flex-col md:flex-row justify-center md:justify-between text-start flex-shrink max-w-[95%]">
        <div className="section">
          <h3>Account Creation & Transactions</h3>
          <div>
            <span className="font-semibold"> Abstract Account: </span>
            <Link
              // href="https://mumbai.polygonscan.com/address/0xF577d7FD7a390B53a9D462Eb15D0Cb296b635B90"
              href="https://goerli.etherscan.io/address/0xF577d7FD7a390B53a9D462Eb15D0Cb296b635B90"
              target="_blank"
              className="flex items-center gap-1"
            >
              0xF577d7FD7a390B53a9D462Eb15D0Cb296b635B90
              <BiLinkExternal color="#04785766" />
            </Link>
          </div>
          <ul>
            <li>
              <Link
                href="https://goerli.etherscan.io/tx/0x35bd327eaf919a6d8c19ed3488d4823fc4fe88fab8cce77671c20ef62b00d3da"
                target="_blank"
                className="flex items-center gap-1"
              >
                Funded ETH(via MetaMask)
                <BiLinkExternal color="#04785766" />
                {/* 0x35bd327eaf919a6d8c19ed3488d4823fc4fe88fab8cce77671c20ef62b00d3da */}
              </Link>
            </li>
            <li>
              <Link
                href="https://goerli.etherscan.io/tx/0xd23a858e01d759d6719cac29cdbfba28dc2e4d76a64d0f095476ffc72f3cae04"
                target="_blank"
                className="flex items-center gap-1"
              >
                ETH Transaction
                <BiLinkExternal color="#04785766" />
                {/* 0xd23a858e01d759d6719cac29cdbfba28dc2e4d76a64d0f095476ffc72f3cae04 */}
              </Link>
            </li>
            <li>
              <Link
                href="https://goerli.etherscan.io/tx/0xe3335811b0d3739dc91763800d2ab8015c534bae0a44be22985b4f38ff78dd9f"
                target="_blank"
                className="flex items-center gap-1"
              >
                ETH Batch Transaction
                <BiLinkExternal color="#04785766" />
                {/* 0xe3335811b0d3739dc91763800d2ab8015c534bae0a44be22985b4f38ff78dd9f */}
              </Link>
            </li>
            <li>
              <Link
                href="https://goerli.etherscan.io/tx/0x869f42894edb59c3646398bff3203cf68513f9aa238935720efd725562732459"
                target="_blank"
                className="flex items-center gap-1"
              >
                Funded ERC-20 Tokens(via Polygon Faucet)
                <BiLinkExternal color="#04785766" />
                {/* 0x869f42894edb59c3646398bff3203cf68513f9aa238935720efd725562732459 */}
              </Link>
            </li>
            <li>
              <Link
                href="https://goerli.etherscan.io/tx/0x0904be7bd01416cd33c7ef6a288b6e2f31f007b4f704d9bcd48c94465ca74bae"
                target="_blank"
                className="flex items-center gap-1"
              >
                ERC-20 Transaction
                <BiLinkExternal color="#04785766" />
                {/* 0x0904be7bd01416cd33c7ef6a288b6e2f31f007b4f704d9bcd48c94465ca74bae */}
              </Link>
            </li>
            <li>
              <Link
                href="https://goerli.etherscan.io/tx/0x9d3432e480c626c1703fe532bbe2b6b1ef06199c36833c0c336d5b846c14ca29"
                target="_blank"
                className="flex items-center gap-1"
              >
                ERC-20 Batch Transaction
                <BiLinkExternal color="#04785766" />
                {/* 0x9d3432e480c626c1703fe532bbe2b6b1ef06199c36833c0c336d5b846c14ca29 */}
              </Link>
            </li>
          </ul>
        </div>
        <div className="section">
          <h3>Mint NFTs</h3>
          <p className="font-bold">
            Glassless AA Transactions, Bundle AA Transactions, Mint NFT(ERC-721)
            Tokens
          </p>
          <div>
            <span className="font-semibold">Smart Contract: </span>
            <Link
              href="https://mumbai.polygonscan.com/address/0x352e004976712eDf4257061dA812bA06b0f01377"
              target="_blank"
              className="flex items-center gap-1"
            >
              0x352e004976712eDf4257061dA812bA06b0f01377
              <BiLinkExternal color="#04785766" />
            </Link>
          </div>
          <ul>
            <li>
              <Link
                href="https://mumbai.polygonscan.com/tx/0xa6dc19ff84eb5d63db0aa9b35d3c764254b1b8ab13c524944a9d50da59f1d9da"
                target="_blank"
                className="flex items-center gap-1"
              >
                Glassless Transaction
                <BiLinkExternal color="#04785766" />
                {/* 0xa6dc19ff84eb5d63db0aa9b35d3c764254b1b8ab13c524944a9d50da59f1d9da */}
              </Link>
            </li>
            <li>
              <Link
                href="https://mumbai.polygonscan.com/tx/0x2bc97286b7448830d4530e07ad74f22176af47b5eaa9b601eeb4da2257814f9d"
                target="_blank"
                className="flex items-center gap-1"
              >
                Bundle Transaction
                <BiLinkExternal color="#04785766" />
                {/* 0x2bc97286b7448830d4530e07ad74f22176af47b5eaa9b601eeb4da2257814f9d */}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-5">
        <h3>Social Wallets to try out</h3>
        <div className="flex justify-around max-w-[100%]">
          <table className="max-w-[100%] table-auto">
            <tbody>
              <tr>
                <td>
                  <RainbowSocial />
                </td>
                <td>
                  <Web3ModalWallet />
                </td>
                <td>
                  <RainbowWallet />
                </td>
              </tr>
              <tr>
                <td>
                  <p className="font-bold">Rainbow Social Connect</p>
                </td>
                <td>
                  <p className="font-bold">Web3Modal</p>
                </td>
                <td>
                  <p className="font-bold">Rainbow Wallet</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
