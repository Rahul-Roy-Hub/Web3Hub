<div id="top"></div>

<br />
<div align="center">
<h2 align="center">Web3Hub — It is YouTube but decentralized</h2>

</div>   

## About The Project

[![Web3Hub][product-screenshot1]](https://twitter.com/rahuldevrio)
[![Web3Hub][product-screenshot2]](https://twitter.com/rahuldevrio)

Web3Hub is a YouTube Clone built on top of Polygon network and The Graph, that allows users to create, share and watch videos, without worrying about their privacy.

### Built With

- Frontend framework: Next.js
- Smart contracts: Solidity
- Ethereum web client library: Ethers.js
- File storage: IPFS
- Querying data: The Graph
- CSS Framework: TailwindCSS
- Ethereum development environment: Hardhat
- Layer 2 blockchain: Polygon
- Video Infrastructure: Livepeer


<!-- GETTING STARTED -->

## Getting Started

To get this application up and and running on your local machine follow these simple steps.

### Prerequisites

You need to have Node.js, NPM and hardhat installed on your computer, before running this project.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Rahul-Roy-Hub/Web3Hub.git
   ```
2. Install NPM packages

   ```sh
   npm install
   ```

   or

   ```sh
   yarn install
   ```
3. Create an `.env` file and get an API key from Livepeer studio, Web3 Storage and Imagekit. 
   ```sh
   PRIVATE_KEY=""
   NEXT_PUBLIC_LIVEPEER_KEY=""
   NEXT_PUBLIC_WEB3_STORAGE_KEY=
   NEXT_PUBLIC_IMAGEKIT_ID=""
   ```
4. Compile the smart contract
   ```sh
   npx hardhat compile
   ```
5. Deploy the smart contract
6. Get your contract address and paste in on `constants/index.ts`

7. Deploy subgraph in `indexer` directory by following steps in `indexer/README.md` (optional, since it is already deployed in hosted service)

8. Get subgraph query endpoint after deployment and update it in `constants/index.t`

9. Run the app

   ```sh
   npm start
   ```


## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue.
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### License

This project is an open source software licensed under the MIT License

[product-screenshot1]: ./public/assets/Web3HubLanding.png

[product-screenshot2]: ./public/assets/Web3HubHome.png