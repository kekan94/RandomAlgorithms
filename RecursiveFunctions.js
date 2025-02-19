function speller(string) {
    if (!string) {
        console.log('All done');
    } else {
        console.log(string[0]);
        speller(string.slice(1));
    }
}

speller('Zoe');