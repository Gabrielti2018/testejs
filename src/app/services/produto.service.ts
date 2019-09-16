import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../model/produto';
import { environment } from '../../environments/environment'
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  protected devsoft = environment.serverAPI;
  constructor(
    protected http:HttpClient,
    protected devsoftfire:AngularFireDatabase
  ) { }
  save(produtos:Produto){
    //return this.http.post(this.db + "produtos", produtos);
    return this.devsoftfire.list("produtos").push(produtos);
  }
  getAll(){
    //return this.http.get(this.db + "produtos");
    return this.devsoftfire.list<Produto>("produtos").snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }
  get(key){
    return this.devsoftfire.object<Produto>("produtos/"+key).valueChanges()
  }
  update(produto: Produto, key){
    return this.devsoftfire.object<Produto>("produtos/"+key).update(produto);
  }
  remove(key){
    return this.devsoftfire.object("produtos/"+key).remove()
  }
}