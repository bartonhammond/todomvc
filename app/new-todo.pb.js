routerAdd("POST", "/newtodo", (c) => {
    const data = $apis.requestInfo(c).data
    const collection = $app.dao().findCollectionByNameOrId("todos")
    const record = new Record(collection)
    const form = new RecordUpsertForm($app, record)

    form.loadData({
	"field":       data.todo,
	"done":         false,

    });
    form.submit();
})

