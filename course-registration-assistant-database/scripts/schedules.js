const schedules = [
  {
    "username": "johndoe@example.com",
    "name": "Summer Pain",
    "semester": "Summer 2021",
    "courses": [
      { "_id": ObjectId("606b5b6f106bdfb380d803be") },
      { "_id": ObjectId("606b5b6f106bdfb380d803c2") },
      { "_id": ObjectId("606b5b6f106bdfb380d803cb") }
    ]
  },
  {
    "username": "johndoe@example.com",
    "name": "Practica Summer Courses",
    "semester": "Summer 2021",
    "courses": [
      { "_id": ObjectId("606b5d44f6cd0035c0e3cf13") },
      { "_id": ObjectId("606b5ddcfacf99cce5272108") },
      { "_id": ObjectId("606b5ddcfacf99cce527210e") },
      { "_id": ObjectId("606b5ddcfacf99cce5272116") }
    ]
  },
  {
    "username": "johndoe@example.com",
    "name": "Theoretical Summer Courses",
    "semester": "Summer 2021",
    "courses": [
      { "_id": ObjectId("606b5ddcfacf99cce5272122") },
      { "_id": ObjectId("606b5b6f106bdfb380d803e8") },
      { "_id": ObjectId("606b5b6f106bdfb380d803ee") }
    ]
  }
]

conn = new Mongo();
db = conn.getDB("courses-management");

db.schedules.insertMany(schedules);
