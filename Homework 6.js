//          1



let sortedArr = [ 1 , 5 , 10 , 18 , 20 , 25 , 30 , 50 , 75 , 76 , 80 , 90 , 100 ] ;
let char = 90 ;
 
function binarySearch( arr , element , first = 0 , last = arr.length - 1 ) {
    if ( element === arr[first] ) {
        return first ;
    }
    if ( element === arr[last] ) {
        return last ;
    }
    if ( element <= arr[ Math.floor( ( first + last ) / 2 ) ] ) {
        last = Math.floor( ( first + last ) / 2 ) ;
        return binarySearch( arr , element , first , last ) ;
    }
    first = Math.floor( ( first + last ) / 2 ) ;
    return binarySearch( arr , element , first , last ) ;
}

console.log( binarySearch( sortedArr , char ) ) ;





//           2





let arr = [ 5 , 9 , 23 , 0 , -2 , -1 , 10 ];
let number = 4 ;

let res = [] ;
res.length = number ;

function finish( arr , length , start ) {
    if ( length === 0 ) {
        return console.log( res.join( ' ' ) ) ;
    }
    for ( let i = start ; i < arr.length ; i++ ) {
        res[ number - length ] = arr[i] ;
        finish( arr , length - 1 , i + 1 ) ;
    }
}

finish( arr , number , 0 ) ;