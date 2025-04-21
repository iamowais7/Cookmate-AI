// const config = {
//     resolver: {
//       unstable_enablePackageExports: true,
//     },
//   };
  
//   module.exports = config;

// const { getDefaultConfig } = require('expo/metro-config');

// const config_1 = getDefaultConfig(__dirname);

// module.exports = config;

const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

config.resolver.unstable_enablePackageExports = true;

config.resolver.extraNodeModules = {
  react: path.resolve(__dirname, 'node_modules/react'),
  'react-native': path.resolve(__dirname, 'node_modules/react-native'),
  'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
};

module.exports = config;


