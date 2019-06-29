var t = new Date();
var i =1;
var printtime = $("span");
var closebtn = $("#closebtn");
var MyLogo = $(".MyLogo");

if (t.getHours()>=11 && t.getHours()<=16)
    {printtime.text("Afternoon");
    console.log(printtime.text());
    }

if(t.getHours()<11)
    {printtime.text("Morning") ;
    console.log(printtime.text());
    }

  $(window).click(function ()
  {
    var a= $(".welcomepanel");
    // a.css('display','none');
    a.animate({height:'0%'},1000);
    a.hide(500);
  })

  closebtn.click(function ()
  {
    var a= $(".welcomepanel");
    // a.css('display','none');
    a.animate({height:'0%'},1000);
    a.hide(500,function () {alert('You are On Main Page Now');});
  })

while (i<1000)
  {
    MyLogo.toggle(1000);
    i++;
  }
