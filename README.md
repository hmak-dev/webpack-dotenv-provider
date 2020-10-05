# webpack-dotenv-provider
Webpack plugin to include .env file into your bundle. 
It uses (dotenv)[https://www.npmjs.com/package/dotenv] to parse .env file.


## Installation
#### npm
```bash
npm install --save-dev webpack-dotenv-provider
```

#### yarn
```bash
yarn add --dev webpack-dotenv-provider
```

## Usage
In your webpack configuration file, you should first require this package;
```javascript
const DotenvProvider = require('webpack-dotenv-provider');
```
and then add it to your plugins array
```javascript
{
    plugins: [
        DotenvProvider()
    ]
}
```