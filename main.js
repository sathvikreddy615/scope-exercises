const llamaNamer = () => {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"];
    const randomizer = Math.floor(Math.random() * 7);

    const namer = () => {
        const suffix = " the Llama";
        const name = possibleNames[randomizer];
        return [name, suffix]
    }
}

console.log(llamaNamer());