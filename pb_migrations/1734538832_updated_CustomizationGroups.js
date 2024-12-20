/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_100374818")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "date2990389176",
    "max": "",
    "min": "",
    "name": "created",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "date3332085495",
    "max": "",
    "min": "",
    "name": "updated",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_100374818")

  // remove field
  collection.fields.removeById("date2990389176")

  // remove field
  collection.fields.removeById("date3332085495")

  return app.save(collection)
})
