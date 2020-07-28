const Logger = require('logplease');
const logger = Logger.create('utils');
const isEven = require('./numbers');

const numArray=[2,3,101,201,202,100];

logger.debug(`Logger operational`);

for (mark of numArray){
    let type = 'odd'

    if (isEven(mark)){
        type = 'even';
    }
    if (type == 'even'){
        logger.info(mark + ' is even');
    }
    else if (type == 'odd'){
        logger.error(mark + ' is odd');
    }
    else {
        logger.error(`I don't know how you did it, but type is empty and that shouldn't happen...`);
    };
    /*console.log(mark + " is " + type);*/
}


/*
numArray.forEach(isEvenNum());
function isEvenNum(num){
    if (num isEven){
        logger.info(`%num% is even`);
    } else {
        logger.error(`%num% is odd`);
    }
}*/
