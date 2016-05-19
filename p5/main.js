

$(document).ready(function() {
 var tiempo = prompt("Escribe un número ente el 1 y el 20 y espera el resultado");
 

var explode = function(){
    $('.texto').fadeIn(100);
};
setTimeout(explode, tiempo * 1000);



});





// var explode = function(){
//     $('.texto').fadeIn(500);
// };
// setTimeout(explode, tiempo * 1000);


// while (n < 3) {
//   n++;
//   x += n;
// }




// setTimeout(function(){
//    $('.texto').show();// or fade, css display however you'd like.
// }, 5000);



// $(document).ready(function () {
//     setTimeout(function(){
//         $('#paint').fadeIn(500);
//     }, 5000);
// });