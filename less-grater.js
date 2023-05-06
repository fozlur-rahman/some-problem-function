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
