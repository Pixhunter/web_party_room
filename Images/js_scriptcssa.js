  document.ondragstart = noselect;
  document.onselectstart = noselect;
  document.oncontextmenu = noselect;
  function noselect() {return false;}
  
  