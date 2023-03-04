import User from "App/Models/User";

export default class UserMapper {
  public static map(user: User) {
    return {
      id: user.id,
      fullname: user.fullname,
      email: user.email,
    };
  }
}
