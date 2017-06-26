'use strict'

module.exports =  {
  endpoints: [
    'root',
    'clean',
    'mobile',
    'station',
    'association',
    'pairing',
    'refresh'
  ],
  keys: {    
    [process.env.KEY_ROOT              || 'secretKeyZero'] : 0,
    [process.env.KEY_CLEANUP           || 'secretKeyOne']  : 1,
    [process.env.KEY_MOBILE            || 'secretKeyTwo']  : 2,
    [process.env.KEY_STATION           || 'secretKeyThree']: 3,
    [process.env.KEY_ASSOCIATION       || 'secretKeyFour'] : 4,
    [process.env.KEY_SUBSCRIPTIONS     || 'secretKeyFive'] : 5,
    [process.env.KEY_PROFILES          || 'secretKeySix']  : 6
  }
};
