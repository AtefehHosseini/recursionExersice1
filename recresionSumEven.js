//linear sum for Even Numbers:

function linearSumEvent(number){

    if(number===0){
        return 0;
    }
    else if(number===2*number+1){
        return linearSumEvent(number-1);
    }
    return number+linearSumEvent(number-1);
}
console.log(linearSumEvent(4));