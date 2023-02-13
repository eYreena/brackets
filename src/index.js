module.exports = function check(str, pairs) {
    const stack = [];
    for (const char of str) {
        let isPaired = false;
        for (const [open, close] of pairs) {
            if (char === open) {
                stack.push({char, pair: [open, close]});
                isPaired = true;
                break;
            } else if (char === close) {
                if (stack.length === 0 || stack[stack.length - 1].char !== open) {
                    return false;
                }
                stack.pop();
                isPaired = true;
                break;
            }
        }
        if (!isPaired) {
            return false;
        }
    }
    return stack.length === 0;

    // const openB = bracketsConfig.map((el) => {
    //     let openSymbol = el[0];

    //     return openSymbol;
    // });

    // const revConf = bracketsConfig.map(([a, b]) => {
    //     return [b, a];
    // });

    // const bracetsMap = Object.fromEntries(revConf);

    // let stack = [];

    // for (let i = 0; i < str.length; i++) {
    //     let symbol = str[i];

    //     if (openB.includes(symbol)) {
    //         stack.push(symbol);
    //     } else {
    //         if (stack.length === 0) {
    //             return false;
    //         }

    //         let firstElementInStack = stack[stack.length - 1];

    //         console.log(bracetsMap[symbol], firstElementInStack);

    //         if (bracetsMap[symbol] === firstElementInStack) {
    //             stack.pop();
    //         } else {
    //             return false;
    //         }
    //     }
    // }

    // return stack.length === 0;
};
