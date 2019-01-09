const {MongoClient, ObjectID} = require('mongodb');

const obj = new ObjectID();
console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB local server');
	};

	console.log('Connected to MongoDB local server @ Port 27017');
	const db = client.db('TodoApp');

	db.collection('Todos').findOneAndUpdate({text: 'Eat lunch'}, {
		$set: {
			completed: true
		}
	}, {
		returnOriginial: false
	}).then(res => {
		console.log(res);
	})
	// client.close();
});

