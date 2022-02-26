Required Tools (Recent version)
•	git 
git --version
•	node
node --version
•	yarn
yarn –version
•	ts-node
ts-node –version


Clone and Install Metaplex
•	Candy Machine is controlled through Metaplex command line tool, distributed in Metaplex GitHub repository.
git clone -b v1.1.1 https://github.com/metaplex-foundation/metaplex.git ~/metaplex
•	Dependencies
yarn install --cwd ~/metaplex/js/
•	Candy Machine CLI command (check to make sure everything is working)
ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts –version


Solana Wallet
•	Install Solana tools
sh -c "$(curl -sSfL https://release.solana.com/v1.9.9/install)"
•	Confirmation
solana –version
•	Check wallet address
solana address
•	Check solana balance
solana balance
•	Create a wallet in solana devnet environment
solana-keygen new --outfile ~/.config/solana/devnet.json
•	Make default keypair
solana config set --keypair ~/.config/solana/devnet.json
•	Devnet config set
solana config set --url https://metaplex.devnet.rpcpool.com/
•	Get the configuration output
solana config get
•	Funding the devnet wallet (only 2 at a time taken for airdrop)
solana airdrop 2 


Configuration Json file
Config.json file has been uploaded. The file contains Candy Machine config settings. Wallet address needs to be updated with the address of the solana wallet.


Assets
Assets file has been uploaded. Assets is the collection of images and metadata. Each image(.png) has a corresponding metadata file(.json). Default assets file was downloaded with 20 files in total, 10-item collection. 


Creating the candy machine
•	Upload the assets and create the candy machine
ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts upload -e devnet  -k (solana wallet address or path of the address) -l debug -cp (path of assets and path of config.json file)  -c (name of the example file)
Go to https://explorer.solana.com/ , Devnet and use the Candy Machine PublicKey which is in the output to verify the upload.
•	Verify the upload  
ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts verify_upload -e devnet  -k (solana wallet address or path of the address) -c (name of the example file)


Mint tokens
•	Mint one token
ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts mint_one_token -e devnet  -k (solana wallet address or path of the address) -c (name of the example file)
•	Check if the mint was successful
spl-token accounts
•	Mint multiple tokens
ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts mint_multiple_tokens -e devnet  -k (solana wallet address or path of the address) -c (name of the example file) –number (the number of tokens to mint)


















