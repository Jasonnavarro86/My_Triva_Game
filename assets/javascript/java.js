function page(question, answer1, answer2, answer3, answer4) {
    this.question = question;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.answer4 = answer4;
}

var page1 = new page("are you old?", "yes", "no", "blue", "ques");
var page2 = new page("Sally", "Rally", 48, "green");
var page3 = new page("Kim", "green", 48, "june")
var page4 = new page("are you old?", "yes", "no", "blue", "ques");
var page5 = new page("Sally", "Rally", 48, "green");
var page6 = new page("Kim", "green", 48, "june")
console.log("horray", page1);
function check(px) {
    var counter = 0;
  
    $.each(px, function (key, value) {
        counter++;

        if (key === "question") {
            $(".question").append("<h1>" + value + "</h1>")
           
        } else {
            
        $(".answer").append("<h2 id='line" +counter+ "'>"+value+"</h2>")
        }
        if(px === page1){
            $("#line2").insertAfter("#line4");
        }
        if(px === page2){
            $("#line2").insertAfter("#line2");
        }
        if(px === page3){
            $("#line2").insertAfter("#line5");
        }
        if(px === page4){
            $("#line2").insertAfter("#line3");
        }
        if(px === page5){
            $("#line2").insertAfter("#line4");
        }
        if(px === page6){
            $("#line2").insertAfter("#line3");
        }

    })


    $("h2").on("click", function () {



    })

}








check(page3);
// check(page2);
// check(page3);
// check(page4);