class UsersController {
async createUsers(request, response) {
  return response.json ({create: true})
}
async getAllUsers(request, response) {
  return response.json ({getAll: true})
}
async updateUsers(request, response) {
  return response.json ({update: true})
}
async deleteUsers(request, response) {
  return response.json ({delete: true})
}
}

module.exports = UsersController