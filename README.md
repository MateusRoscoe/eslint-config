# Mateus Roscoe's Eslint Config

## Installation

```sh
npm config set @mateusroscoe:registry=https://npm.pkg.github.com/
npm install @mateusroscoe/eslint-config
```

## Usage

Create an `eslint.config.js` file in the root of your project and extend this configuration:

```js
import config from '@mateusroscoe/eslint-config';

export default [
    config,
    // other configurations
];
```

## Contributing

Feel free to open issues or submit pull requests if you find any bugs or have suggestions for improvements.

## License

This project is licensed under the MIT License.
