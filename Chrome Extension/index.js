//my idea, save the words and translate it

let myleads=[];
let oldleads=[];


const inputEl=document.getElementById("input-el");
const inputBtn=document.getElementById("input-btn");
const delBtn=document.getElementById("del-btn");
//const cant be re assign

let ulEl=document.getElementById("ul-el");
const tapBtn =document.getElementById("saveTap-btn");

//localStorage.clear()
//get the lead form the localstorage 
let leadsFromLocalStroage =JSON.parse(localStorage.getItem("myleads"))

if(leadsFromLocalStroage){
  myleads=leadsFromLocalStroage;
  renderLeads(myleads);

}

tapBtn.addEventListener("click", function(){
  
  chrome.tabs.query(
    {active: true, currentWindow: true}, function(tabs){
    


    myleads.push(tabs[0].url)
    localStorage.setItem("myleads", JSON.stringify(myleads))
     renderLeads(myleads)




  })

  
  

})

function renderLeads(leads){
  let listItems="" 
  for(let i=0; i<leads.length;i++){
  /*
  let break code above to 3 parts: 
  1. create element 
  2. set tedt content
  3. append to ul
  */
  
  //method 1
 // ulEl.innerHTML+= "<li>"+ leads[i]+"</li>" ; 

 //method2
  /*
  const li=document.createElement("li");
  li.textContent=leads[i];
  ulEl.append(li);
  */
  //listItems+= "<li> <a target='_blank' href='"+leads[i]+"'> "+leads[i]+ " </a></li>"
  
  //template string/literals
  listItems+=` 
  <li>
   <a target='_blank' href='${leads[i]}'>
    ${leads[i]} 
    </a>
   </li>
   `


  //listItems+= "<li>"+ myleads[i]+"</li>" ; 
   
  }
  //dom has a cost, so limit the repeat from loop
  ulEl.innerHTML=listItems
}




delBtn.addEventListener("dblclick", function(){
  localStorage.clear()
  myleads=[];
  renderLeads(myleads)
  
})
inputBtn.addEventListener("click", function(){
  //console.log("button clicked from adEventListener")
  //let x=inputEl.value
  myleads.push(inputEl.value)

  //console.log(myleads)
  inputEl.value=" ";//empty the input box

  //save the myLeads array to localStorge
  localStorage.setItem("myleads", JSON.stringify(myleads))
  renderLeads(myleads);
  console.log(localStorage.getItem("myleads"))







  
})








