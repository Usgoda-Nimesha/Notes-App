// load database config file
var config = require("./config.json");

// development enviornment
var env = process.env.NODE_ENV || "development";
// fetch JSON data from config file
var envConfig = config[env];
// add config data to process.env
// Object.keys() will return an enumerable collection of keys
Object.keys(envConfig).forEach((key) => (process.env[key] = envConfig[key]));
