// use_cases
const CreateUser = require('../core/use_cases/user/CreateUser');
const GetSingleUser = require('../core/use_cases/user/GetSingleUser');
const UpdateUser = require('../core/use_cases/user/UpdateUser');
const DeleteUser = require('../core/use_cases/user/DeleteUser');

// repositories implementations
const { UserRepo } = require('../data/implementations/index');

// dependency injection
const CreateUserUC = new CreateUser(UserRepo);
const GetSingleUserUC = new GetSingleUser(UserRepo);
const UpdateUserUC = new UpdateUser(UserRepo);
const DeleteUserUC = new DeleteUser(UserRepo);

// exports
module.exports = {
  CreateUserUC,
  GetSingleUserUC,
  UpdateUserUC,
  DeleteUserUC
};
