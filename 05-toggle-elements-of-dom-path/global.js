window.addEventListener('load', function()
{
    const button = document.querySelector('#toggle_button');
    var isHidden = true;

    button.addEventListener('click', (e) => 
    {
        console.log();
        if(isHidden)
        {
            let i = 0;
            while(i < 5)
            {
                document.getElementsByClassName('second_five')[0].children[i].style.display = "block"
                i++;
            }
            isHidden = !isHidden;
        }
        else
        {
            let i = 0;
            while(i < 5)
            {
                document.getElementsByClassName('second_five')[0].children[i].style.display = "none"
                i++;
            }
            isHidden = !isHidden;
        }
    });
});