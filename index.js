import HashMap from './scripts/hashMap.js';

const test = new HashMap();

test.set('okay', 'fine');
test.set('oxas', 'super');
test.set('asd', 'super');
test.set('fasf', 'super');
test.set('fasfsa', 'super');
test.set('fasfas', 'super');
test.set('fasf', 'fine');
test.set('asfas', 'super');
test.set('dasdasd', 'super');
test.set('dasdasd', 'super');
test.set('gdfgdg', 'super');
test.set('zxczxcv', 'works');
test.set('aqwdasd', 'super');
test.set('zxcx', 'super');
test.set('asdg', 'super');
test.set('', 'super');

console.log(test.buckets);
console.log(test.has(''));
