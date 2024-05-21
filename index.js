let count =1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
},2000)

function nextImage(){
    count++;
    if(count>6){
        count =1;
    }

    document.getElementById("radio"+count).checked = true;
};

function mostrar(){
    let mostarda = document.querySelector('.nav-bar ul');
    
    if(mostarda.classList.contains("abrir")){
        mostarda.classList.remove("abrir");
        document.querySelector('.menu-icon img').src ="menu.PNG"
    }else{
        mostarda.classList.add("abrir");
        document.querySelector('.menu-icon img').src ="close.PNG"
    }
    
   
}






