/**
 * Para que esta funcion funcione correctamente hay que crear la variable en este caso numeric1 o cualquier otra
 * Linekar el valor de la variable a la variable primaryTouchPressed:DialogName cada variable será diferente dependiendo
 * del dialog a mostar.
 */

var dlgName = "testMoveMenu"
//Colocar el widget en el medio de la pantalla de la manera dinamica
page.getWidget(dlgName).setProperty("px",(project.screenXLen/2-page.getWidget(dlgName).getProperty("width")/2))
page.getWidget(dlgName).setProperty("py",(project.screenYLen/2-page.getWidget(dlgName).getProperty("height")/2))

function numeric1_onDataUpdate(me, eventInfo)

{
    project.moveDialog(dlgName, eventInfo.newValue, page.primaryTouch.x, page.primaryTouch.y);
    return false; 
}