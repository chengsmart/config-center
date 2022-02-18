import jsonwebtoken from "jsonwebtoken";
import connection from "../common/db";
import jwtConfig from "../config/index";
class AuthService {
  static loginApi = async (userName, passwd) => {
    const sql = `SELECT * FROM t_user WHERE name="${userName}" AND passwd="${passwd}"`;
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
          if (results.length === 1) {
            const userToken = { name: userName, id: 1 };

            const token = jsonwebtoken.sign(
              {
                userToken,
              },
              jwtConfig.secret,
              { expiresIn: "24h" }
            );

            resolve({
              resCode: 0,
              msg: "",
              resData: { token },
            });
          } else if (!results.length) {
            reject({
              resCode: 400002,
              msg: "用户名或密码错误",
              resData: {},
            });
          }
        }
      });
      // 关闭链接
      db.end();
    });
  };
  static searchApi = async (userName, passwd) => {
    const sql = "SELECT * FROM t_user";
    // 获取数据库链接对象
    const db = connection();
    return new Promise((resolve, reject) => {
      // TODO 调整真实数据
      const parmas = null;
      // 执行SQL语句
      db.query(sql, parmas, (error, results, fields) => {
        if (error) {
          reject({
            resCode: 400001,
            msg: "数据库查询错误",
            resData: JSON.parse(JSON.stringify(results)),
          });
        } else {
          resolve({
            resCode: 0,
            msg: "",
            resData: JSON.parse(JSON.stringify(results)),
          });
        }
      });
      // 关闭链接
      db.end();
    });
  };
}
export default AuthService;
