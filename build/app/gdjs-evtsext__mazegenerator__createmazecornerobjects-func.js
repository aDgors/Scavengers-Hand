
if (typeof gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects !== "undefined") {
  gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects = {};
gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects1= [];
gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects2= [];
gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3= [];
gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects4= [];
gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects5= [];


gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.mapOfGDgdjs_9546evtsExt_9595_9595MazeGenerator_9595_9595CreateMazeCornerObjects_9546GDCornerObjects3Objects = Hashtable.newFrom({"Corner": gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3});
gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ResizeWidth")) || 0 : 0) > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ResizeHeight")) || 0 : 0) > 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3, gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects4);

{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects4.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects4[i].setWidth((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ResizeWidth")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects4.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects4[i].setHeight((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ResizeHeight")) || 0 : 0));
}
}}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3 */
{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FloorX")) - (gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].getWidth()) / 2,gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FloorY")) - (gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].getHeight()) / 2);
}
}}

}


};gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.mapOfGDgdjs_9546evtsExt_9595_9595MazeGenerator_9595_9595CreateMazeCornerObjects_9546GDCornerObjects3Objects = Hashtable.newFrom({"Corner": gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3});
gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ResizeWidth")) || 0 : 0) > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ResizeHeight")) || 0 : 0) > 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3, gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects4);

{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects4.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects4[i].setWidth((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ResizeWidth")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects4.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects4[i].setHeight((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ResizeHeight")) || 0 : 0));
}
}}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3 */
{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FloorX")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("FloorWidth")) - (gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].getWidth()) / 2,gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FloorY")) - (gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].getHeight()) / 2);
}
}}

}


};gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.mapOfGDgdjs_9546evtsExt_9595_9595MazeGenerator_9595_9595CreateMazeCornerObjects_9546GDCornerObjects3Objects = Hashtable.newFrom({"Corner": gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3});
gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ResizeWidth")) || 0 : 0) > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ResizeHeight")) || 0 : 0) > 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3, gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects4);

{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects4.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects4[i].setWidth((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ResizeWidth")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects4.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects4[i].setHeight((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ResizeHeight")) || 0 : 0));
}
}}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3 */
{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FloorX")) - (gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].getWidth()) / 2,gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FloorY")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("FloorHeight")) - (gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].getHeight()) / 2);
}
}}

}


};gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.mapOfGDgdjs_9546evtsExt_9595_9595MazeGenerator_9595_9595CreateMazeCornerObjects_9546GDCornerObjects3Objects = Hashtable.newFrom({"Corner": gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3});
gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ResizeWidth")) || 0 : 0) > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ResizeHeight")) || 0 : 0) > 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3, gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects4);

