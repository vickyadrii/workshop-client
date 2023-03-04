import User from "App/Models/User";

export default class UserMapper {
  public static map(user: User) {
    return {
      fullname: user.fullname,
      email: user.email,
    };
  }
}
