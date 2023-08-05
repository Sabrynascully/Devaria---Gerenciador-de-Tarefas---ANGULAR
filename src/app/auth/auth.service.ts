import { Injectable } from '@angular/core';
import { GerenciadorTarefasApiService } from '../shared/services/gerenciador-tarefas-api.service';
import { LoginRequest, LoginResponse } from '../login/types';
import { HttpClient } from '@angular/common/http';
import { UsuarioLogado } from './usuario-logado.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends GerenciadorTarefasApiService {

  constructor(protected override http: HttpClient) {
    super(http);
  }

  async login(payload: LoginRequest): Promise<LoginResponse>{
const resultado: LoginResponse = await this.makeHttpRequest({
  url: 'login',
  method: 'POST',
  body: payload
});

return resultado;
  }

  async deslogar() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('usuarioNome');
    localStorage.removeItem('usuarioEmail');
  }

  estaLogado(): boolean {
    const accessToken = localStorage.getItem('accessToken');
    return !!accessToken;
  }

  obterUsuarioLogado(): UsuarioLogado | null {
    if (!this.estaLogado()) {
      return null;
    }

    const nome = localStorage.getItem('usuarioNome');
    const email = localStorage.getItem('usuarioEmail');
    const token = localStorage.getItem('accessToken');

    return new UsuarioLogado(nome!, email!, token!);
  }

}
