//nested arrays

let heros = [["ironman, captain america, thor, hulk, spiderman, venom"], ["batman, superman, wonderwoman, flash, aquaman, cyborg"]];

for (let i = 0; i < heros.length; i++) {
    console.log(`List #${i}`);
    for (let j = 0; j < heros[i].length; j++) {
        console.log(heros[i][j]);
    }
}