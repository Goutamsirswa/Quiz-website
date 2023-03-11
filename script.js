let questions=[

    {
        'que':"What is the only thing that computers understand?",
       
            'a':"Machine Code",
            'b':"Low Level Languages",
            'c':"High Level Languages",
           'd':" Algorithms",
           'correct':'a'
    },
    {
        'que':"Before a computer can understand a program it must be...",            
       'a': "Translated into its machine code.",
        'b':"Translated into a high level language.",
        'c':"Translated into a low level language.",
        'd':"None" ,
        'correct':'a'
        
    },
    {
        'que':"A list of instructions that enable a computer to perform a specific task is a...",
       
           'a':" Computer Program",
            'b':"Algorithm",
            'c':"Machine Code",
            'd':"Binary Code",
            'correct':'a'
     
    },
    {
        'que':"When writing a computer programmers most program use...",
       
           'a':" A High Level Language",
            'b':"A Low Level Language",
            'c':"A Machine Code",
            'd':"An Algorithm ",
            'correct':'a'
    }
    
];
let index=0;
let total=questions.length;
let right=0,wrong=0;
let que=document.getElementById('que');
let optionInput=document.querySelectorAll(".options");
const LoadQuestion=()=>{
let data=questions[index];
if(total==index)
{
    return endQuiz();
}
reset();
que.innerText=`${index+1}.${data.que}`;
optionInput[0].nextElementSibling.innerText=data.a;
optionInput[1].nextElementSibling.innerText=data.b;
optionInput[2].nextElementSibling.innerText=data.c;
optionInput[3].nextElementSibling.innerText=data.d;

}

const submitQuiz=()=>{
    let data=questions[index];
    const ans= getAnswer();
    if (data.correct==ans) {
        right++;
    }
    else{
        wrong++;
    }
    index++;
    LoadQuestion();
    return;
}
const getAnswer=()=>{
    let ans;
    optionInput.forEach(
        (input)=>{
            if(input.checked){
                ans= input.value;
            }
            
        }
    )
    return ans;
}
const reset=()=>{
    optionInput.forEach(
        (input)=>{
            input.checked=false;
            
        }
    )
}
const endQuiz=()=>{
    
    document.getElementById('box').innerHTML=`<h2>Thank you for playing</h2>
    <h2>${right}/${total} are correct</h2>`
    
}
LoadQuestion()