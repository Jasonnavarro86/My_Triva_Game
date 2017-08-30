// START: My triva info inside of an object that is inside an array. 
var questions = [{
        question: "Who Played Spiderman in Spiderman-Home-Coming?",
        Ans1: {
            q1: "Andrew Garfield",
            q2: "Toby Maguire",
            q4: "Drake Bell",
            q3: "Tom Holland",
        },
        gif: "<img src='https://static.tumblr.com/cb658e41b278cf7c509dd817120230e5/6i1maex/sCrotlima/tumblr_static_tumblr_static_filename_640.gif'/>",
        gif2: "<img src='https://68.media.tumblr.com/bf6e2da24704119891b88522a7a96ed0/tumblr_inline_ou9zoxE4uy1t9q8c4_540.gif'/>"
    },
    {
        question: "Which hero is from the planet Asgard?",
        Ans1: {
            q3: "Thor",
            q1: "Black Panther",
            q2: "Hulk",
            q4: "Antman"
        },
        gif: "<img src='https://media.giphy.com/media/Ch1zCx8tu6DQY/giphy.gif'/>",
        gif2: "<img src='http://www.lovethisgif.com/uploaded_images/63193-Guardians-Of-The-Galaxy-Rocket-Gif-Reaction-Gif.gif'/>"
    },
    {
        question: "Who's is in charge of the Avengers?",
        Ans1: {
            q1: "Captain America",
            q2: "Iron Man",
            q4: "Barry Allen",
            q3: "Nick Fury"
        },
        gif: "<img src='https://media.giphy.com/media/3GKWesp8SVVGo/giphy.gif'/>",
        gif2: "<img src='http://68.media.tumblr.com/tumblr_mbfx76wyxn1r0c27po1_250.gif'/>"
    },

    {
        question: "What is Captain America's real name?",
        Ans1: {
            q3: "Steve Rodgers",
            q1: "Tony Stark",
            q2: "Stephen Myers",
            q4: "Peter Parker"
        },
        gif: "<img src='https://media1.popsugar-assets.com/files/thumbor/4E_ni6DV9ne4oFG97W_cP_ta8pI/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/04/21/871/n/1922283/4d253a24efb7305a_3673790-2595346539-capta/i/He-Knows.gif'/>",
        gif2: "<img src='https://media.giphy.com/media/o80k0RHRR4qQM/giphy.gif'/>"
    },
    {
        question: "Who is the founder of Marvel?",
        Ans1: {
            q1: "Walt Disney",
            q3: "Stan Lee",
            q2: "Mark Hamill",
            q4: "Hana Barbera"
        },
        gif: "<img src='https://orig03.deviantart.net/e0e5/f/2013/189/8/b/the_amazing_stan_lee_gif_animated__by_thejigsawrlm-d6cj9l0.gif'/>",
        gif2: "<img src='https://typeset-beta.imgix.net/2017/4/20/cbe35063-53d4-4939-b337-6a54852c4b4a.gif'/>"
    },
    {
        question: "What is The Flash's real name?",
        Ans1: {
            q1: "Mark Hamill",
            q2: "Norrin Rad",
            q3: "Barry Allen",
            q4: "Ben Walker"
        },
        gif: "<img src='http://data.whicdn.com/images/53818085/original.gif'/>",
        gif2: "<img src='http://www.lovethisgif.com/uploaded_images/63193-Guardians-Of-The-Galaxy-Rocket-Gif-Reaction-Gif.gif'/>"
    },
];
// START: My global variables that change the score, the timer resets, and the object array #. pageNum var is the most important to keep changing the obj array questions and anwers.
var wrongAns = 0;
var rightAns = 0;
var pageNum = 0;
var timer;
var timer1;
// START: This function () Creates all my html with jQuery holding the object info. 
function createPage() {
    // These vars take my Ans1 object properties and stores them in an array (var storeQs) that allows me to access the answers.
    $(".start").hide()
    var storeQs = Object.keys(questions[pageNum].Ans1)
    var divQ1 = storeQs[0];
    var divQ2 = storeQs[1];
    var divQ3 = storeQs[2];
    var divQ4 = storeQs[3];
    // My html with obj info.
    $("<div>").addClass("container question btn").html(questions[pageNum].question).appendTo("body")
    $("<div>").addClass("container answer btn ").html(questions[pageNum].Ans1[divQ1] + "?").appendTo("body")
    $("<div>").addClass("container answer btn ").html(questions[pageNum].Ans1[divQ2] + "?").appendTo("body")
    $("<div>").addClass("container answer btn").html(questions[pageNum].Ans1[divQ3] + "?").appendTo("body")
    $("<div>").addClass("container answer btn").html(questions[pageNum].Ans1[divQ4] + "?").appendTo("body")
}
// START: This function() is for when a player clicks an answer the next functions are called. 
function getAnswer() {
    $(".answer").on("click", function () {
        if ($(this).html() === questions[pageNum].Ans1.q3 + "?") {
            animateRight();
            pageNum++;
            rightAns++;
        } else {
            animateWrong();
            pageNum++;
            wrongAns++;
        }
    })
}
// START: If the player clicks the correct answer this function() clears timers and hides divs created before and creates new ones with "great job!" info, and calls timer. 
function animateRight() {
    clearTimeout(timer);
    clearTimeout(timer1);
    $(".question").hide()
    $(".answer").hide()
    $("<div>").addClass("animateBox answer1 container").html("Great job! " + questions[pageNum].Ans1.q3 + " is the right answer!").appendTo("body")
    $("<div>").addClass("gifBox text-center container").html(questions[pageNum].gif).appendTo("body")
    goodTimer(4, "#timer");
}
// START: If the player clicks the wrong answer this function() brings the "Ouch!" info , and calls timer.
function animateWrong() {
    clearTimeout(timer);
    clearTimeout(timer1);
    $(".question").hide()
    $(".answer").hide()
    $("<div>").addClass("animateBox answer1 container").html("Ouch! " + questions[pageNum].Ans1.q3 + " was the right answer.").appendTo("body")
    $("<div>").addClass("gifBox text-ceter container").html(questions[pageNum].gif2).appendTo("body")
    goodTimer(4, "#timer");
}
// START: This function () resets the new page after the two animate right/wrong functions() appear and calls the main page timer.
function animationReset() {
    $(".animateBox").hide()
    $(".question").hide()
    $(".answer").hide()
    $(".gifBox").hide()
    createPage();
    getAnswer();
    timedOut(20, "#timer");
}
// Main page timer for creatPage() takes away score if runs down. 
function timedOut(secs, targ) {
    var target1 = $(targ);
    target1.html("Time Left " + secs)
    if (secs < 1) {
        clearTimeout(timer);
        clearTimeout(timer1);
        animateWrong();
        wrongAns++;
        pageNum++;
    } else {
        secs--;
        timer1 = setTimeout('timedOut(' + secs + ',"' + targ + '")', 1000);
    }
}
//START: This timer is ran for all resets that don't have to do with running down the 20 sec clock.
function goodTimer(secs1, targ1) {
    var target2 = $(targ1);
    target2.html("Time Left " + secs1)
    if (secs1 < 1) {
        clearTimeout(timer);
        clearTimeout(timer1);
        scoreDisplay();
        animationReset();
        fixScoreDisplay();
    } else {
        secs1--;
        timer = setTimeout('goodTimer(' + secs1 + ',"' + targ1 + '")', 1000);
    }
}
// START: Here I display the # of right and wrong answers the player chose. 
function scoreDisplay() {
    if (pageNum == 6) {
        clearTimeout(timer);
        clearTimeout(timer1);
        $(".question").hide()
        $(".answer").hide()
        $("<div>").addClass("container answer1").html("Thanks For Playing").appendTo("body")
        $("<div>").addClass("container answer1").html("Correct Answers = " + rightAns).appendTo("body")
        $("<div>").addClass("container answer1").html("Wrong Answers = " + wrongAns).appendTo("body")
        goodTimer(5, "#timer");
        $("#timer").hide()
        pageNum = 0;
    }
}
// START: This timer is only for when the page is first loaded. 
function startTimer() {
    timedOut(20, "#timer");
}

// START: 
function fixScoreDisplay() {
    if (pageNum == 0) {
        $(".question").hide()
        $(".answer").hide()
    }
}

function startButton() {
    $("<button>").addClass("start btn btn lg btn-danger").html("AVENGERS TRIVA GAME! <br> " + " click to start.").appendTo("body")
    $(".start").on("click", function () {
        createPage();
        getAnswer();
        startTimer();
    })
}
startButton();