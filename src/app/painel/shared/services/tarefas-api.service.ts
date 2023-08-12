import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { GerenciadorTarefasApiService } from 'src/app/shared/services/gerenciador-tarefas-api.service';
import { Filtro } from '../models/filtro.model';
import { RespostaApi } from '../models/resposta-api.model';
import { Tarefa } from '../models/tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefasApiService extends GerenciadorTarefasApiService {

  constructor(protected override http: HttpClient, private authService: AuthService) {
    super(http);
  }

  protected override makeHttpRequest(req: any): Promise<any> {
    const reqConfig = req || {};
    reqConfig.headers = reqConfig.headers || {};
    reqConfig.headers['Authorization'] = `Bearer ${this.authService.obterUsuarioLogado()?.token}`;

    return super.makeHttpRequest(req);
  }

  async listar(filtro?: Filtro): Promise<Tarefa[]> {
    return this.makeHttpRequest({
      url: 'tarefa',
      params: filtro?.toQueryParams()
    });
  }

  async excluir(id: string): Promise<RespostaApi> {
    return this.makeHttpRequest({
      url: `tarefa/${id}`,
      method: 'DELETE',
      body: {}
    });
  }

  async editar(tarefa: Tarefa): Promise<RespostaApi> {
    return this.makeHttpRequest({
      url: `tarefa/${tarefa.id}`,
      method: 'PUT',
      body: tarefa
    });
  }

  async cadastrar(tarefa: Tarefa): Promise<RespostaApi> {
    return this.makeHttpRequest({
      url: `tarefa`,
      method: 'POST',
      body: tarefa
    });
  }
}
