import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export abstract class GerenciadorTarefasApiService {

  constructor(protected http: HttpClient) { }

  protected makeHttpRequest( req: any): Promise<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      ...(req.headers || {})
    })

    return this.http.request(
      req.method || 'GET',
      `${environment.apiGerenciadorTarefas}/${req.url}`,
      {
        body: req.body || null,
        params: req.params || null,
        headers
      }
    ).toPromise();


  }
}
