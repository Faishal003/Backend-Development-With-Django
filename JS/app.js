//rest method (reverse of spread method)\
function sum(...args){
    return args.reduce((sum, el)=>sum+el);
}

function min(...args){
    return args.reduce((min, el)=>{
        if (min > el){
            return el;
        }else{
            return min;
        }
    })
}

//rest method (reverse of spread method)\
let sums = ((...args)=>{
    let count = 0;
    for(i=0; i < args.length; i++){
        count += args[i]; 
    }
    return count;
})