{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects4.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects4[i].setWidth((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ResizeWidth")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects4.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects4[i].setHeight((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ResizeHeight")) || 0 : 0));
}
}}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3 */
{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FloorX")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("FloorWidth")) - (gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].getWidth()) / 2,gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FloorY")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("FloorHeight")) - (gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].getHeight()) / 2);
}
}}

}


};gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("LeftWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index"))), true);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("UpWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index"))), true);
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
{isConditionTrue_2 = (gdjs.evtTools.common.mod(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))) != 0);
}
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("UpWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) - 1), true);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("LeftWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index"))), true);
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
{isConditionTrue_2 = (gdjs.evtTools.common.mod(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))) != 0);
}
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("UpWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) - 1), true);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("LeftWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))), true);
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("UpWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index"))), true);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("LeftWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))), true);
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {
gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.mapOfGDgdjs_9546evtsExt_9595_9595MazeGenerator_9595_9595CreateMazeCornerObjects_9546GDCornerObjects3Objects, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""));
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].returnVariable(gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].getVariables().get("__MazeGenerator_Column")).setNumber(gdjs.evtTools.common.mod(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))) + 1);
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].returnVariable(gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].getVariables().get("__MazeGenerator_Row")).setNumber(Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))) + 1);
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].setZOrder((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Zorder")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].returnVariable(gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].getVariables().get("__MazeGenerator_MazeID")).setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : ""));
}
}
{ //Subevents
gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns")));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("RightWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index"))), true);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("UpWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index"))), true);
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
{isConditionTrue_2 = (gdjs.evtTools.common.mod(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) + 1, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))) != 0);
}
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("UpWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) + 1), true);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("RightWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index"))), true);
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
{isConditionTrue_2 = (gdjs.evtTools.common.mod(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) + 1, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))) != 0);
}
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("UpWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) + 1), true);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("RightWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))), true);
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("UpWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index"))), true);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("RightWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))), true);
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("RightWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index"))), false);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("UpWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index"))), false);
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {
gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.mapOfGDgdjs_9546evtsExt_9595_9595MazeGenerator_9595_9595CreateMazeCornerObjects_9546GDCornerObjects3Objects, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""));
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].returnVariable(gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].getVariables().get("__MazeGenerator_Column")).setNumber(gdjs.evtTools.common.mod(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))) + 1);
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].returnVariable(gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].getVariables().get("__MazeGenerator_Row")).setNumber(Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))) + 1);
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].setZOrder((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Zorder")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].returnVariable(gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].getVariables().get("__MazeGenerator_MazeID")).setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : ""));
}
}
{ //Subevents
gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.mod(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))) == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("LeftWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index"))), true);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("DownWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index"))), true);
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
{isConditionTrue_2 = (gdjs.evtTools.common.mod(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))) != 0);
}
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("DownWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) - 1), true);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("LeftWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index"))), true);
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
{isConditionTrue_2 = (gdjs.evtTools.common.mod(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))) != 0);
}
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("DownWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) - 1), true);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("LeftWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))), true);
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("DownWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index"))), true);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("LeftWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))), true);
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("LeftWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index"))), false);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("DownWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index"))), false);
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {
gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.mapOfGDgdjs_9546evtsExt_9595_9595MazeGenerator_9595_9595CreateMazeCornerObjects_9546GDCornerObjects3Objects, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""));
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].returnVariable(gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].getVariables().get("__MazeGenerator_Column")).setNumber(gdjs.evtTools.common.mod(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))) + 1);
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].returnVariable(gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].getVariables().get("__MazeGenerator_Row")).setNumber(Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))) + 1);
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].setZOrder((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Zorder")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].returnVariable(gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].getVariables().get("__MazeGenerator_MazeID")).setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : ""));
}
}
{ //Subevents
gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("RightWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index"))), true);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("DownWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index"))), true);
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
{isConditionTrue_2 = (gdjs.evtTools.common.mod(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) + 1, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))) != 0);
}
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("DownWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) + 1), true);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("RightWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index"))), true);
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
{isConditionTrue_2 = (gdjs.evtTools.common.mod(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) + 1, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))) != 0);
}
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("DownWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) + 1), true);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("RightWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))), true);
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("DownWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index"))), true);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("RightWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))), true);
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("RightWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index"))), false);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("DownWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index"))), false);
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("DownWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index"))), false);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("RightWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))), false);
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("RightWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index"))), false);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("DownWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) + 1), false);
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.mapOfGDgdjs_9546evtsExt_9595_9595MazeGenerator_9595_9595CreateMazeCornerObjects_9546GDCornerObjects3Objects, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""));
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].returnVariable(gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].getVariables().get("__MazeGenerator_Column")).setNumber(gdjs.evtTools.common.mod(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))) + 1);
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].returnVariable(gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].getVariables().get("__MazeGenerator_Row")).setNumber(Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))) + 1);
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].setZOrder((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Zorder")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].returnVariable(gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3[i].getVariables().get("__MazeGenerator_MazeID")).setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : ""));
}
}
{ //Subevents
gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index").add(1);
}}

}


};gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index").setNumber(0);
}}

}


{


const repeatCount2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumberOfCells"));
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {

let isConditionTrue_0 = false;
if (true)
{
{runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FloorX").setNumber(gdjs.evtTools.common.mod(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("FloorWidth")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("MazeX")));
}{runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FloorY").setNumber(Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("FloorHeight")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("MazeY")));
}
{ //Subevents: 
gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.eventsList4(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};

gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.func = function(runtimeScene, MazeID, Corner, Layer, Zorder, ResizeWidth, ResizeHeight, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Corner": Corner
},
  _objectArraysMap: {
"Corner": gdjs.objectsListsToArray(Corner)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("MazeGenerator"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("MazeGenerator"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "MazeID") return MazeID;
if (argName === "Layer") return Layer;
if (argName === "Zorder") return Zorder;
if (argName === "ResizeWidth") return ResizeWidth;
if (argName === "ResizeHeight") return ResizeHeight;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects1.length = 0;
gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects2.length = 0;
gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects3.length = 0;
gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects4.length = 0;
gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.GDCornerObjects5.length = 0;

gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.eventsList5(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__MazeGenerator__CreateMazeCornerObjects.registeredGdjsCallbacks = [];