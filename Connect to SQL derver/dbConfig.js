
// Created an Onject constructor for dynamic configurations and export the constructor.


function DBConfig(server, database, user, password, port) {
    this.server   = server;
    this.database = database;
    this.user     = user;
    this.password = password;
    this.port     = port;
};

module.exports = DBConfig;



