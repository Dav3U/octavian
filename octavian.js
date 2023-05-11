const html = document.getElementById('html')

document.getElementById('modeIcon').addEventListener('click',()=>{
  modeChange();  
})

 const colorMode = window.matchMedia("(prefers-color-scheme: dark)").matches ?
"dark" :
"light";

// Set theme to the user's preferred color scheme
function updateTheme() {
const colorMode = window.matchMedia("(prefers-color-scheme: dark)").matches ?
  "dark" :
  "light";

  if (colorMode=='light'){
    document.getElementById('modeIcon').classList.remove('bi-brightness-high-fill')
    document.getElementById('modeIcon').classList.add('bi-moon-stars-fill')
  }
  else{
    document.getElementById('modeIcon').classList.add('bi-brightness-high-fill')
    document.getElementById('modeIcon').classList.remove('bi-moon-stars-fill')
  }
  
document.querySelector("html").setAttribute("data-bs-theme", colorMode);

return;
}

// Set theme on load
updateTheme()

// Update theme when the preferred scheme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme)


function modeChange(){
  if (colorMode=='light'){
    document.getElementById('modeIcon').classList.toggle('bi-brightness-high-fill');
    document.getElementById('modeIcon').classList.toggle('bi-moon-stars-fill');
  }
  else{
    document.getElementById('modeIcon').classList.toggle('bi-brightness-high-fill');
    document.getElementById('modeIcon').classList.toggle('bi-moon-stars-fill');
  }

  html.getAttribute('data-bs-theme')=='dark'? 
  html.setAttribute('data-bs-theme','light') : 
  html.setAttribute('data-bs-theme', 'dark')
 

}



  function changeOrder(x) {
    if (x.matches) {

        document.getElementById("thirdWriteup").classList.add('order-first')

        // document.getElementById("secondRowImg").classList.add('order-first')

    } else {
        document.getElementById("thirdWriteup").classList.remove('order-first')

        // document.getElementById("secondRowImg").classList.remove('order-first')

    }
  }
  
  var x = window.matchMedia("(max-width: 992px)")
  changeOrder(x) // Call listener function at run time
  x.addListener(changeOrder) // Attach listener function on state changes