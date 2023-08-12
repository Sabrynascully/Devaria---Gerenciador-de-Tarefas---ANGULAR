import { Injectable, EventEmitter } from '@angular/core';
import { ModoFormulario } from '../enums/modo-formulario.enum';
import { Tarefa } from '../models/tarefa.model';

export type ModalTarefaConfig = {
  exibir?: boolean;
  modo?: ModoFormulario;
  tarefa?: Tarefa;
}

@Injectable({
  providedIn: 'root'
})
export class ModalTarefaService {

  private eventEmitter: EventEmitter<ModalTarefaConfig> = new EventEmitter();
  constructor() { }

  exibirModal(config?: ModalTarefaConfig) {
    this.eventEmitter.emit({
      ...(config || {}),
      exibir: true
    });
  }

  ocultarModal() {
    this.eventEmitter.emit({
      exibir: false
    });
  }

  escutarEvento(callback: Function) {
    this.eventEmitter.subscribe((event) => {
      callback(event);
    });
  }
}
