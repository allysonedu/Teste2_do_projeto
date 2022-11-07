 class CreateNewUserService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;

  }

  async execute(payload) {
  const { password } = payload;
  
  Object.assign(payload, {
    
  });

  const user = await this.usersRepository.createUser(payload);

  return user;

  }

 }
 module.exports = CreateNewUserService;

