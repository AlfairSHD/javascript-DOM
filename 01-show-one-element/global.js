window.addEventListener("load", function(){

  const a = document.querySelector('#more_text_link');
  a.addEventListener('click',(e)=> {
    document.getElementById('more_text_content').style.display="block";
  });
  
});