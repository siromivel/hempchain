import { ethers } from "ethers"
import { Web3Provider } from "ethers/providers"

export class Ethereum {
  public hempProducer: HempProducer
  private web3: Web3Provider

  constructor() {
    this.web3 = new ethers.providers.Web3Provider(
      (window as any).web3.currentProvider,
    )

    this.hempProducer = new HempProducer(
      hempProducer.local,
      JSON.stringify(hempProducerJson.abi),
      this.web3,
    )
  }

  public static getWeb3FromBrowser() {
    window.addEventListener("load", async () => {
      const w = window as any // Allow access to all properties of window

      if (w.ethereum) {
        w.web3 = new w.Web3(w.ethereum)
        try {
          await w.ethereum.enable()
        } catch (err) {
          console.error("Please connect an Ethereum wallet to interact with this system")
        }
      } else if (w.web3) {
        w.web3 = new w.Web3(w.web3.currentProvider)
      } else {
        console.log("You must install an Ethereum wallet to interact with this system")
      }
    })
  }
}
