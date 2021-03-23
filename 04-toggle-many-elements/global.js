window.addEventListener('load', function()
{
    const button = document.querySelector('#button');
    var isHidden = true;

    button.addEventListener('click', (e) => 
    {
        if(isHidden)
        {
            let i = 0;
            while(i < 2)
            {
                document.getElementsByClassName('toggle_me')[i].style.display = "block";
                i++;
            }
            isHidden = false;
        }
        else
        {
            let p = 0;
            while(p < 2)
            {
                document.getElementsByClassName('toggle_me')[p].style.display = "none";
                p++;
            }
            isHidden = true;
        }
    });
});