# COMMAND LINE CODES

## Dependencies

- git version

- node --version <br/>
  link: https://nodejs.org/en/download/ (LTS)

- yarn --version

- ts-node --version <br/>
  Terminal: <br/> npm install -g ts-node (globally) <br/>
                  npm install -D ts-node (locally)<br/>
                  Configuration of dependency (additional)<br/>
                  npm install -D tslib @types/node<br/>

## Cloning the metaplex tool from github

- git clone https://github.com/metaplex-foundation/metaplex.git ~/metaplex (Use the desired dir)

- yarn install --cwd ~/metaplex/js (Does not need cwd if you are inside js in metaplex)

- ts-node (" ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts" - needs to be inside src path ) --version/--help

## Solana 

- Installation: curl https://release.solana.com/v1.9.8/solana-install-init-x86_64-pc-windows-msvc.exe --output C:\solana-install-tmp\solana-install-init.exe --create-dirs

- solana --version

- Solana Keygen Command: <br/>
    - solana-keygen new --outfile ~/.config/solana/devnet.json

  If you prefer to grind the keygen: <br/>
    - solana-keygen grind --starts-with DEV:1

- solana config set --keypair (~/.config/solana/devnet.json) <br/>

- solana address 

  If grinding is done than the path copy the address of solana and add "address.json"


- Solana url config:<br/>
- solana config set --url https://metaplex.devnet.rpcpool.com/

- Solana config get: <br/>
    check if your RPC and keygen matches.

- Funding solana dev wallet:<br/>
    - solana airdrop 2

## Configuration File

Download the configuration file from github repo (config.json) <br/>
Make sure that you change your solana address in solTreasuryAccount


## Assets

Download the default assets from the github repo (whole folder consists of image and metadata) <br/>

## Uploading/ Verifying/ Minting

Upload:<br/>
  - ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts upload -e devnet -k (path of address json) -c (cache file name) -l debug -cp (Path of config json) (Path of assets)<br/>

      To check if the upload is successfull <br/>
        - link: https://explorer.solana.com/<br/>
  
       - Check if you are in Mainnet Beta or Devnet (Go to Devnet)<br/>
            On the search bar add your address without.json

Verify Upload: <br/>
  - ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts verify_upload -e devnet -k (path of address json) -c (cache file name)

Mint Token:<br/>
  - ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts mint_one_token -e devnet -k (path of address json) -c (cache file name)

Multiple Minting:<br/>
  - ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts mint_multiple_token -e devnet -k (path of address json) -c (cache file name) --number (Give the number)

# Troubleshoot

- NPM not correctly installed (Depends on situation Update/remove and install/add addtional dependency)
- Yarn installation fail (Keep on Retrying or try new dir)
- Make sure to upload one time, multiple upload will distrube cache file (Renaming cache file could solve the problem)
- Devnet key address error make occur when you restart the terminal. (Try adding it in metaplex .config/solana)
- Verify update error may occur because of the cache file error.(Try renaming it to example both during upload and verfiy_upload)
- Minting Token error also may cause due to cache file.
- Creating new assets with new meta-data will also result in error if NFTs collectable criteria is not met. Devnet didn't pass it through.





