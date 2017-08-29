var questions = [ 
    {
        question: "Who Played Spiderman in Spiderman Home Coming?",
        Ans1: {q1:"Andrew Garfield?",q2:"Toby Maguire?", q4:"Drake Bell",q3:"Tom Holland?"},
        gif: "https://68.media.tumblr.com/d59d4e1b5a47de66333625a3fbfa789e/tumblr_oe1fy9kK3N1vyac05o1_500.gif",
    },    
    {
        question: "Which hero is from the planet Asgard?",
        Ans1: {q3:"Thor?", q1:"Black Panther?", q2:"Hulk?", q4:"Antman?"},
        gif: "https://media.giphy.com/media/Ch1zCx8tu6DQY/giphy.gif"
    },
    {
        question: "Who's is in charge of the Avengers?",
        Ans1: {q1:"Captain America?", q2:"Iron Man?", q4:"Barry Allen?",q3:"Nick Fury"},
        gif: "https://media.giphy.com/media/3GKWesp8SVVGo/giphy.gif"
    },
    {
        question: "What is Captain America's real name?",
        Ans1: {q3:"Steve Rodgers?", q1:"Tony Stark?", q2:"Stephen Myers?", q4:"Peter Parker?"},
        gif: "https://media.giphy.com/media/1lk1IcVgqPLkA/giphy.gif"
    },
    {
        question: "Who is the founder of Marvel?",
        Ans1: {q1:"Walt Disney?", q3:"Stan Lee?", q2:"Mark Hamill?", q4:"Hana Barbera?"},
        gif: "https://orig03.deviantart.net/e0e5/f/2013/189/8/b/the_amazing_stan_lee_gif_animated__by_thejigsawrlm-d6cj9l0.gif"
    },
    {
        question: "What is The Flash's real name?",
        Ans1: {q1:"Mark Hamill?", q2:"Norrin Rad?", q3:"Berry Allen?", q4:"Ben Walker?"},
        gif: "http://data.whicdn.com/images/53818085/original.gif"
    }
];
    var pageNum = 0;
    
    function createPage(){

        var storeQs = Object.keys(questions[pageNum].Ans1)
        var divQ1 = storeQs[0];
        var divQ2 = storeQs[1];
        var divQ3 = storeQs[2];
        var divQ4 = storeQs[3];

        $("<div>").addClass("container question").html(questions[pageNum].question).appendTo("body")
        $("<div>").addClass("container answer").html(questions[pageNum].Ans1[divQ1]).appendTo("body")   
        $("<div>").addClass("container answer").html(questions[pageNum].Ans1[divQ2]).appendTo("body") 
        $("<div>").addClass("container answer").html(questions[pageNum].Ans1[divQ3]).appendTo("body") 
        $("<div>").addClass("container answer").html(questions[pageNum].Ans1[divQ4]).appendTo("body")       
    }

    createPage();
 

