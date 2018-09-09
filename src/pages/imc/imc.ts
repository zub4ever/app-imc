import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { LSprovider} from '../../providers/ls-prov/ls-provider.ts';
import { LsProvProvider } from '../../providers/ls-prov/ls-prov';

/**
 * Generated class for the ImcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-imc',
  templateUrl: 'imc.html',
})
export class ImcPage {

  peso: number;
  altura: number;
  valorImc: number;
  msg: string;
  nome: string;
  sexo: string;
  dataNascimento: Date;
  idade: number;
  data: number;
  constructor(public navCtrl: NavController, public navParams: NavParams,
        private providerLS :LsProvProvider) {
  }

calcular(){
   var valorImc = this.peso / (this.altura * this.altura);
   valorImc= parseFloat(valorImc.toFixed(2));
   this.geraMsg(valorImc);
   this.salvarDados(valorImc);
}

salvarDados(imc){
 
  this.providerLS.salvar(imc, 
                       this.nome, 
             this.peso,
             this.altura);
}

calculadarIdade(dataNascimento: Date){
    
    return this.idade = Math.floor(Math.ceil(Math.abs(new Date(dataNascimento).getTime()- Date.now()) / (1000 * 3600 * 24)) / 365.25);
}
geraMsg(valorImc:number){
  var idade = this.calculadarIdade(this.dataNascimento);
  if(this.sexo=="f")
    this.msg = "A "+this.nome+", tem "+idade +" anos é seu imc é "+valorImc+" e está";
  else 
    this.msg = "O "+this.nome+", tem "+idade +" anos é seu imc é "+valorImc+" e está";

  if(valorImc < 18.5)
      this.msg +=" abaixo do peso";
  else if(valorImc < 24.5)
      this.msg +=" no peso normal";
  else 
      this.msg +=" acima do peso";
 
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImcPage');
  }

}
