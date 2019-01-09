const {MongoClient, ObjectID} = require('mongodb');

const obj = new ObjectID();
console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB local server');
	};

// 	console.log('Connected to MongoDB local server @ Port 27017');
// 	const db = client.db('TodoApp');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert todo', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2))
	// });

	// db.collection('Users').insertOne({
	// 	name: 'Marvin',
	// 	age: 32,
	// 	location: 'Houston, TX'
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert users table');
	// 	}

	// 	console.log(result.ops[0]._id.getTimestamp());
	// });

	client.close();
});

