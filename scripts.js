var hiddenParts = [];
var selected;

document.addEventListener('DOMContentLoaded', (event) => {

  document.getElementById("hide_selected").addEventListener("click", (e)=>{
    if(selected){
      var element = document.getElementById(selected);
      element.setAttribute('visible','false');
      element.setAttribute("opacity","1");
      element.className ="";
      hiddenParts.push(selected);
      selected = null;
    }
  })

  document.getElementById("unhide_all").addEventListener("click", (e)=>{
    hiddenParts.forEach((item, i) => {
      var element = document.getElementById(item);
      element.setAttribute('visible','true');
      element.className ="interactible";
    });
    hiddenParts = [];
  })
})
