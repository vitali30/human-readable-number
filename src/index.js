module.exports = function toReadable (number) {
    let string = "";
    let str = String(number);
    let nMore1   = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let nMore10 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let nMore20 = ['','','twenty','thirty','forty', 'fifty','sixty','seventy','eighty','ninety'];
    if(str[0] == 0) string = "zero"
    else if (number < 10) string = nMore1[str[0]]
    else if (number < 20) string = nMore10[str[1]]
    else if (str[1] == 0){
        if (number < 100) string = nMore20[str[0]]
        else if (str[2] == 0) string = nMore1[(str[0])] + " hundred"
        else string = nMore1[(str[0])] + " hundred" + " " + nMore1[str[2]]
    }
    else if (number < 100) string = nMore20[str[0]] + " " + nMore1[str[1]]
    else if (+(str[1] + str[2]) < 20) string = nMore1[(str[0])] + " hundred" + " " + nMore10[str[2]]
    else if (str[2] == 0) string = nMore1[(str[0])] + " hundred" + " " + nMore20[str[1]]
    else string = nMore1[(str[0])] + " hundred" + " " + nMore20[str[1]] +  " " + nMore1[str[2]]















    // else if (number < 10) string = nMore1[number]
    // else if (number < 20) string = nMore10[number - 10] 
    // else if (number <100){
    //     if (number % 10 == 0) string = nMore20[Math.floor(number/10)]
    //     else string = nMore20[Math.floor(number/10)] + " " + nMore1[(number % 10)]
    // }
    // else if (number % 100 == 0) string = nMore1[Math.floor(number / 100)] + " hundred"
    // else if (+str[1] == 0) string = nMore1[Math.floor(number / 100)] + " hundred" + " " + nMore1[str[2]]
    // else if (number % 100 < 20) string = nMore1[Math.floor(number / 100)] + " hundred" + " " + nMore10[numberString[2]]
    
    // else if (+str[2] == 0) string = nMore1[Math.floor(number / 100)] + " hundred" + " " + nMore20[str[1]]
    // else string = nMore1[Math.floor(number / 100)] + " hundred" + " " + nMore20[str[1]] + " " + nMore1[str[2]]
return (string );

}
// let number = 201;
// console.log(module.exports (number));


