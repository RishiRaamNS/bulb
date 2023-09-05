var Bulbstate = 0;
function changeBulbState(){
   switch(Bulbstate) {
  case 0:
   document.getElementById("myimage").src="https://image.ibb.co/hoBxtm/light_bulb_off.png";
   Bulbstate = 0;
    break;
  default:
  document.getElementById("myimage").src="https://image.ibb.co/hoBxtm/light_bulb_off.png";
   Bulbstate = 0;
}

}
   
function changeBulbStateOff(){
   switch(Bulbstate) {
  case 1:
   document.getElementById("myimage").src="https://image.ibb.co/cBBaeR/light_bulb_on.png";
   Bulbstate = 1;
    break;
  default:
  document.getElementById("myimage").src="https://image.ibb.co/cBBaeR/light_bulb_on.png";
   Bulbstate = 1;
}

}