module.exports = {
    chainID: 'stafihub-1',
    lcd: 'https://public-rest-rpc1.stafihub.io',
    rpc: 'https://public-rpc1.stafihub.io',
    gasAdjustment: 1.75,
    gasPrices: {ufis: 0.02},
    prefix: 'stafi',
    coinType: '118',
    baseAsset: 'ufis',
    name: 'StaFiHub',
    chainRegistryName: 'stafihub',
    disabledModules: ['swap'],
    icon: process.env.CF_PAGES_URL + '/img/chains/StaFiHub.svg',
    gitRepo: 'https://github.com/stafihub/stafihub',
    autoCompound: {
        enabled: false,
        minRewards: 1000000
    },
    // ibc: {
    //   fromTerra: 'channel-204',
    //   toTerra: 'channel-9',
    // },
    channels: {
        'phoenix-1': 'channel-9',
        'cosmoshub-4': 'channel-0',
        'chihuahua-1': 'channel-4',
        'carbon-1': 'channel-5',
        'kaiyo-1': 'channel-6',
    },
    explorer: {
        address: 'https://www.mintscan.io/stafi/accounts/{}',
        tx: 'https://www.mintscan.io/stafi/transactions/{}',
        validator: 'https://www.mintscan.io/stafi/validators/{}',
        block: 'https://www.mintscan.io/stafi/blocks/{}',
    },
    tokens: [
        {
            token: 'ufis',
            symbol: 'FIS',
            name: 'FIS',
            icon: process.env.CF_PAGES_URL + '/img/coins/FIS.png',
            decimals: 6,
            coinGeckoID: 'stafi',
        },
        {
            token: 'uratom',
            symbol: 'rATOM',
            name: 'rATOM',
            icon: process.env.CF_PAGES_URL + '/img/coins/rATOM.svg',
            decimals: 6,
        },
        {
            token: 'uriris',
            symbol: 'rIRIS',
            name: 'rIRIS',
            icon: process.env.CF_PAGES_URL + '/img/coins/rIRIS.svg',
            decimals: 6,
        },
        {
            token: 'urhuahua',
            symbol: 'rHUAHUA',
            name: 'rHUAHUA',
            icon: process.env.CF_PAGES_URL + '/img/coins/rHUAHUA.svg',
            decimals: 6,
        },
        {
            token: 'urswth',
            symbol: 'rSWTH',
            name: 'rSWTH',
            icon: process.env.CF_PAGES_URL + '/img/coins/rSWTH.svg',
            decimals: 8,
            lsd: 'swth'
        }
    ],
}
