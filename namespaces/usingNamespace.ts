// To import the namespace and use it, make use of triple slash reference tag.

/// <reference path="./namespace1.ts" />

import util = Utility.Payment;

let paymentAmount = util.calculateAmount(1200,6)
console.log(`Amount to be paid: ${paymentAmount}`)

let discount  = Utility.maxDiscountAllowed(6);
console.log(`Maximum discount allowed - ${discount}`)

// Utility.privateFunc()

// -------------Compilation ---------------------
// The file in which the namespace is declared and the file which uses the namespace have to be compiled together. It is preferable to group the output together in a single file. We have an option to do that by using the --outFile keyword.
// tsc --outFile FinalFilename.js namespace1.ts usingNamespace.ts