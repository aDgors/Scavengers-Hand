
if (typeof gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects !== "undefined") {
  gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects = {};
gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.GDFloorObjectObjects1= [];
gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.GDFloorObjectObjects2= [];
gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.GDFloorObjectObjects3= [];
gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.GDFloorObjectObjects4= [];


gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.mapOfGDgdjs_9546evtsExt_9595_9595MazeGenerator_9595_9595CreateMazeFloorObjects_9546GDFloorObjectObjects2Objects = Hashtable.newFrom({"FloorObject": gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.GDFloorObjectObjects2});
gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.eventsList0 = function(runtimeScene, eventsFunctionContext) {

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
gdjs.copyArray(gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.GDFloorObjectObjects2, gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.GDFloorObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.GDFloorObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.GDFloorObjectObjects3[i].setWidth((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ResizeWidth")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.GDFloorObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.GDFloorObjectObjects3[i].setHeight((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ResizeHeight")) || 0 : 0));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.GDFloorObjectObjects2, gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.GDFloorObjectObjects3);

{runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FloorX").setNumber(gdjs.evtTools.common.mod(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("FloorWidth")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("MazeX")));
}{runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FloorY").setNumber(Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("FloorHeight")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("MazeY")));
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.GDFloorObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.GDFloorObjectObjects3[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FloorX")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("FloorWidth")) / 2 - (gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.GDFloorObjectObjects3[i].getWidth()) / 2,gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FloorY")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("FloorHeight")) / 2 - (gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.GDFloorObjectObjects3[i].getHeight()) / 2);
}
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index").add(1);
}}

}


};gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.eventsList1 = function(runtimeScene, eventsFunctionContext) {

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
gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.GDFloorObjectObjects2.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.mapOfGDgdjs_9546evtsExt_9595_9595MazeGenerator_9595_9595CreateMazeFloorObjects_9546GDFloorObjectObjects2Objects, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""));
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.GDFloorObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.GDFloorObjectObjects2[i].setZOrder((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Zorder")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.GDFloorObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.GDFloorObjectObjects2[i].returnVariable(gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.GDFloorObjectObjects2[i].getVariables().get("__MazeGenerator_Column")).setNumber(gdjs.evtTools.common.mod(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))) + 1);
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.GDFloorObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.GDFloorObjectObjects2[i].returnVariable(gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.GDFloorObjectObjects2[i].getVariables().get("__MazeGenerator_Row")).setNumber(Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))) + 1);
}
}{for(var i = 0, len = gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.GDFloorObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.GDFloorObjectObjects2[i].returnVariable(gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.GDFloorObjectObjects2[i].getVariables().get("__MazeGenerator_MazeID")).setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : ""));
}
}
{ //Subevents: 
gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};

gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.func = function(runtimeScene, MazeID, FloorObject, Layer, Zorder, ResizeWidth, ResizeHeight, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"FloorObject": FloorObject
},
  _objectArraysMap: {
"FloorObject": gdjs.objectsListsToArray(FloorObject)
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

gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.GDFloorObjectObjects1.length = 0;
gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.GDFloorObjectObjects2.length = 0;
gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.GDFloorObjectObjects3.length = 0;
gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.GDFloorObjectObjects4.length = 0;

gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__MazeGenerator__CreateMazeFloorObjects.registeredGdjsCallbacks = [];