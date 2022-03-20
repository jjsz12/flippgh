# Flip PGH Weekly Pinball Tournament

Website used to display information about the Flip PGH weekly pinball tournament series, such as:
* Schedule
* Results
* Stats
* Format
* Rules
* etc.

---

### Getting Started

* Install [Node](https://nodejs.org/) (tested with v16.13.1) and [Yarn](https://yarnpkg.com/) first, then run:  
  * `yarn install`  
  * `yarn start`
* There are some components that use data from the IFPA and Matchplay (Next) APIs, which are cached and committed in this repo under `src/common/ifpa*.json` and `src/common/matchplay*.json` files. To update these locally cached data files, request API keys from IFPA and Matchplay and provide each key in the `cacheIfpa.js` and `cacheNextMatchplay.js` files, respectively. Run `yarn run cache-ifpa` and `yarn run cache-matchplay` to update the data files. These commands are also executed during the deploy process described below.

---

### Building and deploying changes to Github Pages

* Run the `yarn run deploy` command
* The Github Pages URL is defined via the "homepage" value in package.json
* Necessary API data from IFPA is cached before deploying; IFPA API key is required to be set in `cacheIfpa.js`
* Necessary API data from Matchplay (Next) is cached before deploying; Matchplay API key is required to be set in `cacheNextMachplay.js`