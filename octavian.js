

const links =document.querySelectorAll("a")


document.getElementById("toggle").onclick = changeBack;
const mode = document.getElementById("toggle")


function changeBack()
{
    document.getElementById("bodyy").classList.toggle('change');
    document.body.classList.toggle('color');

    
    if (mode.innerHTML =="Toggle Dark Mode")
    {
    mode.innerHTML="Toggle Light Mode"

    }


    else if (mode.innerHTML =="Toggle Light Mode")
    {
    mode.innerHTML="Toggle Dark Mode"

    }

    for (var i=0;i<=links.length;i++)
    {
        links[i].classList.toggle('color');
     }

}

document.getElementById('modeIcon').addEventListener('click',()=>{
    modeChange();  
  })
 
   const colorMode = window.matchMedia("(prefers-color-scheme: dark)").matches ?
  "dark" :
  "light";