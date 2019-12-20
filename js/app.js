$("a").click(function(){
   var idVal = $(this).attr("href");
   $("html, body").animate({
      'scrollTop':$(idVal).offset().top}, 250);
});

$(".contact").click(function(){
    var contactDIV = $("<div></div>");
    var h1 = $("<h1></h1>");
    h1.css("color","white");
    h1.innerHTML = "John Lairson";
    var h2 = $("<h2></h2>");
    h2.css("color","white");
    var mailto = $("<a></a>");
    mailto.prop("href", "jomalair@iu.edu");
    mailto.css("color","white");
    h2.append(mailto);
    h1.append(h2);
    contactDIV.append(h1);
    contactDIV.addClass("contactme");
    //contactDIV.append("<h1>John Lairson</h1><br>" + "<h2>email:  <a href='mailto:jomalair@iu.edu'>jomalair@iu.edu</a></h2>");
    contactDIV.css({
        backgroundColor:"black",
        color:"white",
        height:"50%",
        width:"50%",
        margin:"0px",
        zIndex:"100",
        top:"25%",
        left:"25%",
        position:"fixed",
    });

    $("html, body").animate({
        'scrollTop':$("#summary").offset().top}, 250);
    contactDIV.click(function(){
        this.remove();
    });

    $("body").append(contactDIV);

    });
