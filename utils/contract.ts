import ContractAbi from "../artifacts/contracts/Web3Hub.sol/Web3Hub.json";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS } from "../constants";

export default function getContract() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  let contract = new ethers.Contract(CONTRACT_ADDRESS, ContractAbi.abi, signer);
  console.log(contract);
  return contract;
}
