var vapulusHash = require('vapulus-hashing-pkg');

var myRequestParams = {
    cardNum : '5123456789012346',
    cardExp : 2105,
    cardCVC : 123,
    holderName :'John Doe',
    mobileNumber :'20100000000000'
};
var hashSecret='C0DF9A7B3819968807A9D4E48D0E65C6';

var secureHash = vapulusHash.generateHash(hashSecret,myRequestParams);

console.log(secureHash)