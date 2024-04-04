import { User } from "./UserInterface";
import openDb from "./lib";

export async function createUser(user: User) {
  const connection = openDb();
  const query = `INSERT INTO User (User_name,User_password) VALUES ('${user.userName}','${user.password}');`;
  connection.query(query);
  connection.end();
}

export async function getUserInfo() {
  let query = "SELECT * FROM User";
  const listOfUser: User[] = [];
  const connection = openDb();
  const result = await connection.promise().query(query);
  console.log(result);

  for (const user of result[0]) {
    const newUser: User = {
      userName: user.User_Name,
      password: user.User_Password,
    };
    listOfUser.push(newUser);
  }
  connection.end();

  return listOfUser;
}

export async function getUserInfoById(id: number) {
  let query = `SELECT * FROM User WHERE ID = ${id}`;
  const connection = openDb();
  const result = await connection.promise().query(query);
  const user = result[0][0];
  const UserInfo: User = {
    userName: user.User_Name,
    password: user.User_Password,
  };

  connection.end();

  return UserInfo;
}
