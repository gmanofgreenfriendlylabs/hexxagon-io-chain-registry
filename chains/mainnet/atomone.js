module.exports = {
    chainID: 'atomone-1',
    lcd: 'https://atomone-rest.publicnode.com',
    gasAdjustment: 1.75,
    gasPrices: {uatone: 0.025},
    prefix: 'atone',
    coinType: '118',
    baseAsset: 'uatone',
    name: 'AtomOne',
    chainRegistryName: 'atomone',
    disabledModules: ['swap', 'gov'],
    icon: process.env.CF_PAGES_URL + '/img/chains/atomone.svg',
    gitRepo: 'https://github.com/atomone-hub/atomone',
    autoCompound: {
        enabled: true,
        minRewards: 100000
    },
    explorer: {
        address: 'https://ping.pub/atomone/account/{}',
        tx: 'https://ping.pub/atomone/tx/{}',
        validator: 'https://ping.pub/atomone/staking/{}',
        block: 'https://ping.pub/atomone/block/{}',
    },
    tokens: [
        {
            token: 'uatone',
            symbol: 'ATONE',
            name: 'AtomOne',
            icon: process.env.CF_PAGES_URL + '/img/coins/atomone.svg',
            decimals: 6,
            coinMarketCapID: 'atomone',
        },
    ],
}
