import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  constructor() { }
  role=true;
  user="";
 onCheck(){
  return this.role;
}

checkuser(){
  return this.user;
}
}
