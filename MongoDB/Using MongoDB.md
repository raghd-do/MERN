# Using MongoDB
### Create a database called 'my_first_db'.
```sql
use my_first_db
```
### Create students collection.
```sql
db.createCollection('students')
```
### Each document you insert into this collection should have the following format: ({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}})
```sql
db.students.insert({name: "Raghad", home_state: "Qassim", lucky_number: 7, birthday: {month: 10, day: 11, year: 18}})
db.students.insert({name: "Norah", home_state: "Riyadh", lucky_number: 1, birthday: {month: 1, day: 1, year: 24}})
db.students.insert({name: "Abir", home_state: "Jeddah", lucky_number: 5, birthday: {month: 3, day: 12, year: 26}})
db.students.insert({name: "Amal", home_state: "Jubail", lucky_number: 3, birthday: {month: 12, day: 2, year: 26}})
db.students.insert({name: "Randa", home_state: "Taif", lucky_number: 20, birthday: {month: 2, day: 20, year: 20}})
```
### Get all students.
```sql
db.students.find()
```
### Retrieve all students who are from Riyadh or Qassim .
```sql
db.students.find({$or: [{home_state: "Riyadh"}, {home_state: "Qassim"}]})
```
### Get all students whose lucky number is greater than 3
```sql
db.students.find({lucky_number: {$gt: 3}})
```
### Get all students whose lucky number is less than or equal to 10
```sql
db.students.find({lucky_number: {$lte: 10}})
```
### Get all students whose lucky number is between 1 and 9 (inclusive)
```sql
db.students.find({$and: [{lucky_number: {$gte: 1}}, {lucky_number: {$lt: 9}}]})
```
### Add a field to each student collection called 'interests' that is an ARRAY. It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.
```sql
db.students.updateMany({}, {$set: {interest: ['coding', 'brunch', 'MongoDB']}})
```
### Add some unique interests for each particular student into each of their interest arrays.
```sql
db.students.update({name: "Raghad"}, {$push: {interest: "drawing"}})
db.students.update({name: "Norah"}, {$push: {interest: "cleaning"}})
db.students.update({name: "Abir"}, {$push: {interest: "shopping"}})
db.students.update({name: "Amal"}, {$push: {interest: "walking"}})
db.students.update({name: "Randa"}, {$push: {interest: "helping"}})
```
### Add the interest 'taxes' into someone's interest array.
```sql
db.students.update({name: "Randa"}, {$push: {interest: "taxes"}})
```
### Remove the 'taxes' interest you just added.
```sql
db.students.update({name: "Randa"}, {$pop: {interest: (1)}})
```
### Remove all students who are from Taif.
```sql
db.students.remove({home_state: "Taief"})
```
### Remove a student by name.
```sql
db.students.remove({name: "Raghad"})
```
### Remove a student whose lucky number is greater than 5 (JUST ONE)
```sql
db.students.remove({lucky_nuber: {$gt: 5}}, true)
```
### Add a field to each student collection called 'number_of_belts' and set it to 0.
```sql
db.students.updateMany({}, {$set: {number_of_belts: 0}})
```
### Increment this field by 1 for all students in Jeddah.
```sql
db.students.updateMany({home_state: "Jeddah"}, {$inc: {number_of_belt: 1}})
```
### Rename the 'number_of_belts' field to 'belts_earned'
```sql
db.students.updateMany({}, {$rename: {"number_of_belts": "belts_earned"}})
```
### Remove the 'lucky_number' field.
```sql
db.students.updateMany({}, {$unset: {lucky_number: ""}})
```
### Add a 'updated_on' field, and set the value as the current date.
```sql
db.students.updateMany({}, {$currentDate: {updated_at: {$type: "date"}}})
```