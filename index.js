import HashMap from './scripts/hashMap/hashMap.js';
import HashSet from './scripts/hashSet/hashSet.js';

const testMap = new HashMap();

testMap.set('apple', 'banana');
testMap.set('ocean', 'mountain');
testMap.set('giraffe', 'elephant');
testMap.set('sunflower', 'raindrop');
testMap.set('labyrinth', 'harmony');
testMap.set('ephemeral', 'whirlpool');
testMap.set('nostalgia', 'twilight');
testMap.set('resonance', 'melody');
testMap.set('inspiration', 'ballet');
testMap.set('mystique', 'silhouette');
testMap.set('ethereal', 'whisper');
testMap.set('fountain', 'moonbeam');
testMap.set('solitude', 'harbor');
testMap.set('silence', 'quasar');
testMap.set('cathedral', 'rhapsody');

testMap.remove('labyrinth');

// console.log(testMap.buckets);
// console.log(testMap.maxSize);
// console.log(testMap.getLength());

const testSet = new HashSet();

testSet.set('apple');
testSet.set('ocean');
testSet.set('giraffe');
testSet.set('sunflower');
testSet.set('labyrinth');
console.log(testSet.buckets);
