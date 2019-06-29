// Get the modal
var popupPannel = $(".modal");

// Get the button that opens the modal
var btn = $("#myBtn");

// Get the <span> element that closes the modal
var span = $(".close").eq(0);

// When the user clicks on the button, open the modal

var anc =  $(".opens");
var discription = $(".description");

btn.click( function() {
  popupPannel.css("visibility","visible");
  popupPannel.slideDown(1000)
})

// When the user clicks on <span> (x), close the modal
span.click(function() {
    popupPannel.css("display","none");
    // a.css('display','none');
    popupPannel.animate({height:'0%'},1000);
    popupPannel.hide(500);

})

anc.eq(0).click(function(event) {
    $("#a").css("display","block");
});

anc.eq(1).click(function(event) {
    $("#b").css("display","block");
});
anc.eq(2).click(function(event) {
    $("#c").css("display","block");
});

// if (popupPannel.css("display")=="block") {

// $(window).click(function ()
//   {
//     var a= $(".modal");
//     // a.css('display','none');
//     a.animate({height:'0%'},1000);
//     a.hide(500);
//   })
// }



// When the user clicks anywhere outside of the modal, close it
/*window.click(function(event) {
if (event.target == modal) {
  modal.css("display","none");
}
})
*/
