var siri = require("../siri");

siri.createServer(function(cmd, dev) {
    if (/(Shutdown)|(Turn computer off)/.test(cmd)) {
        dev.end("Shutting down...");
        require('child_process').exec("halt");
    } else {
        dev.proxy();
    }
}).start();
