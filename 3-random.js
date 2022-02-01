const nouns = require('./nouns.json');
const adjectives = require('./adjectives.json');

// for (let i = 0; i < 15; i++) {
const ai = Math.floor(Math.random() * adjectives.length);
const ni = Math.floor(Math.random() * nouns.length);

const ra = adjectives[ai];
const rn = nouns[ni];

console.log(`${ra} ${rn}`);
// }