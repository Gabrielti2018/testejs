import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';
import { Usuario } from '../model/usuario';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //usuarios: Array<Usuario> = [
    //{ uid: "1", nome: "Ana", email: "ana@gmail.com", pws: "111111" },
    //{ uid: "2", nome: "Pedro", email: "pedro@gmail.com", pws: "222222" },
  //];

  protected devsoft = environment.serverAPI;

  constructor(
    protected http:HttpClient,
    protected devsoftfire:AngularFireDatabase
  ) { }

  save(usuario:Usuario){
    //this.usuarios.push(usuario);
    //return this.http.post(this.devsoft + "usuarios", usuario);
    //return this.devsoftfire.object("usuarios").set(usuario);
    return this.devsoftfire.list("usuarios").push(usuario);
    
  }
  getAll(){
    //return this.http.get(this.devsoft + "usuarios");
    return this.devsoftfire.list<Usuario>("usuarios").snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }
  get(key){
    return this.devsoftfire.object<Usuario>("usuarios/"+key).valueChanges()
  }
  update(usuario: Usuario, key){
    return this.devsoftfire.object<Usuario>("usuarios/"+key).update(usuario);
  }
  remove(key){
    return this.devsoftfire.object("usuarios/"+key).remove()
  }
  }

  
