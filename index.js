let container = document.getElementById("container");



for (let i = 0; i < data.length; i++) {
    let myDiv = document.createElement("div")

    myDiv.innerHTML = `
    <div>
        <img src="${data[i].image}">
        <p>question: ${i + 1}</p>
        <p>${data[i].question}</p>
        <input class="possibleAnswer" type="text" />
        <button onclick="checkAnswer(event,'${data[i].answer}')">Answer the question</button>

        <p class="result"></p>
    </div>
   `

    container.appendChild(myDiv)

}



function checkAnswer(event,answer) {
    console.log("answer",answer);
   let possibleAnswer = event.target.parentElement.querySelector('.possibleAnswer').value
   if (possibleAnswer.toLowerCase() === answer.toLowerCase()) {
    event.target.parentElement.querySelector(".result").innerHTML="nice"
   }else{
    event.target.parentElement.querySelector(".result").innerHTML="wrong"

   }

}







