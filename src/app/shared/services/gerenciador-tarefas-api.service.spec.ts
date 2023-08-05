import { TestBed } from '@angular/core/testing';

import { GerenciadorTarefasApiService } from './gerenciador-tarefas-api.service';

describe('GerenciadorTarefasApiService', () => {
  let service: GerenciadorTarefasApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GerenciadorTarefasApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
