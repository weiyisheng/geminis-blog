require("babel-register");
require("babel-polyfill");

if(process.env.NODE_ENV === "development") {
  require('./server_dev.js')
} else {
  require('./server.js')
}
