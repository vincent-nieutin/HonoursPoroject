var hiddenParts = [];
var selected;

document.addEventListener('DOMContentLoaded', (event) => {

  document.getElementById("hide_selected").addEventListener("click", (e)=>{
    if(selected){
      document.getElementById(selected).setAttribute('visible','false');
      document.getElementById(selected).className ="";
      hiddenParts.push(selected);
      selected = null;
    }
  })

  document.getElementById("unhide_all").addEventListener("click", (e)=>{
    hiddenParts.forEach((item, i) => {
      document.getElementById(item).setAttribute('material','visible:true');
      document.getElementById(item).setAttribute("material","opacity","1");
      document.getElementById(item).className ="interactible";
    });
    hiddenParts = [];
  })
})
