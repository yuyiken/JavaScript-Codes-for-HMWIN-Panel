project.sysVar = project.getWidget( "_SysPropMgr" );
project.wgtVar = project.getWidget( "_VariablesWgt" );
project.pageVar = project.getWidget( "_PageMgr" );
var plantilla = project.pageVar.getWidget("Plantilla");
project.screenXLen = plantilla.getProperty("width");
project.screenYLen = plantilla.getProperty("height");
var dlgObj, bMove, scrnX, scrnY, tmpX, tmpY, x, y
var recuadroEnX = 43;
var recuadroEnY = 43;

//Funcion que permite mover los dialogos con la barra de titulo deshabilitada
project.moveDialog = function (dlgName, newValue, pageX, pageY){
    
    dlgObj = project.pageVar.getWidget(dlgName);
    scrnX = page.primaryTouch.screenX;
    scrnY = page.primaryTouch.screenY;
    
    if (newValue == 1)
    {
        //Selección trozo de pantalla donde se habilita el movimiento
        //Para dialogo completo comentar if
        if(pageX<recuadroEnX && pageY<recuadroEnY)
        {
          x = dlgObj.getProperty("px")
          y = dlgObj.getProperty("py")
          tmpX = scrnX;
          tmpY = scrnY; 
          bMove = true;
        }
        
    }
    if(newValue == 0)
    {   //Si ha entrado en movimiento
        if(bMove){
            //Comprobación que es posible mover el dialogo en area de la pantalla
            //desde 0,0 hasta el tamaño de pantalla quitandole un 10% de cada margen
            if(x + scrnX - tmpX > 0 && x + scrnX - tmpX < (project.screenXLen - project.screenXLen / 10) && y + scrnY - tmpY > 0 && y + scrnY - tmpY < (project.screenYLen - project.screenYLen / 10)){
                
                dlgObj.setProperty("px", (x + scrnX-tmpX))
                dlgObj.setProperty("py", (y + scrnY-tmpY))
            //    alert("0")
            }    
        bMove = false;
        }        
    }
}

project.cargarWidgetsMenu = function (arWgt, nomWidget, numWidget){
    
    for (var c = 0; c <= numWidget; c++) {
        try{
            arWgt[c] = page.getWidget(nomWidget+(c+1)); //No me recoge ningun valor de la pagina actual.
            //alert(arWgt[c]); 
            arWgt[c].disable = true;
        } catch(err) {
        // alert(c + err);
        }
     }
}

project.getRndInteger = function(min, max)
{
   return Math.floor(Math.random() * (max - min + 1) ) + min;
}
