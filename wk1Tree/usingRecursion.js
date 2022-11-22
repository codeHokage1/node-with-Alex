// #2 - With recursion

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


const tree = (name_items, i = 0, sign = '') => {
    let j = 0;
    let indent = " "
    while (j < i) {
        indent += indent;
        j++;
    }
    let newSign = indent + sign
    console.log(newSign, name_items.name);
    if (name_items.items) {
        name_items.items.forEach(elem => {
            // console.log(i)
            if (i === 0) {
                tree(elem, i+1, '├──')
            } else {
                tree(elem, i+1, '  └───')
            }
        });
    }
}

tree(obj3)
