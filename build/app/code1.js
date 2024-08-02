gdjs.GameCode = {};
gdjs.GameCode.localVariables = [];
gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDfloorObjects1= [];
gdjs.GameCode.GDfloorObjects2= [];
gdjs.GameCode.GDhallway_9595pfObjects1= [];
gdjs.GameCode.GDhallway_9595pfObjects2= [];
gdjs.GameCode.GDbrick_9595wallObjects1= [];
gdjs.GameCode.GDbrick_9595wallObjects2= [];
gdjs.GameCode.GDroom_9595overlapObjects1= [];
gdjs.GameCode.GDroom_9595overlapObjects2= [];


gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDroom_95959595overlapObjects1Objects = Hashtable.newFrom({"room_overlap": gdjs.GameCode.GDroom_9595overlapObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDfloorObjects1Objects = Hashtable.newFrom({"floor": gdjs.GameCode.GDfloorObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDfloorObjects1Objects = Hashtable.newFrom({"floor": gdjs.GameCode.GDfloorObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDhallway_95959595pfObjects1Objects = Hashtable.newFrom({"hallway_pf": gdjs.GameCode.GDhallway_9595pfObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDbrick_95959595wallObjects1Objects = Hashtable.newFrom({"brick_wall": gdjs.GameCode.GDbrick_9595wallObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});
gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("brick_wall"), gdjs.GameCode.GDbrick_9595wallObjects1);
gdjs.copyArray(runtimeScene.getObjects("floor"), gdjs.GameCode.GDfloorObjects1);
gdjs.copyArray(runtimeScene.getObjects("hallway_pf"), gdjs.GameCode.GDhallway_9595pfObjects1);
gdjs.copyArray(runtimeScene.getObjects("room_overlap"), gdjs.GameCode.GDroom_9595overlapObjects1);
{gdjs.evtsExt__DungeonGenerator__GenerateDungeonRooms.func(runtimeScene, 32, 50, 50, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDroom_95959595overlapObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDfloorObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDfloorObjects1Objects, 10, "", 7, 10, 7, 10, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDhallway_95959595pfObjects1Objects, "Pathfinding", 10000, true, gdjs.randomInRange(3, 5), 0, false, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDbrick_95959595wallObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "");
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDfloorObjects1.length = 0;
gdjs.GameCode.GDfloorObjects2.length = 0;
gdjs.GameCode.GDhallway_9595pfObjects1.length = 0;
gdjs.GameCode.GDhallway_9595pfObjects2.length = 0;
gdjs.GameCode.GDbrick_9595wallObjects1.length = 0;
gdjs.GameCode.GDbrick_9595wallObjects2.length = 0;
gdjs.GameCode.GDroom_9595overlapObjects1.length = 0;
gdjs.GameCode.GDroom_9595overlapObjects2.length = 0;

gdjs.GameCode.eventsList0(runtimeScene);

return;

}

gdjs['GameCode'] = gdjs.GameCode;
