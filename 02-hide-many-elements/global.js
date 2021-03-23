window.addEventListener("load", function(){
    const b = document.querySelector('#button');
    b.addEventListener('click',(e)=>{
        let m = 0;
        while (m<2){
            document.getElementsByClassName('hide_me')[m].style.display="none";
            m++;
        }
       
    })
});
