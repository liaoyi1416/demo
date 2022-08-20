# Inventory Question

There is an inventory system below.
The inventory system subtracts 1 everytime an order is placed.
It resets at the end of the day to the defaultInventory.

```
[
    {
      "id": "item1",
      "currentInventory": 4,
      "defaultInventory": 10
    },
    {
      "id": "item2",
      "currentInventory": 0,
      "defaultInventory": 3
    }
  ]
```

## Task 1
Create a rest api for the inventory system using any choice of database. Try using typescript and try to make it production quality.

## Task 2
How would you support pre-orders? Implement it.