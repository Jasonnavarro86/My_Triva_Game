var triva = {
    questions: {
        q1: {
            question: "Who Played Spiderman in Spiderman Home Coming?",
            wrongAns: ["Andrew Garfield?", "Toby Maguire?", "Drake Bell?"],
            rightAns: "Tom Holland?",
            gif: "<img src='https://68.media.tumblr.com/d59d4e1b5a47de66333625a3fbfa789e/tumblr_oe1fy9kK3N1vyac05o1_500.gif'>",
        },
        q2: {
            question: "Which hero is from the planet Asgard?",
            wrongAns: ["Black Panther?", "Hulk?", "Antman?"],
            rightAns: "Thor",
            gif: "https://media.giphy.com/media/Ch1zCx8tu6DQY/giphy.gif"
        },
        q3: {
            question: "Who's is in charge of the Avengers?",
            wrongAns: ["Captain America?", "Iron Man?", "Barry Allen?"],
            rightAns: "Nick Fury",
            gif: "https://media.giphy.com/media/3GKWesp8SVVGo/giphy.gif"
        },
        q4: {
            question: "What is Captain America's real name?",
            wrongAns: ["Tony Stark?", "Stephen Myers?", "Peter Parker?"],
            rightAns: "Steve Rodgers",
            gif: "https://media.giphy.com/media/1lk1IcVgqPLkA/giphy.gif"
        },
        q5: {
            question: "Who is the founder of Marvel?",
            wrongAns: ["Walt Disney?", "Hana Barbera?", "Mark Hamill?"],
            rightAns: "Stan Lee",
            gif: "https://orig03.deviantart.net/e0e5/f/2013/189/8/b/the_amazing_stan_lee_gif_animated__by_thejigsawrlm-d6cj9l0.gif"
        },
        q6: {
            question: "What is The Flash's real name?",
            wrongAns: ["Ben Walker?", "Mark Hamill?", "Norrin Rad?"],
            rightAns: "Berry Allen",
            gif: "http://data.whicdn.com/images/53818085/original.gif"
        }

    },

    theQuestion: "question",
    theWrong: "wrongAns",
    theRight: "rightAns",
    theGif: "gif",
    theGifShown: "",
    

    startIt: function (qq) {


        this.theGifShown = qq[this.theGif]
        this.answerArray = qq[this.theWrong];

        $("<div>").addClass("container theQuestion buttons").html(qq[this.theQuestion])
            .appendTo('body');

        for (var i = 0; i < 3; i++) {

            $("<div>").addClass("answer qq1 container")
                .html(this.answerArray[i])
                .appendTo('body');
        }

        $("<div>").addClass("container answer4 qq buttons")
            .html(qq[this.theRight] + "?")
            .appendTo("body");

        this.getAnswers(qq);

    },
    getAnswers: function (qq) {

        $(".qq").on("click", function () {

            $("#giveAnswer").animate({
                left: '250px',
                height: '750px',
            }, "slow");
            var newBut = $("<div>").addClass("resetBox");
            $(newBut).html("The Answer is" + qq[this.theRight] + "!");
            $("#giveAnswer").append(newBut);
            $("<div>").html(this.theGifShown);
        })
    },

}

triva.startIt(triva.questions.q1);