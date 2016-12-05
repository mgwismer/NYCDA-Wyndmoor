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
  $( ".shops-image" ).hover(function() {
     $('#food-modal').modal("show");
  });
  $( ".home-image" ).hover(function() {
     $('#live-modal').modal("show");
  });  
  $( ".college-image" ).hover(function() {
     $('#college-modal').modal("show");
  });      
});