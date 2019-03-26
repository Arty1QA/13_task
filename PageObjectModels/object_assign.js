// Object assign is not used in the framework, this is just an example how it works
'use strict';

let user = { name: 'Admin' };
let admin = { isAdmin: true };

Object.assign(user, admin);

console.log(user);
