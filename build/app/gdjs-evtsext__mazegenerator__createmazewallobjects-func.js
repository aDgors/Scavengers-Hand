
if (typeof gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects !== "undefined") {
  gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects = {};
gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects1= [];
gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects2= [];
gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3= [];
gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects4= [];
gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects5= [];
gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects1= [];
gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects2= [];
gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3= [];
gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects4= [];
gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects5= [];


gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.mapOfGDgdjs_9546evtsExt_9595_9595MazeGenerator_9595_9595CreateMazeWallObjects_9546GDHwallObjects3Objects = Hashtable.newFrom({"Hwall": gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3});
gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("HwallResizeWidth")) || 0 : 0) > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("HwallResizeHeight")) || 0 : 0) > 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3, gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects4);

{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects4.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects4[i].setWidth((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("HwallResizeWidth")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects4.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects4[i].setHeight((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("HwallResizeHeight")) || 0 : 0));
}
}}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3 */
{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FloorX")) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("FloorWidth")) / 2) - ((gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3[i].getWidth()) / 2),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FloorY")) - (gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3[i].getHeight()) / 2);
}
}}

}


};gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.mapOfGDgdjs_9546evtsExt_9595_9595MazeGenerator_9595_9595CreateMazeWallObjects_9546GDVwallObjects3Objects = Hashtable.newFrom({"Vwall": gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3});
gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("VwallResizeWidth")) || 0 : 0) > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("VwallResizeHeight")) || 0 : 0) > 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3, gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects4);

{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects4.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects4[i].setWidth((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("VwallResizeWidth")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects4.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects4[i].setHeight((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("VwallResizeHeight")) || 0 : 0));
}
}}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3 */
{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FloorX")) - (gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3[i].getWidth()) / 2,gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FloorY")) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("FloorHeight")) / 2) - ((gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3[i].getHeight()) / 2));
}
}}

}


};gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.mapOfGDgdjs_9546evtsExt_9595_9595MazeGenerator_9595_9595CreateMazeWallObjects_9546GDVwallObjects3Objects = Hashtable.newFrom({"Vwall": gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3});
gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("VwallResizeWidth")) || 0 : 0) > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("VwallResizeHeight")) || 0 : 0) > 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3, gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects4);

{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects4.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects4[i].setWidth((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("VwallResizeWidth")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects4.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects4[i].setHeight((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("VwallResizeHeight")) || 0 : 0));
}
}}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3 */
{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FloorX")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("FloorWidth")) - (gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3[i].getWidth()) / 2,gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FloorY")) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("FloorHeight")) / 2) - ((gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3[i].getHeight()) / 2));
}
}}

}


};gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.mapOfGDgdjs_9546evtsExt_9595_9595MazeGenerator_9595_9595CreateMazeWallObjects_9546GDHwallObjects3Objects = Hashtable.newFrom({"Hwall": gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3});
gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("HwallResizeWidth")) || 0 : 0) > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("HwallResizeHeight")) || 0 : 0) > 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3, gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects4);

