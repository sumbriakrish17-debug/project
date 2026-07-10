
let saveel = document.getElementById("welcome")
let countEl = document.getElementById("count")
console.log(countEl)
let ct =0
function increment() {
    ct=ct+1
countEl.innerText = ct
}
 
function decrement () {
ct=ct-1
countEl.innerText = ct
}
function save(){
    let countstr = ct + "-"
    saveel.innerText += countstr
    countEl.innerText =0
    ct=0
}
