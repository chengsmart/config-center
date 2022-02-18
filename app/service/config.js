import jsonwebtoken from "jsonwebtoken";
import connection from "../common/db";
import jwtConfig from "../config/index";
class ConfigService {
  static createConfig = async (keyName, source) => {
    try {
      const checkKey = await this.checkConfig(keyName, source);
      console.log(checkKey, "checkKey");

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
    } catch (error) {
      console.log(error, "error");
      return error;
    }
  };
  static checkConfig = async (keyName, source) => {
    const sql = `SELECT * FROM t_config WHERE key_name="${keyName}" AND source="${source}"`;
    // 获取数据库链接对象
    const db = connection();
    return new Promise((resolve, reject) => {
      const parmas = null;
      // 执行SQL语句
      db.query(sql, parmas, (error, results, fields) => {
        if (error) {
          reject({
            resCode: 500001,
            msg: "数据库查询错误",
            resData: JSON.parse(JSON.stringify(results)),
          });
        } else {
          if (!results.length) {
            resolve({
              resCode: 0,
              msg: "",
              resData: {},
            });
          } else {
            reject({
              resCode: -1,
              msg: "已存在该字段",
              resData: {},
            });
          }
        }
      });
      // 关闭链接
      db.end();
    });
  };
  static queryConfig = async (source) => {
    const sql = `SELECT * FROM t_config WHERE source="${source}"`;
    // 获取数据库链接对象
    const db = connection();
    return new Promise((resolve, reject) => {
      const parmas = null;
      // 执行SQL语句
      db.query(sql, parmas, (error, results, fields) => {
        if (error) {
          reject({
            resCode: 500001,
            msg: "数据库查询错误",
            resData: JSON.parse(JSON.stringify(results)),
          });
        } else {
          resolve({
            resCode: 0,
            msg: "",
            resData: results.length ? results : [],
          });
        }
      });
      // 关闭链接
      db.end();
    });
  };
}
export default ConfigService;
