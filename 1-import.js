const wordnet = require('wordnet');
const fs = require('fs');
const {resolve, relative} = require("path");

async function main() {
  await wordnet.init();
  let list = await wordnet.list();
  let lp = await Promise.all(list.map(async word => {
    // console.log('looking up', word);
    const def = await wordnet.lookup(word);
    // console.count('def');
    const types = new Set(def.map(d => d.meta.synsetType));

    // console.log(`${word} def %o`, JSON.stringify(def));
    return [word, [...types]];
  }));


  console.log(lp);
  fs.writeFileSync(resolve(__dirname, 'defs.json'), JSON.stringify(lp),
    {encoding: 'utf-8'})
}

main();