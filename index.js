import HashMap from './scripts/hashMap.js';

const test = new HashMap();

test.set('okay', 'fine');
test.set('okay', 'supersssss');
console.log(test.buckets);
