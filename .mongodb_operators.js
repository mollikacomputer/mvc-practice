use tools ==> hit enter then go to database tools
db.user.insertOne({name:'Ranjit', age:40}) // insert one data
db.user.find() // get all data from database
db.user.find().count()
db.user.find({name:"Ranjit"})
db.user.find({age:40})
db.user.find({age:{$gt:20}}) // gt means > 
