
if (typeof gdjs.evtsExt__MazeGenerator__MazeCellDepth !== "undefined") {
  gdjs.evtsExt__MazeGenerator__MazeCellDepth.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MazeGenerator__MazeCellDepth = {};


gdjs.evtsExt__MazeGenerator__MazeCellDepth.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__MazeGenerator__MazeCellDepth.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Directions").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("PickDirection")))) == "Left";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("LeftWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index"))), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FloorTodo").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) - 1), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FoundDirection"), false);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FoundDirection"), true);
}{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FloorInProgress"), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) - 1);
}{runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("NumFloorInProgress").add(1);
}{runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Counter").add(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Directions").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("PickDirection")))) == "Right";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("RightWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index"))), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FloorTodo").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) + 1), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FoundDirection"), false);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FoundDirection"), true);
}{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FloorInProgress"), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) + 1);
}{runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("NumFloorInProgress").add(1);
}{runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Counter").add(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Directions").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("PickDirection")))) == "Up";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("UpWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index"))), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FloorTodo").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FoundDirection"), false);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FoundDirection"), true);
}{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FloorInProgress"), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns")));
}{runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("NumFloorInProgress").add(1);
}{runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Counter").add(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Directions").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("PickDirection")))) == "Down";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("DownWall").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index"))), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FloorTodo").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FoundDirection"), false);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FoundDirection"), true);
}{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FloorInProgress"), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns")));
}{runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("NumFloorInProgress").add(1);
}{runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Counter").add(1);
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.variableRemoveAt(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Directions"), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("PickDirection")));
}{runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("numDirections").sub(1);
}}

}


};gdjs.evtsExt__MazeGenerator__MazeCellDepth.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__MazeGenerator__MazeNumWalls.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : ""), Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))) + 1, gdjs.evtTools.common.mod(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))) + 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("MinDepth")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Counter"));
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("MinDepth").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Counter")));
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Counter").sub(1);
}}

}


};gdjs.evtsExt__MazeGenerator__MazeCellDepth.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{



}


{


const repeatCount4 = 4;
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__MazeGenerator__MazeNumWalls.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : ""), Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))) + 1, gdjs.evtTools.common.mod(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumColumns"))) + 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) > 1);
}
if (isConditionTrue_0)
{
{runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("PickDirection").setNumber(gdjs.randomInRange(0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("numDirections")) - 1));
}
{ //Subevents: 
gdjs.evtsExt__MazeGenerator__MazeCellDepth.eventsList1(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FoundDirection"), false);
if (isConditionTrue_0) {
{gdjs.evtTools.variable.variableRemoveAt(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FloorInProgress"), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("NumFloorInProgress")) - 1);
}{runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("NumFloorInProgress").sub(1);
}
{ //Subevents
gdjs.evtsExt__MazeGenerator__MazeCellDepth.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__MazeGenerator__MazeCellDepth.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FloorTodo"));
}{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FloorInProgress"));
}{runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Counter").setNumber(0);
}{runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("MinDepth").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumberOfCells")) + 1);
}}

}


{


const repeatCount2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild("NumberOfCells"));
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {

let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FloorTodo"), true);
}}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FloorInProgress"), ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("RowNumber")) || 0 : 0) - 1) * gdjs.evtsExt__MazeGenerator__MazeNumColumns.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : ""), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ColumnNumber")) || 0 : 0) - 1));
}{runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("NumFloorInProgress").setNumber(1);
}}

}


{


let stopDoWhile_0 = false;
do {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("NumFloorInProgress")) > 0;
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Directions"), "Left");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Directions"), "Right");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Directions"), "Up");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Directions"), "Down");
}{runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("numDirections").setNumber(4);
}{runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FloorInProgress").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("NumFloorInProgress")) - 1)));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FloorTodo").getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("Index"))), false);
}{runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("PickDirection").setNumber(0);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("FoundDirection"), false);
}
{ //Subevents: 
gdjs.evtsExt__MazeGenerator__MazeCellDepth.eventsList3(runtimeScene, eventsFunctionContext);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild("MinDepth")); }}}

}


};

gdjs.evtsExt__MazeGenerator__MazeCellDepth.func = function(runtimeScene, MazeID, RowNumber, ColumnNumber, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
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
if (argName === "RowNumber") return RowNumber;
if (argName === "ColumnNumber") return ColumnNumber;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__MazeGenerator__MazeCellDepth.eventsList4(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__MazeGenerator__MazeCellDepth.registeredGdjsCallbacks = [];