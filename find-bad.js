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
const reslt = findingBadData(numArray);
