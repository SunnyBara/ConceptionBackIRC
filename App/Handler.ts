import { User } from "../DB/UserInterface";
import { createUser, getUserInfo, getUserInfoById } from "../DB/UserTable";

export async function getUsers(req, res, next) {
  const listOfUser: User[] = await getUserInfo();
  console.log(listOfUser);
  res.send(listOfUser);
}

export async function addUser(req: Request, res, next) {
  console.log(req.body);
  if (req.body) {
    const userToAdd: User = {
      userName: req.body["login"],
      password: req.body["password"],
    };
    await createUser(userToAdd);
  }
  res.send("ok");
  return;
}

export async function getUserById(req, res, next) {
  console.log(req.params.id);
  const User = await getUserInfoById(req.params.id);
  res.send(User);
}
