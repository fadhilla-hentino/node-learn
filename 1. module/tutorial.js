const concat = (str1, str2) => str1.concat(str2);
const split = (str1) => str1.split('-');
class User {
    constructor() {
        console.log('constructor - init user object');
    }
}

// export func/method/class - 1 by 1
/* module.exports.concat = concat;
module.exports.split = split;
module.exports.user = User; */

// export func/method/class - single line
module.exports = {concat: concat, split: split, user: User};