/* Object Normal copy */
//// not work independent as object
console.log('Object Normal copy');
const obj11 = {
    name: 'anik',
    address: {
        division: 'khulna',
        city: 'Bangladesh',
        fun1: function () {
            console.log("test");
        }
    }
}
const obj12 = obj11;//reference copy process /// indicate reference ; same location
obj12.name = 'new anik';
obj12.address.division = 'dhaka';
console.log("obj11 :", obj11);
console.log("obj12 :", obj12);


/* Shallow copy */
////Not work for nested object
console.log('Object Shallow copy');
const obj21 = {
    name: 'anik',
    address: {
        division: 'khulna',
        city: 'Bangladesh',
        fun: function () {
            console.log("test");
        }
    }
}
const obj22 = { ...obj21 }; //Object assign or distucting process /// nested object not work
obj22.name = 'new anik';
obj22.address.division = 'dhaka';
console.log("obj21 :", obj21);
console.log("obj22 :", obj22);

/* Deep copy */
////not work properly if use a methods
console.log('Object Deep copy')
const obj31 = {
    name: 'anik',
    address: {
        division: 'khulna',
        city: 'Bangladesh',
        fun: function () {
            console.log("test");
        }
    }
}
const obj32 = JSON.parse(JSON.stringify(obj31)); //but this case skip the function or methods
obj32.name = 'new anik';
obj32.address.division = 'dhaka';
console.log("obj31 :", obj31);
console.log("obj32 :", obj32);

/// Arrive problem
//// Another solution use lodash class function to resolvedd
//// Or key way value copy one object to anoter object