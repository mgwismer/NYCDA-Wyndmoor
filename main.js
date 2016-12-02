// $(document).ready(function(){
//     $( ".main-container" ).hover(function() {
//            $('.nature-modal').modal({
//         show: false;
//     });
//     $( ".nature-image" ).hover(function() {
//            $('.modal').modal({
//         show: true;
//     });
//   });  
// });

$(document).ready(function(){
    $( ".nature-image" ).hover(function() {
        $('#nature-modal').modal("show");
  });  
});