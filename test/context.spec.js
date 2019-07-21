describe("# 动态传参", function () {
  var context = { "name": "world" };
  it("process.env.CONSOLE_LOG_API_CONTEXT", function () {
    if (process.env.CONSOLE_LOG_API_CONTEXT) {
      context = JSON.parse(process.env.CONSOLE_LOG_API_CONTEXT);
    };
    console.log(JSON.stringify(context));
  });
})