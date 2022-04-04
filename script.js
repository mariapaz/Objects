// Capitalise keys 

function capitaliseKeys(obj) {
 let newObj = {};
for (const property in obj) {
 property2 = property.toUpperCase()
  newObj[property2] = obj[property];
  console.log(newObj);
  //return newObj;
 }
}

console.log("//capitaliseKeys({ a: 1, b: 2, c: 3 })");
capitaliseKeys({ a: 1, b: 2, c: 3 }); //Expected: { A: 1, B: 2, C: 3 }
console.log("//Expected: { A: 1, B: 2, C: 3 }");
console.log ('*****************************');
console.log ('//capitaliseKeys({ Hello: "hi" })');
capitaliseKeys({ Hello: "hi" }); //Expected: { HELLO: 'hi' }
console.log ('//Expected: { HELLO: "hi"}')
console.log ('*****************************');
console.log ('//capitaliseKeys({})');
capitaliseKeys({}); //Expected: {}
console.log ('//Expected: {}');
console.log ('*****************************');
//  String to object 

function stringToObject(str) {
  let arr = str.split(',');
  let longArr =[];
  let arrObj = {};
  arr.forEach(function(el){
    for (let i = 0; i < el.length ; i++){
      if (el[i] == ':'){
        let splits = el.split(el[i], el.length-1);
        longArr.push(splits); 
           arrObj = longArr.reduce(function(prev,curr){prev[curr[0]]=curr[1];return prev;},{})
      }
    }
  });
  console.log (arrObj);
}
console.log ('*****************************');
console.log ('//stringToObject("")');
stringToObject(""); // Expected {}
console.log ('// Expected {}');
console.log ('*****************************');
console.log ('//stringToObject("a:1,b:2,c:3")');
stringToObject("a:1,b:2,c:3"); //Expected { a: "1", b: "2", c: "3" }
console.log ('//Expected { a: "1", b: "2", c: "3" }');
console.log ('*****************************');
console.log ('//stringToObject("one:-1,two:hi there,three:what\'s that?")');
stringToObject("one:-1,two:hi there,three:what's that?"); // Expected { one: "-1", two: "hi there", three: "what's that?" }
console.log ('// Expected { one: "-1", two: "hi there", three: "what\'s that?" }');

// shoppingList

function shoppingList(str) {
  let obj = {};
  let strClean = [];
  let arr = str.split(',');
  let words = [];
   arr.forEach(function(el){
      for(let i = 0; i < el.length ; i++){
         if (typeof Number(el[i]) && Number(el[i]) === Number(el[i]) && Number(el[i]) > 0 ){
         words[el] = el.split(el[i]).pop(); // 2020
        obj[words[el]] = Number(el[i]);
     }
   }
});
 console.log(obj);
}
console.log ('*****************************');
shoppingList("2 tomatoes, 1 egg, 3 pumpkins");
//returns { tomatoes: 2, egg: 1, pumpkins: 3 }
console.log ('//shoppingList("2 tomatoes, 1 egg, 3 pumpkins") - returns { tomatoes: 2, egg: 1, pumpkins: 3 }');
console.log ('*****************************');
shoppingList("");
console.log ('//shoppingList("") - returns {}');
// returns {}
console.log ('*****************************');
shoppingList("2 tomatoes, 1 egg, 0 pumpkins");
console.log ('//shoppingList("2 tomatoes, 1 egg, 0 pumpkins") -  returns { tomatoes: 2, egg: 1 } ');
// returns { tomatoes: 2, egg: 1 }

// Map Object 

function mapObject(obj, fn) {
  let newObj = {};
  let item2;
  for (const item in obj) {
  //console.log(item); // a b greeting goodbye
  // console.log(obj[item]); // 1 2 hithere ...
  item2 = fn(obj[item]);   
  newObj[item] = item2;  
 // console.log(item2)
  console.log(newObj[item]);
}
}
console.log ('*****************************');
mapObject({ a: 1, b: 2 }, (n) => n + 2);
// returns { a: 3, b: 4 }
console.log ('// mapObject({ a: 1, b: 2 }, (n) => n + 2) - returns { a: 3, b: 4 }');
console.log ('*****************************');

mapObject(({ greeting: 'hi there, ', goodbye: 'see you later, ' }), (s) => s + 'Yvonne');
// returns { greeting: 'hi there, Yvonne', goodbye: 'see you later, Yvonne' }
console.log ('***');
console.log ("// mapObject(({ greeting: 'hi there, ', goodbye: 'see you later, ' }), (s) => s + 'Yvonne') // returns { greeting: 'hi there, Yvonne', goodbye: 'see you later, Yvonne'");