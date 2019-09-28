// https://quizlet.com/211687200/mason-gre-2000-flash-cards/

let more = document.querySelector("#SetPageTarget > div > div.SetPage-setDetails > div.SetPage-setDetailsTermsWrapper > div > div > section > div > div.SetPageTerms-seeMore > button > span")
while(more){
  more.click()
  more = document.querySelector("#SetPageTarget > div > div.SetPage-setDetails > div.SetPage-setDetailsTermsWrapper > div > div > section > div > div.SetPageTerms-seeMore > button > span")
}

//

let words = []
let chi = []
for(let i = 1 ; i<=2005;i++){
  try {
    words.push(document.querySelector(`#SetPageTarget > div > div.SetPage-setDetails > div.SetPage-setDetailsTermsWrapper > div > div > section > div > section > div:nth-child(${i}) > div > div > div.SetPageTerm-contentWrapper > div > div.SetPageTerm-side.SetPageTerm-smallSide > div`).textContent)
  } catch(e) {
    console.log(i)
  }
}

for(let i = 1 ; i<=2005;i++){
  try {
    chi.push(document.querySelector(`#SetPageTarget > div > div.SetPage-setDetails > div.SetPage-setDetailsTermsWrapper > div > div > section > div > section > div:nth-child(${i}) > div > div > div.SetPageTerm-contentWrapper > div > div.SetPageTerm-side.SetPageTerm-largeSide > div > a > span`).textContent)
  } catch(e) {
    console.log(i)
  }
}

let m = {}
words.forEach((w, i)=>{ m[w] = chi[i] })

JSON.stringify(m)
console.log(m)
