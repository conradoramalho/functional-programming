const x = {
    val: 2
};

const x1 = x => Object.assign({}, x, { val: x.val + 1 });

const x2 = x => Object.assign({}, x, { val: x.val * 2 });

console.log(x1(x2(x)).val); // 5


const y = {
    val: 2
};

x2(y);
x1(y);

console.log(x1(x2(y)).val); // 5