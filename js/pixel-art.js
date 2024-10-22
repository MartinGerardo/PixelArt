var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet',  'Fuchsia', 'Magenta','Orchid', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid','DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];
var colorActual;
var paleta = document.getElementById("paleta");
var grillaDePixeles = document.getElementById("grilla-pixeles");
var indicadorDeColor = document.getElementById("indicador-de-color");
var pixeles= document.getElementsByClassName("pixeles");
var borrar=document.getElementById('borrar');
var batmanId=document.getElementById('batman');
//_______________________________________________________________________________________________
//funcion que crea la paleta de colores
function listaColores() {
  for (var i = 0; i < nombreColores.length; i++) {
    var colordiv = document.createElement('div');
    colordiv.className = ("color-paleta");
    colordiv.style.backgroundColor = (nombreColores[i]);
    paleta.appendChild(colordiv);
  }
}
//_______________________________________________________________________________________________
//funcion que crea la Grilla
function grillaPixeles() {
  for (var i = 0; i < 1750; i++) {
    var  identidad=[i];
    var div = document.createElement('div');
    div.className = ("pixeles");
    div.id=(identidad);
    grillaDePixeles.appendChild(div);
  }
}
grillaPixeles();
listaColores();
//_______________________________________________________________________________________________
//FUNCION DEL INDICADOR DE COLOR  
paleta.addEventListener('click', indicoColor);
function indicoColor(e) {
  colorActual = e.target.style.backgroundColor;
  var colorSel= indicadorDeColor.style.backgroundColor = colorActual;
 }
//________________________________________________________________________________________________
//Eventos para pintar sobre la grilla 
$("div.pixeles").mousedown(function(){
  $(this).css({"backgroundColor":colorActual});
  $("div.pixeles").mousemove(function(){
    $(this).css({"backgroundColor":colorActual});
  });
});

$("div.pixeles").mouseup(function(){
  $("div.pixeles").unbind('mousemove');
});
//_______________________________________________________________________________________________
//funcion que Borra
$("#borrar").click(function(){
  if(+ confirm("Seguro/a/e/x que deseas borrar tu Obra?")){
    $("div.pixeles").animate({"backgroundColor":'none'}, 2000);
 } else {
  alert('Uff! \nQue Alivio! \nMe Gusta Tu Obra!')
 }
});
//______________________________________________________________________________________________
// Carga el Super Elegido
$("#batman").click(function(){
 var superheroe= batman;
 cargarSuperheroe(superheroe); 
});
$("#wonder").click(function(){
  var superheroe= wonder;
  cargarSuperheroe(superheroe);
 });
 $("#flash").click(function(){
  var superheroe= flash;
  cargarSuperheroe(superheroe);
 });
 $("#invisible").click(function(){
  var superheroe= invisible;
  cargarSuperheroe(superheroe);
 });
//______________________________________________________________________________________________
//guarda la Obra
$("#guardar").click(function(){
  guardarPixelArt();
});
//_____________________________________________________________________________________________
// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
colorPersonalizado.addEventListener('change',
  (function () {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
   colorPersonalizado.addEventListener('click', indicoColorRueda);
    function indicoColorRueda(e) {
      colorActual = e.target.style.backgroundColor;
      indicadorDeColor.style.backgroundColor = colorActual;
     }
  })
);
