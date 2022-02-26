Dependencies Required
* git version
* node --version
  link: https://nodejs.org/en/download/ (LTS)
* yarn --version
* ts-node --version 
  Terminal: 
  npm install -g ts-node (globally) 

Clone and Install Metaplex
* git clone https://github.com/metaplex-foundation/metaplex.git ~/metaplex
* yarn install --cwd ~/metaplex/js
* ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts --version

Solana Wallet
* Installation: 
    * sh -c “$(curl -sSfL https://release.solana.com/v1.9.9/install)”solana --version
* Solana Keygen Command: 
    * solana-keygen new --outfile ~/.config/solana/devnet.json
* solana config set --keypair (~/.config/solana/devnet.json) 
* Solana config get: 
  check if your RPC and keygen matches.
* Funding solana dev wallet:
    * solana airdrop 2

Configuration
Download the configuration file (config.json) from github repo and edit the solTresuryAccount address to the wallet address.

Assets
Download the assets folder from github which includes all the pictures (.png) and the metadata (.json).

Uploading/ Verifying/ Minting
Upload:
* ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts upload -e devnet -k (path of devnet.json) -c (cache file name) -l debug -cp (Path of config json) (Path of assets)
  To check if the upload is successfull - link: https://explorer.solana.com/
    * Make sure you're on Devnet
    * Search using the wallet address on the search bar
Verify Upload: 
* ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts verify_upload -e devnet -k (path of address json) -c (cache file name)

Mint Token:
* ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts mint_one_token -e devnet -k (path of address json) -c (cache file name)
Multiple Minting:
* ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts mint_multiple_token -e devnet -k (path of address json) -c (cache file name) --number (Give the number)
