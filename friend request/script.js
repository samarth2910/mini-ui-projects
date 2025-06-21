var isstatus=document.querySelector("h5")
var btn = document.querySelector("button")
var flag=0;

btn.addEventListener("click",function(){
    if(flag==0){
        isstatus.innerHTML="Friends"
        isstatus.style.color="green"
        btn.innerHTML="Remove Friend"
        btn.style.backgroundColor="gray"
        flag=1
        
    }
    else{
    isstatus.innerHTML="Stranger"
    isstatus.style.color="red"
    btn.innerHTML="Add Friend"
    btn.style.backgroundColor="1877f2"
    flag=0
}})


  