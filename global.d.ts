// ExternalProvider seems to be the official ethersproject type for the window.ethereum object, however, `new Web3(ethereum)` does not like it so we must improvise.
import type ExternalProvider from "ethers";
import type AbstractProvider from "web3";

declare module "terminal-io";

interface EthereumProvider extends ExternalProvider {
  _state: unkown;
  sendAsync: AbstractProvider["sendAsync"];
}

declare global {
  interface Window {
    ethereum: EthereumProvider;
  }
}
