# 环境
提前安装好Node.js、python等环境。  
```sh
git clone https://github.com/iqianxing/console.log.api.git

cd ./console.log.api/
# 安装依赖包
npm install
# 支持mocha命令
npm install mocha -g

```

# 配置api
按照[apilist.json](apilist.json)中的格式配置好api。  
配置示例：
```json
{
  "/helloworld": {
    "cmd": "node",
    "file": "api/helloworld.js"
  },
  "/mocha": {
    "cmd": "mocha",
    "file": "test"
  },
  "/test/mocha/helloworld": {
    "cmd": "mocha",
    "file": "test/helloworld.spec.js"
  },
  "/test/python/helloworld": {
    "cmd": "python",
    "file": "test/test_helloworld.py"
  }
}
```

# 脚本参数化
通过process.env.CONSOLE_LOG_API_CONTEXT在http请求、主线程、子线程之间进行参数传递。http请求的querystring参数req会被转换为线程线程变量子线程的环境变量CONSOLE_LOG_API_CONTEXT传给子线程。
```
req.query['req'] == process.env.CONSOLE_LOG_API_CONTEXT
```
在api中获取环境变量：  
```
var context = process.env.CONSOLE_LOG_API_CONTEXT;
```  
示例：
1. [node context](api/context.js)
2. [mocha context](test/context.spec.js)
3. [python context](test/test_context.py)


# 效果
<p align="center"><br><img alt="运行效果" src="public/console.log.api.gif" width="354"></p>
