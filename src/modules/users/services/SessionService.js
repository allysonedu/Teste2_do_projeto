const { compare } = require("bcrypt");

class SessionService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;

  }
  async execute(payload) {
    const { email, password } = payload;

    const user = await this.usersRepository.checkUserEmail(email);
    if (!user) throw new AppError('user not found');

    await compare(password, user.password);

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });

    delete user.password;

    return {
      token,
      user,
    };

  }
}

module.exports = SessionService;