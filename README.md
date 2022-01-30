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
* There are some components that use data from the IFPA API. Request an API key from IFPA and provide it in the `cacheIfpa.js` file. Run `yarn run cache-ifpa` to update the needed `src/common/ifpa.json` file required for these components to operate successfully.

---

### Building and deploying changes to Github Pages

* Run the `yarn run deploy` command
* The Github Pages URL is defined via the "homepage" value in package.json
* Necessary API data from IFPA is cached before deploying; IFPA API key is required to be set in `cacheIfpa.js`