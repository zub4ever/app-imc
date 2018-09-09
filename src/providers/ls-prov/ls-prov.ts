import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import   {Storage} from '@ionic/storage';
import'rxjs/add/operator/map';


/*
  Generated class for the LsProvProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LsProvProvider {

  constructor(public storage: Storage) {
    console.log('Hello LsProvProvider Provider');
  }
 
 
  public salvar(imc, nome,peso,altura){
    let key =new Date().getTime();
    let pessoa = new Pessoa(imc, peso, altura, nome);

    //pessoa.nome = nome;
      return this.storage.set(key.toString(), pessoa);
  }
 
}
export class Pessoa{
  nome :string;
  altura:number;
  peso:number;
  imc:number;
  constructor(imc,nome,peso,altura){
   this.nome = nome;
   this.altura = altura;
   this.peso = peso;
   this.imc = imc;
  }
}
export class ListaPessoa{
    key:string;
    valor: Pessoa;
}