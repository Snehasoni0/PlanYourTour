let faqItems = document.querySelectorAll(".faq-item")
let faqQuestions = document.querySelectorAll(".question")
let faqAnswers = document.querySelectorAll(".answer")
let icons = document.querySelectorAll(".show")


faqQuestions.forEach((queItem,queIndex)=>{
  queItem.addEventListener("click",()=>{
    faqAnswers.forEach((ansItem,ansIndex)=>{
      if(ansIndex != queIndex){
        ansItem.classList.remove("show-answer")
      }
      else{
        ansItem.classList.toggle("show-answer")
      }
    });
    
    icons.forEach((iconItem, iconIndex) => {
      if (iconIndex == queIndex) {
        iconItem.textContent = iconItem.textContent == "+" ? "-" : "+";
      } else {
        iconItem.textContent = "+";
      }
    })

  })
})