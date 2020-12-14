'use strict';
let year = Number(prompt("Enter Birth year:"));
let age;
function calcAge1(birthYear) {
    age = 2020 - birthYear;
    return age;
}
calcAge1(year);
console.log("Your age is " + age);
const age2 = function (birthYear) {
    return 2020 - birthYear;
}
const age3 = age2(year);
console.log(age3);

const currentAge = birthyear => 2020 - birthyear;

const age1 = currentAge(2005);

console.log(age1);
const yearUntilretirement = (birthYear, name) => {

    const age1 = 2020 - birthYear;
    const retirement = 65 - age1;
    return `${name} retires in ${retirement} years`;
}
let retd = yearUntilretirement(2005, "Siddharth");
console.log(retd);

console.log(`Rules:
Rock beats Scissor
Scissor beats paper
Paper beats rock
5 rounds to win.`);
let p1Name = prompt("Enter player 1 name:");
let p2Name = prompt("Enter player 2 name:");
let p1Score = 0, p2Score = 0;
for (let i = 1; i <= 5; i++) {
    let p1 = prompt(`${p1Name} enter your move (Rock/Paper/Scissor) :`);
    let p2 = prompt(`${p2Name} enter your move (Rock/Paper/Scissor) :`);
    p1 = p1.toUpperCase();
    p2 = p2.toUpperCase();

    if (p1 === "ROCK" && p2 === "SCISSOR") {
        p1Score++;
        console.log(`${p1Name} scores!!`);
        console.log(`
        Score : ${p1Name} : ${p1Score}
                ${p2Name} : ${p2Score}`);
    }
    else if (p1 === "ROCK" && p2 === "PAPER") {
        p2Score++;
        console.log(`${p2Name} scores!!`);
        console.log(`
        Score : ${p1Name} : ${p1Score}
                ${p2Name} : ${p2Score}`);
    }
    else if (p1 === "ROCK" && p2 === "ROCK") {
        p1Score += 0;
        p2Score += 0;
        console.log(`TIE!!`);
        console.log(`
        Score : ${p1Name} : ${p1Score}
                ${p2Name} : ${p2Score}`);
    }
    else if (p1 === "PAPER" && p2 === "ROCK") {
        p1Score++;
        console.log(`${p1Name} scores!!`);
        console.log(`
        Score : ${p1Name} : ${p1Score}
                ${p2Name} : ${p2Score}`);
    }
    else if (p1 === "PAPER" && p2 === "PAPER") {
        p1Score += 0;
        p2Score += 0;
        console.log(`TIE!!`);
        console.log(`
        Score : ${p1Name} : ${p1Score}
                ${p2Name} : ${p2Score}`);
    }

    else if (p1 === "PAPER" && p2 === "SCISSOR") {
        p2Score++;
        console.log(`${p2Name} scores!!`);
        console.log(`
        Score : ${p1Name} : ${p1Score}
                ${p2Name} : ${p2Score}`);
    }

    else if (p1 === "SCISSOR" && p2 === "ROCK") {
        p2Score++;
        console.log(`${p2Name} scores!!`);
        console.log(`
        Score : ${p1Name} : ${p1Score}
                ${p2Name} : ${p2Score}`);
    }

    else if (p1 === "SCISSOR" && p2 === "PAPER") {
        p1Score++;
        console.log(`${p1Name} scores!!`);
        console.log(`
        Score : ${p1Name} : ${p1Score}
                ${p2Name} : ${p2Score}`);
    }

    else if (p1 === "SCISSOR" && p2 === "SCISSOR") {
        p1Score += 0;
        p2Score += 0;
        console.log(`TIE!!`);
        console.log(`
        Score : ${p1Name} : ${p1Score}
                ${p2Name} : ${p2Score}`);
    } else {
        console.log("Wrong move entered!");
        i--;
    }
}
if (p1Score > p2Score) {
    console.log(`${p1Name} wins with a score of ${p1Score}!
    Scores: ${p1Name} :${p1Score}
            ${p2Name} :${p2Score}`);
} else if (p1Score < p2Score) {
    console.log(`${p2Name} wins with a score of ${p2Score}!
    Scores: ${p1Name} :${p1Score}
            ${p2Name} :${p2Score}`);

} else {
    console.log(`Match Tied!!`);
}

const cutPieces = function (fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);
    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
    return juice;
}
console.log(fruitProcessor(2, 3));

//#cc1
let avgDolphin, avgKoala = 0;
const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;
avgDolphin = calcAverage(85, 54, 41);
avgKoala = calcAverage(23, 34, 27);

function checkWinner(dolphinAvg, koalaAvg) {
    if (dolphinAvg >= (2 * koalaAvg)) {
        return "Dolphin";
    } else if (koalaAvg >= (2 * dolphinAvg)) {
        return "Koala";
    } else {
        return "draw";
    }
}
const winner = checkWinner(avgDolphin, avgKoala);
if (winner === "Dolphin") {
    console.log(`Dolphin wins (${avgDolphin} vs ${avgKoala})`);
} else if (winner === "Koala") {
    console.log(`Koala wins (${avgKoala} vs ${avgDolphin})`);
} else {
    console.log("Match is drawn");
}
