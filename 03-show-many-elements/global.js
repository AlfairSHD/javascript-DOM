window.addEventListener("load", function(){
    const i = document.querySelector('#button');
    i.addEventListener('click',(e)=>{
        let p = 0;
        while (p<2){
            document.getElementsByClassName('hide_me')[p].style.display="block";
            p++;
        }
       
    })
});