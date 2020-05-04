document.addEventListener('dragstart', e => e.preventDefault())
document.addEventListener('contextmenu', e => e.preventDefault())
document.addEventListener('selectstart', e => e.preventDefault())
//document.addEventListener('keydown',e=>{if((e.keyCode===123)||(e.ctrlKey&&e.shiftKey&&e.keyCode===73))e.preventDefault()})