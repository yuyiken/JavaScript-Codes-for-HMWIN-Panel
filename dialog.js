var dlgName = "testMoveMenu"
//Colocar el widget en el medio de la pantalla de la manera dinamica
page.getWidget(dlgName).setProperty("px",(project.screenXLen/2-page.getWidget(dlgName).getProperty("width")/2))
page.getWidget(dlgName).setProperty("py",(project.screenYLen/2-page.getWidget(dlgName).getProperty("height")/2))

function numeric1_onDataUpdate(me, eventInfo)

{
    //Comprobar que la variable esta correctamente linkeada al dialogo primaryTouchPressed:DialogName en value
    project.moveDialog(dlgName, eventInfo.newValue, page.primaryTouch.x, page.primaryTouch.y);
    return false; 
}