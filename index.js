'use strict';

const data = require('./data.js');
const args = process.argv;

const getSecretKey = function(endpoint){
  const objectFunction  = { 
    getKeyByIndex: function (n) {
      return this[Object.keys(this)[n]];
    } 
  }
  const keys = Object.assign({}, data.keys, objectFunction);
  const keyFound = keys.getKeyByIndex([data.endpoints.indexOf(endpoint)])
  return keyFound === undefined ?  `The endpoint: ${endpoint} has no key` : keyFound
};


if(args.length > 2){
  let endpoints = args.slice(2, args.length);
  for(let i in endpoints){
    console.log(getSecretKey(endpoints[i]));
  };
}
else{
  console.log('you must specify an endpoint');
  process.exit(0);
}









