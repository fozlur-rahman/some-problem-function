function mindGame(num) {
    reslt = (num * 3 + 10) / 2 - 5;
    return reslt;
}
const mind = mindGame(50);



function isLGSeven(number) {
    if (number < 7) {
        let subst = number - 7;
        return subst;
    }
    else {
        let multi = number * 2;
        return multi;
    }
}
const reslt = isLGSeven(15);


function findingBadData(numbers) {
    badSum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < 0) {
            badSum++;
        }
    }
    return badSum;
}
const numArray = [-2, 5, -7, 13];
const reslt2 = findingBadData(numArray);

function evenOdd(name) {
    if (name.length % 2 == 0) {
        return 'even';
    }
    else {
        return 'odd';
    }

}
const reslts = evenOdd('Batch7');


function gemsToDiamond(firstFrnd, seceondFrnd, thridFrnd) {

    let totalDiamonds = (firstFrnd * 21) + (seceondFrnd * 32) + (thridFrnd * 43);
    if (totalDiamonds > 2000) {
        grandTotals = totalDiamonds - 2000;
    }
    return grandTotals;

}
const getResult = gemsToDiamond(100, 5, 1);
console.log(getResult);