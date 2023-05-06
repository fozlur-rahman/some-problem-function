function gemsToDiamond(firstFrnd, seceondFrnd, thridFrnd) {

    let totalDiamonds = (firstFrnd * 21) + (seceondFrnd * 32) + (thridFrnd * 43);
    if (totalDiamonds > 2000) {
        grandTotals = totalDiamonds - 2000;
    }
    return grandTotals;

}
const result = gemsToDiamond(100, 5, 1);
console.log(result);