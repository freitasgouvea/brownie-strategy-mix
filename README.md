# Yearn Strategy JS (Truffle and Javascript)

!!! UNDER DEVELOPMENT !!!!

Yearn Strategy Smart Contract for interact with Yearn Vaults with Truffle suite and tests.

This project was forked from https://github.com/yearn/brownie-strategy-mix (brownie-python)

## What's new?

Now you can run and deploy your yearn strategy with Truffle and NodeJs.

### Requeriments to run this repositorie with Truffle

- [Node.js](https://nodejs.org/download/release/latest-v10.x/): `>=10.0.0`
- [Truffle](https://www.trufflesuite.com/truffle): `v5.1.9`

## Usage

Clone or donwload this repositorie.

Go to path and run on terminal:

```sh
npm install
```
After running, all dependecies will be downloaded.

### Compile contracts

```sh
truffle compile
```

After running, contract information &mdash; including ABI &mdash; will be available at the `build/contracts/` directory.

### Run tests on Truffle

You can run tests which can be found in the test directory `/test` runing on terminal:

```sh
truffle test
```

Or run tests within a specific file:

```sh
truffle test <file_path>
```

### Run migration and deploy contracts

Create .env file on root with:

```
MNENOMIC = // Your metamask's recovery words
INFURA_API_KEY = // Your Infura API Key after its registration
VAULT = "Yearn Vault Address"
```
Run migrate command, you can see the networks names at truffle-config.js

```sh
truffle migrate --network <network_name>
```

Contract address and transaction ID will be shown on screen.

## See Original Readme and Repository

- Yearn Brownie Strategy Mix [Github](https://github.com/yearn/brownie-strategy-mix)

# Resources

- Yearn [Discord channel](https://discord.com/invite/6PNv2nF/)
- Brownie [Gitter channel](https://gitter.im/eth-brownie/community)
