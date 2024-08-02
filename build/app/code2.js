gdjs.First_32levelCode = {};
gdjs.First_32levelCode.localVariables = [];
gdjs.First_32levelCode.GDPlayerObjects1= [];
gdjs.First_32levelCode.GDPlayerObjects2= [];
gdjs.First_32levelCode.GDsterile_9595brick_9595wallObjects1= [];
gdjs.First_32levelCode.GDsterile_9595brick_9595wallObjects2= [];
gdjs.First_32levelCode.GDfloorObjects1= [];
gdjs.First_32levelCode.GDfloorObjects2= [];
gdjs.First_32levelCode.GDbrick_9595wallObjects1= [];
gdjs.First_32levelCode.GDbrick_9595wallObjects2= [];
gdjs.First_32levelCode.GDwall_9595cornerObjects1= [];
gdjs.First_32levelCode.GDwall_9595cornerObjects2= [];
gdjs.First_32levelCode.GDbrick_9595wall2Objects1= [];
gdjs.First_32levelCode.GDbrick_9595wall2Objects2= [];
gdjs.First_32levelCode.GDgrey_9595floorObjects1= [];
gdjs.First_32levelCode.GDgrey_9595floorObjects2= [];
gdjs.First_32levelCode.GDdark_9595tileObjects1= [];
gdjs.First_32levelCode.GDdark_9595tileObjects2= [];
gdjs.First_32levelCode.GDgrey_9595floor2Objects1= [];
gdjs.First_32levelCode.GDgrey_9595floor2Objects2= [];
gdjs.First_32levelCode.GDtableObjects1= [];
gdjs.First_32levelCode.GDtableObjects2= [];
gdjs.First_32levelCode.GDtable_9595chairObjects1= [];
gdjs.First_32levelCode.GDtable_9595chairObjects2= [];


gdjs.First_32levelCode.mapOfGDgdjs_9546First_959532levelCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.First_32levelCode.GDPlayerObjects1});
gdjs.First_32levelCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.First_32levelCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.First_32levelCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.First_32levelCode.GDPlayerObjects1[i].setZOrder(1000);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.First_32levelCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.First_32levelCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.First_32levelCode.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.First_32levelCode.mapOfGDgdjs_9546First_959532levelCode_9546GDPlayerObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "");
}}

}


};

gdjs.First_32levelCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.First_32levelCode.GDPlayerObjects1.length = 0;
gdjs.First_32levelCode.GDPlayerObjects2.length = 0;
gdjs.First_32levelCode.GDsterile_9595brick_9595wallObjects1.length = 0;
gdjs.First_32levelCode.GDsterile_9595brick_9595wallObjects2.length = 0;
gdjs.First_32levelCode.GDfloorObjects1.length = 0;
gdjs.First_32levelCode.GDfloorObjects2.length = 0;
gdjs.First_32levelCode.GDbrick_9595wallObjects1.length = 0;
gdjs.First_32levelCode.GDbrick_9595wallObjects2.length = 0;
gdjs.First_32levelCode.GDwall_9595cornerObjects1.length = 0;
gdjs.First_32levelCode.GDwall_9595cornerObjects2.length = 0;
gdjs.First_32levelCode.GDbrick_9595wall2Objects1.length = 0;
gdjs.First_32levelCode.GDbrick_9595wall2Objects2.length = 0;
gdjs.First_32levelCode.GDgrey_9595floorObjects1.length = 0;
gdjs.First_32levelCode.GDgrey_9595floorObjects2.length = 0;
gdjs.First_32levelCode.GDdark_9595tileObjects1.length = 0;
gdjs.First_32levelCode.GDdark_9595tileObjects2.length = 0;
gdjs.First_32levelCode.GDgrey_9595floor2Objects1.length = 0;
gdjs.First_32levelCode.GDgrey_9595floor2Objects2.length = 0;
gdjs.First_32levelCode.GDtableObjects1.length = 0;
gdjs.First_32levelCode.GDtableObjects2.length = 0;
gdjs.First_32levelCode.GDtable_9595chairObjects1.length = 0;
gdjs.First_32levelCode.GDtable_9595chairObjects2.length = 0;

gdjs.First_32levelCode.eventsList0(runtimeScene);

return;

}

gdjs['First_32levelCode'] = gdjs.First_32levelCode;
