const defaultResult = 0;
let currentResult = defaultResult;
let calculationDescription;
let logEntries = [];

function getUserInput(){
    return Number(userInput.value);
}

function createAndWriteOutput(operator, beforeCalc, enterdNumber){
    const calcDescription = `${beforeCalc} ${operator} ${enterdNumber}`;
    outputResult(currentResult, calcDescription);
}

function calculation(operator){

    if(operator !== 'ADD' && operator !== 'SUBTRACT' && operator !== 'MULTIPLY' && operator !== 'DIVIDE'){
        return;
    }

    const userNumber = getUserInput();
    const initialCalc = currentResult;
    let mathOperator;

    if(operator === 'ADD' || operator === 'SUBTRACT' || operator === 'MULTIPLY' || operator === 'DIVIDE'){
        if(operator === 'ADD'){
            currentResult += userNumber;
            mathOperator = '+';
        } else if(operator === 'SUBTRACT'){
            currentResult -= userNumber;
            mathOperator = '-';
        } else if(operator === 'MULTIPLY'){
            currentResult *= userNumber;
            mathOperator = '*';
        } else if(operator === 'DIVIDE'){
            currentResult /= userNumber;
            mathOperator = '/';
        }else {
            return;
        }
    }

    
    createAndWriteOutput(mathOperator, initialCalc, userNumber);
    writeLog(operator, initialCalc, userNumber, currentResult);
}

function writeLog(operation, prevResult, enterredNumber, finalResult){
    logEntry = {
        operation: operation,
        initialCalc: prevResult,
        enterredNumber: enterredNumber,
        result: finalResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add(){
    // const userNumber = getUserInput();
    // const initialCalc = currentResult;
    // currentResult = currentResult + userNumber;
    // createAndWriteOutput('+', initialCalc, userNumber);
    // writeLog('ADD', initialCalc, userNumber, currentResult);
    calculation('ADD');
}

function subtract(){
    // const userNumber = getUserInput();
    // const initialCalc = currentResult;
    // currentResult = currentResult - userNumber;
    // createAndWriteOutput('-', initialCalc, userNumber);
    // writeLog('SUBTRACT', initialCalc, userNumber, currentResult);
    calculation('SUBTRACT');
}

function multiply(){
    // const userNumber = getUserInput();
    // const initialCalc = currentResult;
    // currentResult = currentResult * userNumber;
    // createAndWriteOutput('*', initialCalc, userNumber);
    // writeLog('MULTIPLY', initialCalc, userNumber, currentResult);
    calculation('MULTIPLY');
}

function division(){
    // const userNumber = getUserInput();
    // const initialCalc = currentResult;
    // currentResult = currentResult / userNumber;
    // createAndWriteOutput('/', initialCalc, userNumber);
    // writeLog('DIVISION', initialCalc, userNumber, currentResult);
    calculation('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', division);
