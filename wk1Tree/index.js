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



const tree = (name_items) => {
    console.log(treeFunc.getStringTree([name_items], {
        label: "name",
        children: "items"
    }))
}

tree(obj)

