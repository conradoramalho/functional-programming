const x = {
  val: 2,
};

const x1 = x => Object.assign({}, x, { val: x.val + 1 });

const x2 = x => Object.assign({}, x, { val: x.val * 2 });

console.log(x1(x2(x)).val); // 5

const y = {
  val: 2,
};

x2(y);
x1(y);

console.log(x1(x2(y)).val); // 5

// * *//

const curry = fn => (...args) => fn.bind(null, ...args);

const map = curry((fn, arr) => arr.map(fn));

const join = curry((str, arr) => arr.join(str));

const toLowerCase = str => str.toLowerCase();

const split = curry((splitOn, str) => str.split(splitOn));

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const toSlug = compose(
  encodeURIComponent,
  join('-'),
  map(toLowerCase),
  split(' ')
);

console.log('slug:', toSlug('compose test'));
