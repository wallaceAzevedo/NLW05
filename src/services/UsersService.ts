import { getCustomRepository, Repository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import { User } from "../entities/User";

class UsersService {
  private usersRepository: Repository<User>

   constructor(){
     this.usersRepository = getCustomRepository(UsersRepository);
   }

  async create(email: string ) {

     //Verificar se usuario existe

      const userExtists = await this.usersRepository.findOne({
        email,
      });

      //se existir, retornar user
      if(userExtists) {
          return userExtists;
      }

      const user = this.usersRepository.create({
          email,
      });

      await this.usersRepository.save(user);

     //se não existir, salvar no DB
     return user;
      
  }
  //ate aqui tudo certo aula 03/1h16mn

  /*async findByEmail(email:string){
    const usersRepository =getCustomRepository(UsersRepository);
    const user = await this.usersRepository.findOne({
      where:{email,
      },
    })
    return user;
  }*/

  //testar essa chave
  async findByEmail(email:string){
    const usersRepository =getCustomRepository(UsersRepository);
    const user = await this.usersRepository.findOne({
      where:{email},
    })
    return user;
  }
    
}

export { UsersService };