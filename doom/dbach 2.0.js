var total=document.querySelector("#total")
var quantity=document.querySelectorAll("#quantity")
var minus=document.querySelectorAll(".fa-angle-down")
var plus=document.querySelectorAll(".fa-angle-up")
var heart=document.querySelectorAll(".fa-heart")
var cards=document.querySelectorAll(".card")
console.log(heart);
console.log(plus);

var price=[50]
function totalprice(){
    let result=0
    for (let i = 0; i < price.length; i++) {
        result += price[i]*quantity[i].innerHTML
    }
    return total.innerHTML=result
}
for(let i=0;i<plus.length;i++){
    plus[i].addEventListener("click",function increment(){
        quantity[i].innerHTML++
        return totalprice()
    })
}
for(let i=0;i<minus.length;i++){
    if(quantity[i].innerHTML>=0){
        minus[i].addEventListener("click",function increment(){
            if(quantity[i].innerHTML>0){
        quantity[i].innerHTML--}
        return totalprice()
    })
}
}
for(let i=0;i<heart.length;i++){
    let k=1
    heart[i].addEventListener("click",function favorite(){
        k=k*(-1)
        if (k==(-1)){
            heart[i].style.color="red"
        }
        else{
            heart[i].style.color="black"
        }

        
    })
}
