// // Using the same function with multiple objects

// var movie1;
// var movie2;
// var movie3;
// var movie;
// var showMovieInfo;

// movie1 = {
//     title: "Inside Out",
//     actors: "Amy Poehler, Bill Hader",
//     directors: "Pete Doctor, Ronaldo Del Carmen"
// };

// movie2 = {
//     title: "Spectre",
//     actors: "Daniel Craig, Christoph Waltz",
//     directors: "Sam Mendes"
// };

// movie3 = {
//     title: "Star Wars: Episode VII - The Force Awakens",
//     actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
//     directors: "J.J.Abrams"
// };

// showMovieInfo = function () {
//     console.log("Movie information for " + movie.title);
//     console.log("------------------------------");
//     console.log("Actors: " + movie.actors);
//     console.log("Directors: " + movie.directors);
//     console.log("------------------------------");
// };

// movie = movie1;
// showMovieInfo();

// movie = movie2;
// showMovieInfo();

// movie = movie3;
// showMovieInfo();



/* Further Adventures
 *
 * 1) Create an object to represent
 *    a multiple choice quiz question.
 *
 * 2) Create two more quiz question objects.
 *
 * 3) Create a function to show
 *    the question and answer options.
 *
 * 4) Use the same variable assignment technique
 *    as above to display all three questions
 *    on the console.
 *
 */


var quiz1;
var quiz2;
var quiz3;
var quiz;
var showQuizinfo;

 quiz1 = {
   question : "abc_e",
   choice1 : "e" ,
   choice2 : "d" ,
   choice3 : "f",
   answer : "d"
};

quiz2 = {
    question : "1234_7",
   choice1 :"8 9",
   choice2: "5 6" ,
   choice3 : "8 9",
   answer :"5 6"
 };

 quiz3 = {
     question : " most powerful god in the world?",
     choice1 : "lord shiva" ,
   choice2 : "lord sachin" ,
   choice3 : "lord saibaba",
   answer : "lord sachin"
 };
 showQuizinfo = function () {
    console.log("Question: "+quiz.question);
	console.log("Please choose name an option:");
	console.log(quiz.choice1);
    console.log("------------------------------");
	console.log(quiz.choice2);  
    console.log("------------------------------");
	console.log(quiz.choice3);
    console.log("The answer is: " + quiz.answer);
    console.log("------------------------------");
};

quiz = quiz1;
showQuizinfo();

quiz = quiz2;
showQuizinfo();

quiz = quiz3;
showQuizinfo();