// C is for Cookies

let cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
let y = 1

for (let x = 1; x < cookies.length; x++) {
    let currentCookie = cookies[x]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}

// Conjuction Function

const conjunction = (firstWord, secondWord) => {
    const conjoinedWord = `${firstWord} ${secondWord}`;
    console.log(conjoinedWord);
}

conjunction("Master", "Card");

// Mod Squad

const ModSquad = {
    "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
    "series": {
        "start": "1968",
        "end": "1973"
    }
}

let HTMLRepresentation = `<h1>The Mod Squad</h1>`;

ModSquad.members.forEach(member => {
    HTMLRepresentation += `<div>${member}</div>`;
    return HTMLRepresentation;
    document.querySelector(".show-info").innerHTML = HTMLRepresentation;
})

// Simon Says

const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]];

for (let k = 0; k < locations.length; k++) {
    const currentLocation = locations[k]

    if (currentLocation[0] > 2) {
        const invalidLocation = true;
    }

    if (invalidLocation = false) {
        console.log("This location is invalid");
    }
    console.log(`There were ${k} locations displayed`);
}

// Llambda Llama

const llamaNamer = () => {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"];
    const randomizer = Math.floor(Math.random() * 7);

    const namer = () => {
        const suffix = " the Llama";
        const name = possibleNames[randomizer];
        return name + suffix;
    }
    return namer();
}

console.log(llamaNamer());