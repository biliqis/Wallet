export class RegisterUserDto{
    username: string;
    password: string;
    salt: string;
    address: string;
    firstName: string;
    email:string
    lastName: string; 
    phonenumber:string
}

export class TokenDto {
    username: string;
    password: string;
    salt: string;
    address: string;
    firstName: string;
    email:string
    lastName: string; 
    
}
  
  export class RefreshTokenDto {
    user: string;
  }