import { Component, OnInit, Input } from '@angular/core';
import { Endereco } from 'src/app/model/endereco';
import { EnderecoService } from '../../services/endereco.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {
  @Input() public endereco:Endereco = new Endereco;

  constructor(
    protected enderecoService:EnderecoService
  ) { }

  ngOnInit() {
  }
  buscaCEP(event){
    let cep:string = event.target.value;
    if (cep.length > 7){
    this.enderecoService.getEndereco(cep)
    .subscribe(
      res =>{
        if (res.erro){
          console.log("cep não encontrado", res);
        } else{
          this.endereco.cep = res.cep;
          this.endereco.logradouro = res.logradouro;
          this.endereco.bairro = res.bairro;
          this.endereco.localidade = res.localidade;
          this.endereco.uf = res.uf;
          this.endereco.unidade = res.unidade;
          this.endereco.gia = res.gia;
          this.endereco.ibge = res.ibge;
          this.endereco.complemento = res.complemento;
          console.log(this.endereco);
        }
        console.log(res);
      },
      err => {
        this.endereco = new Endereco;
        console.log(err);
      }
    )
  }
}
}
