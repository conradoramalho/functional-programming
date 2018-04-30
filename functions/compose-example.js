const curry = fn => (...args) => fn.bind(null, ...args);

const map = curry((fn, arr) => arr.map(fn));

const join = curry((str, arr) => arr.join(str));

const toLowerCase = str => str.toLowerCase();

const split = curry((splitOn, str) => str.split(splitOn));

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const toSlug = compose(
  encodeURIComponent,
  join("-"),
  map(toLowerCase),
  split(" ")
);

console.log("slug:", toSlug("compose test"));
