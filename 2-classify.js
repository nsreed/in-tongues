const defs = require('./defs.json');
const fs = require('fs');
const {resolve, relative} = require("path");

const adjectives = defs.filter(d => d[1].includes('adjective') || d[1].includes('adjective satellite')).map(d => d[0]);
const nouns = defs.filter(d => d[1].includes('noun')).map(d => d[0]);

fs.writeFileSync(resolve(__dirname, 'adjectives.json'), JSON.stringify(adjectives), {encoding: 'utf-8'});
fs.writeFileSync(resolve(__dirname, 'nouns.json'), JSON.stringify(nouns), {encoding: 'utf-8'});