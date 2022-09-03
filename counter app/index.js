
let countEl = document.getElementById("count-el")//pass in argument
let resultEl= document.getElementById("result")

let count = 0

function increment(){
  
  count+=1
  countEl.textContent=count//text Content instead of innertext...
}

function save(){
  
  countStr= count+' - '
  resultEl.textContent +=  countStr
  count=0
  countEl.textContent=count

}




