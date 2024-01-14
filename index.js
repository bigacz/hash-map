import HashMap from './scripts/hashMap/hashMap.js';
import HashSet from './scripts/hashSet/hashSet.js';

const testMap = new HashMap();

testMap.set('apple', 'banana');
testMap.set('ocean', 'mountain');
testMap.set('giraffe', 'elephant');
testMap.set('sunflower', 'raindrop');
testMap.set('labyrinth', 'harmony');
testMap.set('ephemeral', 'whirlpool');

console.log(testMap.buckets);

const testSet = new HashSet();

testSet.set('apple');
testSet.set('ocean');
testSet.set('giraffe');
testSet.set('sunflower');
testSet.set('labyrinth');
testSet.set('ephemeral');
testSet.set('nostalgia');
testSet.set('resonance');
testSet.set('inspiration');

console.log(testSet.buckets);
