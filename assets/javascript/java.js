// My triva info inside of an object that is inside an array. 
var questions = [{
        question: "Who Played Spiderman in Spiderman Home Coming?",
        Ans1: {
            q1: "Andrew Garfield",
            q2: "Toby Maguire",
            q4: "Drake Bell",
            q3: "Tom Holland",
        },
        gif: "<img src='https://68.media.tumblr.com/d59d4e1b5a47de66333625a3fbfa789e/tumblr_oe1fy9kK3N1vyac05o1_500.gif'/>",
    },
    {
        question: "Which hero is from the planet Asgard?",
        Ans1: {
            q3: "Thor",
            q1: "Black Panther",
            q2: "Hulk",
            q4: "Antman"
        },
        gif: "<img src='https://media.giphy.com/media/Ch1zCx8tu6DQY/giphy.gif'/>"
    },
    {
        question: "Who's is in charge of the Avengers?",
        Ans1: {
            q1: "Captain America",
            q2: "Iron Man",
            q4: "Barry Allen",
            q3: "Nick Fury"
        },
        gif: "<img src='https://media.giphy.com/media/3GKWesp8SVVGo/giphy.gif'/>"
    },
    {
        question: "What is Captain America's real name?",
        Ans1: {
            q3: "Steve Rodgers",
            q1: "Tony Stark",
            q2: "Stephen Myers",
            q4: "Peter Parker"
        },
        gif: "<img src='https://media.giphy.com/media/1lk1IcVgqPLkA/giphy.gif'/>"
    },
    {
        question: "Who is the founder of Marvel?",
        Ans1: {
            q1: "Walt Disney",
            q3: "Stan Lee",
            q2: "Mark Hamill",
            q4: "Hana Barbera"
        },
        gif: "<img src='https://orig03.deviantart.net/e0e5/f/2013/189/8/b/the_amazing_stan_lee_gif_animated__by_thejigsawrlm-d6cj9l0.gif'/>"
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

var wrongAns = 0;
var rightAns = 0;
var pageNum = 0;
var timer;
var timer1;

function createPage() {

    var storeQs = Object.keys(questions[pageNum].Ans1)
    var divQ1 = storeQs[0];
    var divQ2 = storeQs[1];
    var divQ3 = storeQs[2];
    var divQ4 = storeQs[3];

    $("<div>").addClass("container question btn").html(questions[pageNum].question).appendTo("body")
    $("<div>").addClass("container answer btn ").html(questions[pageNum].Ans1[divQ1] + "?").appendTo("body")
    $("<div>").addClass("container answer btn ").html(questions[pageNum].Ans1[divQ2] + "?").appendTo("body")
    $("<div>").addClass("container answer btn").html(questions[pageNum].Ans1[divQ3] + "?").appendTo("body")
    $("<div>").addClass("container answer btn").html(questions[pageNum].Ans1[divQ4] + "?").appendTo("body")
    
}
createPage();

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
getAnswer();

function animateRight() {
    clearTimeout(timer);
    clearTimeout(timer1);
    $(".question").hide()
    $(".answer").hide()
    $("<div>").addClass("animateBox container").html("Great job! " + questions[pageNum].Ans1.q3 + " is the right answer!").appendTo("body")
    $("<div>").addClass("gifBox container").html(questions[pageNum].gif).appendTo("body")
    goodTimer(5, "#timer");
}

function animateWrong() {
    clearTimeout(timer);
    clearTimeout(timer1);
    $(".question").hide()
    $(".answer").hide()
    $("<div>").addClass("animateBox container").html("Ouch! " + questions[pageNum].Ans1.q3 + " was the right answer.").appendTo("body")
    $("<div>").addClass("gifBox container").html(questions[5].gif2).appendTo("body")
    goodTimer(5, "#timer");
}

function animationReset() {
    
    $(".animateBox").hide()
    $(".question").hide()
    $(".answer").hide()
    $(".gifBox").hide()
    createPage();
    getAnswer();
    timedOut(20, "#timer");
}
// 30 second timed out timer
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
// this timer is ran for all resets that don't have to do with running down the 20 sec clock.
function goodTimer(secs1, targ1) {
    var target2 = $(targ1);
    target2.html("Time Left " + secs1)
    if (secs1 < 1) {
        clearTimeout(timer);
        clearTimeout(timer1);
        animationReset();
        scoreDisplay();
        
       
    } else {
        secs1--;
        timer = setTimeout('goodTimer(' + secs1 + ',"' + targ1 + '")', 1000);
    }
}

function scoreDisplay() {
    if (pageNum == 6) {
        $(".question").hide()
        $(".answer").hide()
        $("<div>").addClass("container right").html("Thanks For Playing").appendTo("body")
        $("<div>").addClass("container right").html("Correct Answers = " + rightAns).appendTo("body")
        $("<div>").addClass("container right").html("Wrong Answers = " + wrongAns).appendTo("body")
        goodTimer(5, "#timer");
        $("#timer").hide()
        pageNum = 0;
    }
}
function startTimer() {
    timedOut(20, "#timer");
}
startTimer();