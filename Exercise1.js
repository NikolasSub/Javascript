function binaryConverter(binaryDigit){
    if (binaryDigit.search(/[^01]/) == -1) {
        let arr = [];
        let digit = 0;
        for (let i = 0; i < binaryDigit.length; i++){
            arr[arr.length] = binaryDigit.substring(i, i + 1);
        }
        for (let j = 0; j < arr.length; j++){
           digit += Number(arr[j])*Math.pow(2, (arr.length - 1) - j);
        }
        return digit;
    } else return undefined;
}

console.log(binaryConverter("010110"))

console.log(binaryConverter("11001100"))

console.log(binaryConverter("10011012"))
