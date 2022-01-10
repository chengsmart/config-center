const mysql = require("mysql");
const config = require("../config/index");

// 建立链接
const dbConnection = () => {
  var connection = mysql.createConnection(config.db);
  connection.connect();
  return connection;
};

const query = (sql, parmas = null) => {
  // 获取数据库链接对象
  const connection = dbConnection();
  return new Promise((resolve,reject ) => {
    // 执行SQL语句
    connection.query(sql, parmas, (error, results, fields) => {
      if (error) throw error;
      resolve(JSON.parse(JSON.stringify(results)));
    });
    // 关闭链接
    connection.end();
  });
};
module.exports = query;
