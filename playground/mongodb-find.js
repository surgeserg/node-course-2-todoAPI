const {MongoClient, ObjectID} = require('mongodb');

const obj = new ObjectID();
console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB local server');
	};

	console.log('Connected to MongoDB local server @ Port 27017');
	const db = client.db('TodoApp');

	// db.collection('Todos').find({
	// 	_id: new ObjectID('5c3518348da13500e88a1760')
	// }).toArray().then(docs => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, err => {
	// 	console.log('Unable to fetch', err);
	// });

		db.collection('Todos').find().count().then(count => {
		console.log(`Todos count: ${count}`);

	}, err => {
		console.log('Unable to fetch', err);
	});


	// client.close();
});

