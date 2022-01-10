/* 封装 modle (Java中的DAO) 以 news 表为例 */
const pool = require("../common/db");



pool.getConnection((err, connection) =>{
   
  connection.query('SELECT * FROM t_users',  (error, results, fields) => {
    // 结束会话
    connection.release();
 
    // 如果有错误就抛出
    if (error) throw error;
  })

})

