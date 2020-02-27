// -- Price depends on quantity
quantity = 24 ;

if ( quantity >= 24 ) {
    price = 100; 
}
    else if ( quantity >= 10 ) {
        price = 50 ;
    }
       else if ( quantity >= 1 ) {
            price = 35;
        }
    
 
else {
    price = "no purchase" ;
}
console.log( quantity + ' products will cost ' + price + ' each.' ) ;
