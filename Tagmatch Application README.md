# Tagmatch Web Application
  
  ## Dependencies
    * Node js LTS version
    * Since its a react app create-react-app should be upgrade if npm does not start.

    * Inside app folder
      * npm i dotenv
      * npm i react-scripts
      * npm i react-icons
      * npm i react-paginate
      * npm i react-router-dom
      * npm i -g @project-serum/anchor

    * Inside app folder (Solana dependencies)
      * Solana install documentation link
        https://docs.solana.com/cli/install-solana-cli-tools
      * yarn install
      * yarn add @solana/web3.js
      * yarn add @solana/spl-token
  
  ## To run the application
    * npm run start (Note: Tested on Google chrome)

  ## Minitng and uploading Token
    For this process user need to upload and verify upload from the terminal. Creating assets and metadata for the NFTs can be found on "Metaplex Readme File".

    **Process for miniting NFTs Token after connecting wallet**
      - Clone metaplex file outside app folder.

        git clone https://github.com/metaplex-foundation/metaplex.git ~/metaplex

      * Terminal Code: 
        - yarn install --cwd ~/metaplex/js/
        - solana-keygen new --outfile ~/.config/solana/devnet.json
        - solana config set --keypair ~/.config/solana/devnet.json
        - solana config set --url devnet
        - ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts --version
        - solana config get
        - solana airdrop 2
        - solana balance

        - Create assets folder outside app folder. Creating metadata for the assets can be found on Metaplex documentation. 
        - Inside metadata json update your address with phantom wallet address.
        - Create config file in root folder. Config file can be obtained from Metaplex folder in github. In solTresauryAccount: Add your solana wallet address. It can be obtained from using "solana address" in terminal.
        - Inside config number, it should be the amount of NFTs you are minting. If you are minting 1 NFT use 1 if 2 use 2 and so on.

    **Environment setup for Candy machine**
        - Edit the .env file presented in the folder.
        - Update Candy Machine ID. ID can be found on .cache/devnet-temp

      * Upload and verify your NFTs
        - ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts verify_assets "./assets"(path of assets. Do not use "")
        
        - ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts upload -e devnet -k ~/.config/solana/devnet.json -cp config.json
        "./assets"(path of assets (do not use "")) 

        - ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts verify_upload -e devnet -k ~/.config/solana/devnet.json 

        - There should be a message "Ready to deploy"

        - Refresh the web page and Mint the NFTs. Approve in the wallet. You can see the uploaded NFTs in phatom wallet collectibles.
  
  ## Troubleshoot
    - Check your dependencies (Drop down a version sometimes newer version is not supported)
    - API search option maybe corrupted because of the internet connection, outdated browser, browser cookies configuration, API key error validation, GET command cannot be executed because of the portocal. 
    - Phantom wallet error can occur which can be verified by going to console pressing f12 and checking the inspect if wallet has been found or not.
    - Upload and Verify upload failure can occur if the cache file is not in the right place. You can also add a command to create a new cache file by adding "-c example" is both terminal command for upload and verify upload.
    - Loading error can occur if lib file is not found. 
    


  
  


       
    
