var kbc = {
    'current_question': 0,
    print_question: function(){
        var q1 = prompt(kbc.question_list[0]+kbc.options);
        var q2 = prompt(kbc.question_list[1]+kbc.options);
        var q3 = prompt(kbc.question_list[2]+kbc.options);
        var q4 = prompt(kbc.question_list[3]+kbc.options);

        if(q1 == kbc.correct_answer[0]){
            console.log("Correct answer");
        }
        else{
            console.log("incorrect");
            
        } 
        if(q2 == kbc.correct_answer[1]){
            console.log("Correct answer");
        }
        else{
            console.log("incorrect");
        }
        if(q3 == kbc.correct_answer[2]){
            console.log("Correct answer");
        }
        else{
            console.log("incorrect");
        }
        if(q4 == kbc.correct_answer[3]){
            console.log("Correct answer");
        }
        else{
            console.log("incorrect");
        }
        
    },
    'question_list': ["National Fruit? :","In a week how many days? :", "Prime minster of India? ;","Where are we Studying? :"],
    'correct_answer':["Mango","7","Narendra Modi","Geekstar"],
    'options':["Mango","7","Narendra Modi","Geekstar"],
};
var question = kbc.qustion_list;
console.log(question);
var question2 = kbc.print_question();
console.log(question2);