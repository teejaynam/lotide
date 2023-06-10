// eqObjects.js
// recursive function that checks deep equality between two objects

const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) { //if objects are inequal length, return false immediately
    return false;
  }

  for (let key of object1Keys) { //if key from object1 is not included in object2, return false immediately
    if (!object2Keys.includes(key)) {
      return false;
    }

    const value1 = object1[key]; //assign values of object at key into variables in case of nested objects
    const value2 = object2[key];

    if (typeof value1 !== "object") { //if typeof isnt an object, check for equality, return false if not strictly equal
      if (value1 !== value2) {
        return false;
      }
    } else { 
      if (!eqObjects(value1, value2)) { //recursive call of eqObjects, passing our object[key] variables as arguments
        return false;
      }
    }
  }

  return true; //if all checks pass, return true
};

// export function

module.exports = eqObjects;