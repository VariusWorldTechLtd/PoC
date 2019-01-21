Desktop browser: <a href="https://travis-ci.org/VariusWorldTechLtd/Main"><img src="https://travis-ci.org/VariusWorldTechLtd/Main.svg?branch=master" alt="build:started"></a> Mobile browser: <a href="https://travis-ci.org/VariusWorldTechLtd/Main"><img src="https://travis-ci.org/VariusWorldTechLtd/Main.svg?branch=master" alt="build:started"></a>

# VoX Wallet

This is the cross-platform entry point to the VoX eco system.

## Current Features
- Phone verification
- Account Creation
- Seed words for backup


## Upcoming Features
- Account Verify 
- KYC
- Restore accound from seed words
- Bounty opportunities
- Login with VoX

## CI
The latest green build is deployed to the above enviroinment continously.

Try it: <a href="http://vox-wallet.firebaseapp.com">Staged deployment of VoX Wallet </a>

## Development

install npm 6.1.0 or higher

```
npm install -g @angular/cli
npm install -g ionic cordova
npm i
npm run lint
npm run test
ionic serve
```

## Building the code into a static site

The following command builds the code into a /www/ folder

```
ionic build --prod --aot
```



