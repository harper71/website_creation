//OBJECTS


let ourDogs = {
  "name": "camper",
  "age": 3,
  "legs": 4,
  "tails": 1,
  "friends": ["everything"]
};

// dot notation

let testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats",
  "an entree": "hamburger"
};

console.log(testObj.hat, testObj.shirt);

let entreeValue = testObj["an entree"];

console.log(entreeValue);


//check if an object has a property

let myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "change me!";
  }
}

console.log(checkObj('gift'));

let myMusic = [
  {
    artist: "Billy Joel",
    title: "piano Man",
    release_year: 1970,
    format: [
      "CD",
      "8T",
      "LP"
    ],
    gold: true
  },
  {
    artist: "Micheal Jackson",
    title: "Billie Jean",
    release_year: 1985,
    format: [
      "CD",
      "8T",
      "LP"
    ],
    platium: true 
  }
];

let myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    outside: {
      trunk: "jack"
    }
  }
};

let gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);


let collection = {
  "2548": {
    "ablum": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [
      "let it rock",
      "you give love a bad name"
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "track": [
      "1999",
      "little red corvette"
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "track": [ ]
  },
  "5439": {
    "album": "ABBA Gold"
  }
}


let collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  } else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop]  || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }

  return collection;
}


updateRecords(5439, "artist", "ABBA");

updateRecords(2468, "track", "test");

console.log(collection);
