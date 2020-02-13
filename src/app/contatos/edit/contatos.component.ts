import { Component, OnInit } from '@angular/core';
import {Contato} from '../shared/contato';
import { ContatoService } from '../shared/contato.service' 
import { ContatoDataService } from '../shared/contato-data.service';


 
@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent implements OnInit {

  contato: Contato;
  key: string = '';

  constructor(private contatoService : ContatoService, private contatoDataService: ContatoDataService) { }

  ngOnInit() {
    this.contato = new Contato();
  }

  onSubmit(){
    if(this.key){

    }else{
      this.contatoService.insert(this.contato);
    }
  }
}