{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects4.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects4[i].setWidth((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("HwallResizeWidth")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects4.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects4[i].setHeight((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("HwallResizeHeight")) || 0 : 0));
}
}}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3 */
{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FloorX")) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("FloorWidth")) / 2) - ((gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3[i].getWidth()) / 2),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FloorY")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("FloorHeight")) - (gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3[i].getHeight()) / 2);
}
}}

}


};gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("UpWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index"))), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns")));
}
}
if (isConditionTrue_0) {
gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.mapOfGDgdjs_9546evtsExt_9595_9595MazeGenerator_9595_9595CreateMazeWallObjects_9546GDHwallObjects3Objects, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""));
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3[i].returnVariable(gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3[i].getVariables().get("__MazeGenerator_Column")).setNumber(gdjs.evtTools.common.mod(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))) + 1);
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3[i].returnVariable(gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3[i].getVariables().get("__MazeGenerator_Row")).setNumber(Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))) + 1);
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3[i].setZOrder((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Zorder")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3[i].returnVariable(gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3[i].getVariables().get("__MazeGenerator_MazeID")).setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3[i].returnVariable(gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3[i].getVariables().get("__MazeGenerator_WallDirection")).setString("UpWall");
}
}
{ //Subevents
gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("LeftWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index"))), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.mod(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))) == 0);
}
}
if (isConditionTrue_0) {
gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.mapOfGDgdjs_9546evtsExt_9595_9595MazeGenerator_9595_9595CreateMazeWallObjects_9546GDVwallObjects3Objects, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""));
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3[i].returnVariable(gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3[i].getVariables().get("__MazeGenerator_Column")).setNumber(gdjs.evtTools.common.mod(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))) + 1);
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3[i].returnVariable(gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3[i].getVariables().get("__MazeGenerator_Row")).setNumber(Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))) + 1);
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3[i].setZOrder((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Zorder")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3[i].returnVariable(gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3[i].getVariables().get("__MazeGenerator_MazeID")).setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3[i].returnVariable(gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3[i].getVariables().get("__MazeGenerator_WallDirection")).setString("LeftWall");
}
}
{ //Subevents
gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("RightWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index"))), true);
if (isConditionTrue_0) {
gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.mapOfGDgdjs_9546evtsExt_9595_9595MazeGenerator_9595_9595CreateMazeWallObjects_9546GDVwallObjects3Objects, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""));
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3[i].returnVariable(gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3[i].getVariables().get("__MazeGenerator_Column")).setNumber(gdjs.evtTools.common.mod(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))) + 1);
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3[i].returnVariable(gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3[i].getVariables().get("__MazeGenerator_Row")).setNumber(Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))) + 1);
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3[i].setZOrder((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Zorder")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3[i].returnVariable(gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3[i].getVariables().get("__MazeGenerator_MazeID")).setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3[i].returnVariable(gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3[i].getVariables().get("__MazeGenerator_WallDirection")).setString("RightWall");
}
}
{ //Subevents
gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("DownWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index"))), true);
if (isConditionTrue_0) {
gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.mapOfGDgdjs_9546evtsExt_9595_9595MazeGenerator_9595_9595CreateMazeWallObjects_9546GDHwallObjects3Objects, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""));
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3[i].returnVariable(gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3[i].getVariables().get("__MazeGenerator_Column")).setNumber(gdjs.evtTools.common.mod(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))) + 1);
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3[i].returnVariable(gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3[i].getVariables().get("__MazeGenerator_Row")).setNumber(Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))) + 1);
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3[i].setZOrder((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Zorder")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3[i].returnVariable(gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3[i].getVariables().get("__MazeGenerator_MazeID")).setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3[i].returnVariable(gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3[i].getVariables().get("__MazeGenerator_WallDirection")).setString("DownWall");
}
}
{ //Subevents
gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index").add(1);
}}

}


};gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.eventsList5 = function(runtimeScene, eventsFunctionContext) {

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
gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.eventsList4(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};

gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.func = function(runtimeScene, MazeID, Hwall, Vwall, Layer, Zorder, HwallResizeWidth, HwallResizeHeight, VwallResizeWidth, VwallResizeHeight, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Hwall": Hwall
, "Vwall": Vwall
},
  _objectArraysMap: {
"Hwall": gdjs.objectsListsToArray(Hwall)
, "Vwall": gdjs.objectsListsToArray(Vwall)
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
if (argName === "HwallResizeWidth") return HwallResizeWidth;
if (argName === "HwallResizeHeight") return HwallResizeHeight;
if (argName === "VwallResizeWidth") return VwallResizeWidth;
if (argName === "VwallResizeHeight") return VwallResizeHeight;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects1.length = 0;
gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects2.length = 0;
gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects3.length = 0;
gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects4.length = 0;
gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDHwallObjects5.length = 0;
gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects1.length = 0;
gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects2.length = 0;
gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects3.length = 0;
gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects4.length = 0;
gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.GDVwallObjects5.length = 0;

gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.eventsList5(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__MazeGenerator__CreateMazeWallObjects.registeredGdjsCallbacks = [];