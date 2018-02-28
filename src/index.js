module.exports = function getZerosCount(number) {
        /**
    var res = Math.floor(number/5);
    var result = Math.floor(number/5);
    while(res != 1){
        res = Math.floor(res/5);
        result += res;
        I dont know why, but this is crash the system, but it seems good and it work.
    };**/
    var first = Math.floor(number/5);
    var second = Math.floor(first/5);
    var third = Math.floor(second/5);
    var fourth = Math.floor(third/5);
    var fifth = Math.floor(fourth/5);
    var sixth = Math.floor(fifth/5);
    var seventh = Math.floor(sixth/5);
    var eights = Math.floor(seventh/5);
    var ninth = Math.floor(eights/5);
    var tens = Math.floor(ninth/5);
    var el = Math.floor(tens/5); 


    return first+second+third+fourth+fifth+sixth+seventh+eights+ninth+tens+el;
    
}
