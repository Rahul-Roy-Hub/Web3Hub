const APP_NAME = 'Web3Hub'
const APP_DESCRIPTION = 'A decentralized video sharing platform'
const APP_VERSION = '0.0.1'
const CONTRACT_ADDRESS = '0xC303FBC78678B7D159E5ce3C24ed0308F12e402d'
const IPFS_GATEWAY = 'https://w3s.link/ipfs/'
const IMAGEKIT_URL =
  'https://ik.imagekit.io/' + process.env.NEXT_PUBLIC_IMAGEKIT_ID + '/'
const LIVEPEER_KEY = process.env.NEXT_PUBLIC_LIVEPEER_KEY
const WEB3_STORAGE_URL = 'https://api.web3.storage/upload'
const WEB3_STORAGE_KEY = process.env.NEXT_PUBLIC_WEB3_STORAGE_KEY
const SUB_GRAPH_BASE_URL = 'https://api.thegraph.com'
const SUB_GRAPH_NAME = 'rahul-roy-hub/web3hub'
const SUB_GRAPH_URL = `${SUB_GRAPH_BASE_URL}/subgraphs/name/${SUB_GRAPH_NAME}`

export {
  APP_NAME,
  APP_DESCRIPTION,
  APP_VERSION,
  CONTRACT_ADDRESS,
  IPFS_GATEWAY,
  IMAGEKIT_URL,
  WEB3_STORAGE_URL,
  SUB_GRAPH_URL,
  LIVEPEER_KEY,
  WEB3_STORAGE_KEY,
}
