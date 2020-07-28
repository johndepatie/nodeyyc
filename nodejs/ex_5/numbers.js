/*export function isEvenNum(num){
    if (num isEven){
        logger.info(`%num% is even`);
    } else {
        logger.error(`%num% is odd`);
    }
}*/
const isEven = function(num){
    return (num %2 == 0) ? true : false;
}

module.exports = isEven;