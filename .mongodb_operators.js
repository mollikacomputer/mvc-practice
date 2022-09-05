use tools ==> hit enter then go to database tools
db.user.insertOne({name:'Ranjit', age:40}) // insert one data
db.user.find() // get all data from database
db.user.find().count()
db.user.find({name:"Ranjit"})
db.user.find({age:40})
db.user.find({age:{$gt:20}}) // gt means > 
db.user.find({$gte:20}) // geter than or equal >=
db.user.find({age:{$lt:20}}) // less than <
db.user.find({age: {$lte:20}}) //  <=
db.user.find({age: {$eq:20}})
$eq // equal =
$gt // greter than  >
$gte // >=
$in // array
$lt // <
$lte // <=
$ne // not equal !=
$nin // none value

