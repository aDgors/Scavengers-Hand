
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement || {};

/**
 * Behavior generated from Pixel perfect top-down movement
 */
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement = class PixelPerfectTopDownMovement extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.TopDownMovement = behaviorData.TopDownMovement !== undefined ? behaviorData.TopDownMovement : "";
    this._behaviorData.PixelSize = behaviorData.PixelSize !== undefined ? behaviorData.PixelSize : Number("1") || 0;
    this._behaviorData.OffsetX = behaviorData.OffsetX !== undefined ? behaviorData.OffsetX : Number("0") || 0;
    this._behaviorData.OffsetY = behaviorData.OffsetY !== undefined ? behaviorData.OffsetY : Number("0") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.TopDownMovement !== newBehaviorData.TopDownMovement)
      this._behaviorData.TopDownMovement = newBehaviorData.TopDownMovement;
    if (oldBehaviorData.PixelSize !== newBehaviorData.PixelSize)
      this._behaviorData.PixelSize = newBehaviorData.PixelSize;
    if (oldBehaviorData.OffsetX !== newBehaviorData.OffsetX)
      this._behaviorData.OffsetX = newBehaviorData.OffsetX;
    if (oldBehaviorData.OffsetY !== newBehaviorData.OffsetY)
      this._behaviorData.OffsetY = newBehaviorData.OffsetY;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    TopDownMovement: this._behaviorData.TopDownMovement,
    PixelSize: this._behaviorData.PixelSize,
    OffsetX: this._behaviorData.OffsetX,
    OffsetY: this._behaviorData.OffsetY,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.TopDownMovement !== undefined)
      this._behaviorData.TopDownMovement = networkSyncData.props.TopDownMovement;
    if (networkSyncData.props.PixelSize !== undefined)
      this._behaviorData.PixelSize = networkSyncData.props.PixelSize;
    if (networkSyncData.props.OffsetX !== undefined)
      this._behaviorData.OffsetX = networkSyncData.props.OffsetX;
    if (networkSyncData.props.OffsetY !== undefined)
      this._behaviorData.OffsetY = networkSyncData.props.OffsetY;
  }

  // Properties:
  
  _getTopDownMovement() {
    return this._behaviorData.TopDownMovement !== undefined ? this._behaviorData.TopDownMovement : "";
  }
  _setTopDownMovement(newValue) {
    this._behaviorData.TopDownMovement = newValue;
  }
  _getPixelSize() {
    return this._behaviorData.PixelSize !== undefined ? this._behaviorData.PixelSize : Number("1") || 0;
  }
  _setPixelSize(newValue) {
    this._behaviorData.PixelSize = newValue;
  }
  _getOffsetX() {
    return this._behaviorData.OffsetX !== undefined ? this._behaviorData.OffsetX : Number("0") || 0;
  }
  _setOffsetX(newValue) {
    this._behaviorData.OffsetX = newValue;
  }
  _getOffsetY() {
    return this._behaviorData.OffsetY !== undefined ? this._behaviorData.OffsetY : Number("0") || 0;
  }
  _setOffsetY(newValue) {
    this._behaviorData.OffsetY = newValue;
  }
}

/**
 * Shared data generated from Pixel perfect top-down movement
 */
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.SharedData = class PixelPerfectTopDownMovementSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._PixelPerfectMovement_PixelPerfectTopDownMovementSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._PixelPerfectMovement_PixelPerfectTopDownMovementSharedData = new gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.SharedData(
      initialData
    );
  }
  return instanceContainer._PixelPerfectMovement_PixelPerfectTopDownMovementSharedData;
}

// Methods:
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.onCreatedContext = {};
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.onCreatedContext.userFunc0xdf4680 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";

const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);

/** @type {gdjs.TopDownMovementRuntimeBehavior} */
const topDownBehavior = object.getBehavior(behavior._getTopDownMovement());

const pixelPerfect = new gdjs.__pixelPerfectExtension.PixelPerfectTopDownMovement(behavior, topDownBehavior);
topDownBehavior.__pixelPerfect = pixelPerfect;
behavior.__pixelPerfect = pixelPerfect;

};
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__PixelPerfectMovement__DefineJavaScriptForTopDown.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.onCreatedContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.onCreatedContext.GDObjectObjects1);
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.onCreatedContext.userFunc0xdf4680(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "TopDownMovement": this._getTopDownMovement()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PixelPerfectMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PixelPerfectMovement"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.userFunc0xdf5060 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);

behavior.__pixelPerfect.doStepPostEvents(runtimeScene);
};
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1);
gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.userFunc0xdf5060(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "TopDownMovement": this._getTopDownMovement()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PixelPerfectMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PixelPerfectMovement"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("PixelPerfectMovement::PixelPerfectTopDownMovement", gdjs.evtsExt__PixelPerfectMovement__PixelPerfectTopDownMovement.PixelPerfectTopDownMovement);
