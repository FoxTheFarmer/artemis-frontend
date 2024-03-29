import { QuoteToken, PoolCategory, Pool2Config } from './types'

const pools2: Pool2Config[] = [
  {
    sousId: 1,
    tokenName: 'TRANQB',
    quoteTokenSymbol: QuoteToken.MIS,
    stakingTokenName: QuoteToken.MISTRANQ,
    stakingTokenAddress: '0xfA45e64Adf9BF3caDC65b737b2B0151C750f414C',
    // this is MIS
    quoteTokenPoolAddress: '0xd74433b187cf0ba998ad9be3486b929c76815215',
    // this is TRANQ
    tokenPoolAddress: '0xcf1709ad76a79d5a60210f23e81ce2460542a836',
    contractAddress: {
      1666700000: '0xC2B1FC77e49BE0a99520EAd73da3a76AF533482D',
      1666600000: '0xC2B1FC77e49BE0a99520EAd73da3a76AF533482D',
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://www.tranquil.finance/',
    harvest: true,
    tokenPerBlock: '11',
    sortOrder: 12,
    isFinished: false,
    startBlock: 17996500,
    endBlock: 18903700,
    tokenDecimals: 18,
   },
]

export default pools2
