import {Component} from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router,
              private navCtrl: NavController) {
  }

  form = {
    responses: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ]
  }

  questions = [
    "1.	Se você apontar para qualquer coisa do outro lado do cômodo, sua criança olha para o que você está apontando? (Por exemplo: se você apontar para um brinquedo ou um animal, sua criança olha para o brinquedo ou animal?)",
    "2.	Alguma vez você já se perguntou se sua criança poderia ser surda?",
    "3.	Sua criança brinca de faz-de-conta? (Por exemplo, finge que está bebendo em um copo vazio ou falando ao telefone, ou finge que dá comida a uma boneca ou a um bicho de pelúcia?)",
    "4.	Sua criança gosta de subir nas coisas? (Por exemplo, móveis, brinquedos de parque ou escadas)",
    "5.	Sua criança faz movimentos incomuns com os dedos perto dos olhos? (Por exemplo, abana os dedos perto dos olhos?)",
    "6.	Sua criança aponta com o dedo para pedir algo ou para conseguir ajuda? (Por exemplo, aponta para um alimento ou brinquedo que está fora do seu alcance?)",
    "7.	Sua criança aponta com o dedo para lhe mostrar algo interessante? (Por exemplo, aponta para um avião no céu ou um caminhão grande na estrada?)",
    "8.	Sua criança interessa-se por outras crianças? (Por exemplo, sua criança observa outras crianças, sorri para elas ou aproxima-se delas?)",
    "9.	Sua criança mostra-lhe coisas, trazendo-as ou segurando-as para que você as veja – não para obter ajuda, mas apenas para compartilhar com você? (Por exemplo, mostra uma flor, um bicho de pelúcia ou um caminhão de brinquedo?)",
    "10.	Sua criança responde quando você a chama pelo nome? (Por exemplo, olha, fala ou balbucia ou para o que está fazendo, quando você a chama pelo nome?)",
    "11.	Quando você sorri para sua criança, ela sorri de volta para você?",
    "12.	Sua criança fica incomodada com os ruídos do dia a dia? (Por exemplo, sua criança grita ou chora com barulhos como o do aspirador ou de música alta?)",
    "13.	Sua criança já anda?",
    "14.	Sua criança olha você nos olhos quando você fala com ela, brinca com ela ou veste-a?",
    "15.	Sua criança tenta imitar aquilo que você faz? (Por exemplo, dá tchau, bate palmas ou faz sons engraçados quando você os faz?)",
    "16.	Se você virar a sua cabeça para olhar para alguma coisa, sua criança olha em volta para ver o que é que você está olhando?",
    "17.	Sua criança busca que você preste atenção nela? (Por exemplo, sua criança olha para você para receber um elogio ou lhe diz “olha” ou “olha para mim”?)",
    "18.	Sua criança compreende quando você lhe diz para fazer alguma coisa? (Por exemplo, se você não apontar, ela consegue compreender “ponha o livro na cadeira” ou “traga o cobertor”?)",
    "19.	Quando alguma coisa nova acontece, sua criança olha para o seu rosto para ver sua reação? (Por exemplo, se ela ouve um barulho estranho ou engraçado, ou vê um brinquedo novo, ela olha para o seu rosto?)",
    "20.	Sua criança gosta de atividades com movimento? (Por exemplo, ser balançada ou pular nos seus joelhos?",
  ]


  onSubmit() {
    let navigationExtras: NavigationExtras = {
      state: {
        data: this.form
      }
    };
    this.router.navigate(['send-result'], navigationExtras);
  }

}
