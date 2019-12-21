$("a").click(function(){
   var idVal = $(this).attr("href");
   $("html, body").animate({
      'scrollTop':$(idVal).offset().top}, 250);
});

$(".contact").click(function(){
    var contactDIV = $("<div></div>");
    var h1 = $("<h1>John Lairson</h1>");
    var mailto = $("<a>john.lairson@johnlairson.com</a>");
    mailto.prop("href", "mailto:john.lairson@johnlairson.com");
    var message = $("<p>Click this Box to Close</p>");
    contactDIV.append(h1, mailto, message);
    contactDIV.addClass("contactme");

    contactDIV.css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"#000000",
        color:"#ffffff",
        height:"50%",
        width:"50%",
        margin:"0px",
        zIndex:"100",
        top:"25%",
        left:"25%",
        position:"fixed",
    });

    $("html, body").animate({
        'scrollTop':$("#timeline").offset().top}, 250);
    contactDIV.click(function(){
        this.remove();
    });
    $(".contactme").remove();
    $(".contact-container").append(contactDIV);

    });
