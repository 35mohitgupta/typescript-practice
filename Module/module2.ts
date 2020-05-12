// Importing exported alias class name
//Giving alias name while importing
import { MainUtility, CAtegory as Category, productName, maxDiscountAllowed} from './module1';

let util = new MainUtility();

let price =  util.calculateAmount(1200,5);

let discount = maxDiscountAllowed(4);

class X implements Category {

}

console.log(`product name - ${productName}`)