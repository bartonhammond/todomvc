routerAdd("POST", "/newtodo", (c) => {
    console.log("hey buddy");
    const data = $apis.requestInfo(c).data
    console.log(JSON.stringify(data));
    /*
      const name = c.pathParam("name")

      const html = $template.loadFiles(
      `${__hooks}/views/layout.html`,
      `${__hooks}/views/hello.html`,
      ).render({
      "name": name,
      })

      return c.html(200, html)
    */
})
