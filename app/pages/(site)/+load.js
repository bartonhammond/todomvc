module.exports = () => {
	const result = arrayOf(new DynamicModel({
        // describe the shape of the data (used also as initial values)
        "id":     "",
        "field": "",
        "done":    false,
    }));
    
    $app.dao().db()
        .newQuery("SELECT id, field, done FROM todos LIMIT 100")
        .all(result) // throw an error on db failure
    
	return {
		todos: result
	};
};
