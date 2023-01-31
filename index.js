// code your solution here
const saturdayFun = (activity ="roller-skate") => {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = (activity ="go to the office") => {
    return `This Monday, I will ${activity}.`;
}

const wrapAdjective = (var1) => {
    return function (var2 = 'special') {
        return `You are ${var1}${var2}${var1}!`;
    }
}

// let result = wrapAdjective('*');
// let emphatic = result('a hard worker');
// console.log(emphatic);