
if (typeof gdjs.evtsExt__DungeonGenerator__IsRoomEntrance !== "undefined") {
  gdjs.evtsExt__DungeonGenerator__IsRoomEntrance.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DungeonGenerator__IsRoomEntrance = {};
gdjs.evtsExt__DungeonGenerator__IsRoomEntrance.GDObjectObjects1= [];
gdjs.evtsExt__DungeonGenerator__IsRoomEntrance.GDObjectObjects2= [];


gdjs.evtsExt__DungeonGenerator__IsRoomEntrance.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DungeonGenerator__IsRoomEntrance.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DungeonGenerator__IsRoomEntrance.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DungeonGenerator__IsRoomEntrance.GDObjectObjects1[i].getVariableBoolean(gdjs.evtsExt__DungeonGenerator__IsRoomEntrance.GDObjectObjects1[i].getVariables().get("__DungeonGenerator").getChild("IsRoomEntrance"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DungeonGenerator__IsRoomEntrance.GDObjectObjects1[k] = gdjs.evtsExt__DungeonGenerator__IsRoomEntrance.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DungeonGenerator__IsRoomEntrance.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__DungeonGenerator__IsRoomEntrance.func = function(runtimeScene, Object, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DungeonGenerator"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DungeonGenerator"),
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__DungeonGenerator__IsRoomEntrance.GDObjectObjects1.length = 0;
gdjs.evtsExt__DungeonGenerator__IsRoomEntrance.GDObjectObjects2.length = 0;

gdjs.evtsExt__DungeonGenerator__IsRoomEntrance.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__DungeonGenerator__IsRoomEntrance.registeredGdjsCallbacks = [];