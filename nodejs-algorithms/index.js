
// function to find a factorial
function factorial(n){ 
    
    let increasingOrder = 1
    for(i =1; i<=n; i++){
        increasingOrder = increasingOrder * i;
    }

    let decreasingOrder = 1;
    while(n >= 1){
        decreasingOrder = decreasingOrder * n;
        n--;
    }
    return { increasingOrder,decreasingOrder  };
}

let value = factorial(7)
console.log(value);

// function to find fibbnacci series.
function fibbinacci(n){
    let initialZero = 0;
    let initialOne = 1;
    let array = new Array();
    // series won't be there without this.
    array.push(initialZero);
    array.push(initialOne);
    let nextvalue = 0;

    for(i=0; i<n; i++ ){
        //let zerothIndex = array.slice(array.length-2, array.length-1).forEach(e => {console.log('I am here', e); return e}) 
        //let firstIndex = array.slice(array.length-1, array.length).forEach(e => { console.log('I am here too ', e); return e})
        nextvalue = array.indexOf(i) + array.indexOf(i+1);
        console.log('What is the current index ', i)
        console.log('what is the next value of the array ',nextvalue, typeof(nextvalue));
        array.push(nextvalue);
    }
    return array;
}
console.log(fibbinacci(12))

function fibonacci1(num) {
    if (num <= 1) return 1;  
    return fibonacci1(num - 1) + fibonacci1(num - 2);
}
let value2 = fibonacci1(12);
console.log('What is this value ', value2)

function fibonacci2(num){
    var a = 1, b = 0, temp;
  
    while (num >= 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
  
    return b;
}

