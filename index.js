// Code your solutions in this file
function countDown(start){
    while(start>=0){
        console.log(start)
        start--;
    }
}

function writeCards(names, type){
    let messages=[];
    for(let i=0; i< names.length; i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful ${type} gift!`)
    }
    return messages;
}