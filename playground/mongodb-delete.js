const {MongoClient, ObjectID} = require('mongodb');

const obj = new ObjectID();
console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB local server');
	};

	console.log('Connected to MongoDB local server @ Port 27017');
	const db = client.db('TodoApp');

	//deleteMany
	// // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then(res => {
	// 	console.log(res);
	// });

	//deleteOne
	// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then(res => {
	// 	console.log(res);
	// })

	//findOneAndDelete
	// db.collection('Todos').findOneAndDelete({completed: false}).then(res => {
	// 	console.log(res);
	// })

	// client.close();
});

