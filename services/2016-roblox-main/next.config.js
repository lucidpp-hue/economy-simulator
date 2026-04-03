const fs = require('fs');
const path = require('path');
const configPath = path.join(__dirname, path.sep + 'config.json');

const defaultConfig = {
  serverRuntimeConfig: {
    backend: {}
  },
  publicRuntimeConfig: {
    backend: {
      proxyEnabled: false,
      flags: {
        myAccountPage2016Enabled: true,
        catalogGenreFilterSupported: true,
        catalogPageLimit: 28,
        catalogSaleCountVisibleFromDetailsEndpoint: false,
        catalogDetailsPageResellerLimit: 10,
        avatarPageInventoryLimit: 10
      },
      baseUrl: 'https://www.roblox.com',
      apiFormat: 'https://{0}.roblox.com{1}'
    }
  }
};

let config;
if (fs.existsSync(configPath)) {
  config = JSON.parse(fs.readFileSync(configPath).toString('utf-8'));
} else {
  console.warn('[next.config.js] config.json not found at ' + configPath + ', using defaults.');
  config = defaultConfig;
  // Write the default config so subsequent startups find it
  fs.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 2));
}

module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: config.serverRuntimeConfig,
  publicRuntimeConfig: config.publicRuntimeConfig,
  async redirects() {
    return [
      {
        source: '/catalog.aspx',
        destination: '/catalog',
        permanent: true,
      },
      /*
      {
        source: '/catalog/:id/:name',
        destination: '/redirect-item?id=:id',
        permanent: false,
      },
       */
      {
        source: '/groups/:id/:name',
        destination: '/My/Groups.aspx?gid=:id',
        permanent: false,
      },
    ]
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    return config
  },
}
