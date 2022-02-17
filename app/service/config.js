import jsonwebtoken from "jsonwebtoken";
import connection from "../common/db";
import jwtConfig from "../config/index";
class ConfigService {
  static createConfig = async (keyName, source) => {
    const sql = `INSERT INTO t_config (key_name,source,state,is_delete) VALUES ("${keyName}","${source}",0,0)`;
    // 获取数据库链接对象
    const db = connection();
    return new Promise((resolve, reject) => {
      const parmas = null;
      // 执行SQL语句
      db.query(sql, parmas, (error, results, fields) => {
        if (error) {
          reject({
            resCode: 500001,
            msg: "数据库操作错误",
            resData: {},
            // resData: JSON.parse(JSON.stringify(results)),
          });
        } else {
          resolve({
            resCode: 0,
            msg: "",
            resData: {},
          });
        }
      });
      // 关闭链接
      db.end();
    });
  };
}
export default ConfigService;
