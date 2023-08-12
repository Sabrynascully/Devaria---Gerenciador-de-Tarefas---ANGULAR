import { Component, OnInit } from '@angular/core';
import { ModoFormulario } from '../shared/enums/modo-formulario.enum';
import { Filtro } from '../shared/models/filtro.model';
import { Tarefa } from '../shared/models/tarefa.model';
import { ModalTarefaConfig, ModalTarefaService } from '../shared/services/modal-tarefa.service';
import { TarefasApiService } from '../shared/services/tarefas-api.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent  implements OnInit{

  public tarefas: Tarefa[] = [];
  public tarefaSelecionada?: Tarefa;
  constructor(private tarefaService: TarefasApiService, private modalTarefaService: ModalTarefaService) { }

  ngOnInit(): void {
    this.filtrarTarefas();

    this.modalTarefaService.escutarEvento((config: ModalTarefaConfig) => {
      if (config.exibir === false) {
        this.filtrarTarefas();
      }
    });
  }

  async filtrarTarefas(filtro?: Filtro) {
    this.tarefas = await this.tarefaService.listar(filtro);
  }

  selecionarTarefa(tarefa: Tarefa) {
    if (tarefa.dataConclusao) {
      return;
    }

    const modelTarefa = new Tarefa(tarefa.nome, tarefa.dataPrevistaConclusao);
    modelTarefa.id = tarefa.id || (tarefa as any)._id;

    this.tarefaSelecionada = tarefa;
    this.modalTarefaService.exibirModal({
      tarefa: modelTarefa,
      modo: ModoFormulario.EDICAO
    });
  }

  obterIconeDaTarefa(tarefa: Tarefa) {
    if (tarefa.dataConclusao) {
      return 'check-concluido.svg';
    }

    return 'check.svg';
  }

}
