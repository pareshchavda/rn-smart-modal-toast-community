const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '..');

const config = getDefaultConfig(projectRoot);

// 1. Watch the local library source
config.watchFolders = [workspaceRoot];

// 2. Force resolve specific modules to the project's node_modules
config.resolver.extraNodeModules = {
    react: path.resolve(projectRoot, 'node_modules/react'),
    'react-native': path.resolve(projectRoot, 'node_modules/react-native'),
    'rn-smart-modal-toast': workspaceRoot,
};

// 3. Exclude the library's node_modules from being indexed by Metro
// This is the most robust way to prevent multiple React instances
config.resolver.blockList = [
    new RegExp(
        path.resolve(workspaceRoot, 'node_modules').replace(/\\/g, '\\\\') + '.*'
    ),
];

// 4. Ensure Metro handles the watchFolders and local library properly
config.resolver.nodeModulesPaths = [
    path.resolve(projectRoot, 'node_modules'),
];

module.exports = config;
