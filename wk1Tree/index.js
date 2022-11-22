// #1 - Using a external module: tree-console
const treeFunc = require("tree-console");

const obj = {
    "name": 1,
    "items": [{
      "name": 2,
      "items": [{ "name": 3 }, { "name": 4 }]
    }, {
      "name": 5,
      "items": [{ "name": 6 }]
    }]
}

const obj2 = {
    "name": 1,
    "items": [{
      "name": 2,
      "items": [{ "name": 3 }]
    }, {
      "name": 4,
      "items": [{ "name": 5 }]
    }]
}

const obj3 = {
    "name": 1,
    "items": [{
      "name": 2,
        "items": [{ "name": 3 }, { "name": 4 }, { "name": 5, "items": [{"name": 6}, {"name": 7}] }]
    }, {
      "name": 8,
      "items": [{ "name": 9 }, { "name": 10 }]
    }]
}

const tree = (name_items) => {
    console.log(treeFunc.getStringTree([name_items], {
        label: "name",
        children: "items"
    }))
}

tree(obj3)

