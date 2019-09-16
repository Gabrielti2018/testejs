  
import { Component, OnInit } from '@angular/core';
import { Produto } from '../../model/produto';
import { ProdutoService } from '../../services/produto.service';
import {Router}from "@angular/router";
import { resetFakeAsyncZone } from '@angular/core/testing';
@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.component.html',
  styleUrls: ['./add-produto.component.css']
})
export class AddProdutoComponent implements OnInit {

  produto:Produto = new Produto;


  constructor( public produtoService: ProdutoService,
    protected router:Router) { }

  ngOnInit() {
  }

  onsubmit(form){
    console.log(form);
    try{
    this.produtoService.save(this.produto).then(
      res =>{
        console.log(res);
        this.produto = new Produto;
        form.reset();
        this.router.navigate(["/"]);
      },
    err=>{
      console.log(err);
      } 
    )
  }catch (e){
    //this.produto = new Produto;
    //form.reset();
  }
  }
}
