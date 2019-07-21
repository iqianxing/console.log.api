var spawn = require('child_process');
var debug = require('debug');
var path = require('path');

spawn = spawn.spawn;
debug = debug("console.log");

function log(opts, res) {

  if (!opts.cmd) {
    res.json({
      code: 500,
      message: "cmd is null"
    });

    return;
  }
  if (!opts.file) {
    res.json({
      code: 500,
      message: "file is null"
    });

    return;
  }

  res.writeHead(200, {
    "Content-type": "text/text; charset=utf-8"
  });

  var sh = 'sh';
  var args = ['-c', opts.cmd];
  if (process.platform === 'win32') {
    sh = 'cmd';
    args[0] = "/c";
  }
  if (opts.file) {
    args[1] = args[1] + ' ' + path.resolve(opts.file);
  }
  var env = JSON.parse(JSON.stringify(process.env));
  if (opts.CONSOLE_LOG_API_CONTEXT) {
    env.CONSOLE_LOG_API_CONTEXT = opts.CONSOLE_LOG_API_CONTEXT;
  }
  var child = spawn(sh, args, {
    cwd: process.cwd(),
    env: env,
    encoding: 'utf8'
  });

  child.stdin.on('data', dataManager);
  child.stdout.on('data', dataManager);
  child.stderr.on('data', dataManager);

  child.stdin.on('end', function (chunk) {
    res.send(chunk);
    res.end();
  });

  child.on('exit', function (code) {
  });

  function dataManager(chunk) {
    res.write(chunk.toString());
  };
}

module.exports = log;