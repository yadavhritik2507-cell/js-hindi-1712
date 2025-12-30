const marvel_hero = ["thor","IronMan","spiderman"]

const dc_hero = ["batman","superman","flash"]
//marvel_hero.push(dc_hero)
//console.log(marvel_hero);
//console.log(marvel_hero[3]);

//const all_hero = marvel_hero.concat(dc_hero)

//console.log(all_hero);

// spread operator

const all_new_hero = [...marvel_hero,...dc_hero];

//console.log(all_new_hero)

const another_array = [1,2,3,[4,5,6],7,[8,9,[10,11]]]

const real_another_array = another_array.flat(Infinity)

//console.log(real_another_array);

console.log(Array.isArray("Hritik Yadav"))
const isarry = Array.from("Hritik")
console.log(isarry)
console.log(Array.isArray(isarry))

console.log(Array.from({name:"hritik"}));//interseting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));








