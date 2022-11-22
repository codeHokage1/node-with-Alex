## #1 - Tree
Creating a function within the NodeJS environment that accepts an hierarchical  object of format:

```
{
  "name": 1,
  "items": [{
    "name": 2,
    "items": [{ "name": 3 }, { "name": 4 }]
  }, {
    "name": 5,
    "items": [{ "name": 6 }]
  }]
}
```
and would return a tree-like structure in the console; with format similar to:

```
1
├── 2
│   └── 3
│   └── 4
└── 5
    └── 6
```
