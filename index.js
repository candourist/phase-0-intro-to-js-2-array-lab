let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    return [...cats, name];
}

function prependCat(name) {
    return [name, ...cats];
}

function removeLastCat() {
    return cats.slice(0, -1);
}

function removeFirstCat() {
    return cats.slice(1);
}



destructivelyAppendCat("Simba");
console.log("After appending Simba:", cats);

destructivelyPrependCat("Nala");
console.log("After prepending Nala:", cats);

destructivelyRemoveLastCat();
console.log("After removing last cat:", cats);

destructivelyRemoveFirstCat();
console.log("After removing first cat:", cats);

console.log("Appended array:", appendCat("Simba"));

console.log("Prepended array:", prependCat("Nala"));

console.log("Array after removing last cat:", removeLastCat());

console.log("Array after removing first cat:", removeFirstCat());