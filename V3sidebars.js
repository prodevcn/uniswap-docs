module.exports = {
  
  docs: [

    {
      type: 'category',
      label:'Core Concepts',
      items: [
        'concepts/landing',
        'concepts/concentrated-liquidity',
        'concepts/fee-pools',
        'concepts/limit-orders',
        'concepts/oracle',
        'concepts/glossary',
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Guides',
    //   items: [
    //         'guides/landing',
          
    //   ]
    // },
    {
      type: 'category',
      label: 'Reference',
      items: [
        {
          type: 'category',
          label: 'Libraries',
          items: [
            'reference/libraries/BitMath',
            'reference/libraries/FixedPoint96',
            'reference/libraries/FixedPoint96',
            'reference/libraries/FixedPoint128',
            'reference/libraries/FullMath',
            'reference/libraries/LiquidityMath',
            'reference/libraries/LowGasSafeMath',
            'reference/libraries/Oracle',
            'reference/libraries/Position',
            'reference/libraries/SafeCast',
            'reference/libraries/SecondsOutside',
            'reference/libraries/SqrtPriceMath',
            'reference/libraries/SwapMath',
            'reference/libraries/Tick',
            'reference/libraries/TickBitmap',
            'reference/libraries/TransferHelper',
            'reference/libraries/UnsafeMath',
          ]
        },
        {
          type: 'category',
          label: 'Interfaces',
          items: [
            {
              type: 'category',
              label: 'Callback',
              items: [
                  'reference/interfaces/callback/IUniswapV3FlashCallback',
                  'reference/interfaces/callback/IUniswapV3MintCallback',
                  'reference/interfaces/callback/IUniswapV3SwapCallback'
              ]
            },
            {
              type: 'category',
              label: 'Pool',
              items: [
                'reference/interfaces/pool/IUniswapV3PoolActions',
                'reference/interfaces/pool/IUniswapV3PoolDerivedState',
                'reference/interfaces/pool/IUniswapV3PoolEvents',
                'reference/interfaces/pool/IUniswapV3PoolImmutables',
                'reference/interfaces/pool/IUniswapV3PoolOwnerActions',
                'reference/interfaces/pool/IUniswapV3PoolState',
              ]
            },
            'reference/interfaces/IERC20Minimal',
            'reference/interfaces/IUniswapV3Factory',
            'reference/interfaces/IUniswapV3Pool',
            'reference/interfaces/IUniswapV3PoolDeployer',
          ]
        },
        'reference/NoDelegateCall',
        'reference/UniswapV3Factory',
        'reference/UniswapV3Pool',
        'reference/UniswapV3PoolDeployer',
        
      ],

      
    }
  ],


  guides: [
    {
      type: 'category',
      label:'Landing',
      items: [
        'guides/landing',
      ],
    },
    {
      type: 'category',
      label:'Guides Overview',
      items: [
        'guides/guides-holder',
      ],
    },
  ],

  reference: [
    {
      type: 'category',
      label:'Reference Overview',
      items: [
        'reference/reference-holder',
      ],
    },
    {
      type: 'category',
      label: 'Libraries',
      items: [
        'reference/libraries/BitMath',
        'reference/libraries/FixedPoint96',
      ]
    },
    {
      type: 'category',
      label: 'Interfaces',
      items: [
        {
          type: 'category',
          label: 'Callback',
          items: [
              'reference/interfaces/callback/IUniswapV3FlashCallback',
              'reference/interfaces/callback/IUniswapV3MintCallback',
              'reference/interfaces/callback/IUniswapV3SwapCallback'
          ]
        },
        {
          type: 'category',
          label: 'Pool',
          items: [
            'reference/interfaces/pool/IUniswapV3PoolActions',
            'reference/interfaces/pool/IUniswapV3PoolDerivedState',
            'reference/interfaces/pool/IUniswapV3PoolEvents',
            'reference/interfaces/pool/IUniswapV3PoolImmutables',
            'reference/interfaces/pool/IUniswapV3PoolOwnerActions',
            'reference/interfaces/pool/IUniswapV3PoolState',
          ]
        },
        'reference/interfaces/IERC20Minimal',
        'reference/interfaces/IUniswapV3Factory',
        'reference/interfaces/IUniswapV3Pool',
        'reference/interfaces/IUniswapV3PoolDeployer',
      ]
    },
    'reference/NoDelegateCall',
    'reference/UniswapV3Factory',
    'reference/UniswapV3Pool',
    'reference/UniswapV3PoolDeployer',
    
  ],
};