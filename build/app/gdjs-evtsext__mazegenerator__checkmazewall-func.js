
if (typeof gdjs.evtsExt__MazeGenerator__CheckMazeWall !== "undefined") {
  gdjs.evtsExt__MazeGenerator__CheckMazeWall.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MazeGenerator__CheckMazeWall = {};


gdjs.evtsExt__MazeGenerator__CheckMazeWall.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__MazeGenerator").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : "")).getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("WallDirection") : "")).getChild(((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("RowNum")) || 0 : 0) - 1) * gdjs.evtsExt__MazeGenerator__MazeNumColumns.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("MazeID") : ""), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ColumnNum")) || 0 : 0) - 1)), true);
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__MazeGenerator__CheckMazeWall.func = function(runtimeScene, MazeID, RowNum, ColumnNum, WallDirection, parentEventsFunctionContext) {
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
if (argName === "RowNum") return RowNum;
if (argName === "ColumnNum") return ColumnNum;
if (argName === "WallDirection") return WallDirection;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__MazeGenerator__CheckMazeWall.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__MazeGenerator__CheckMazeWall.registeredGdjsCallbacks = [];