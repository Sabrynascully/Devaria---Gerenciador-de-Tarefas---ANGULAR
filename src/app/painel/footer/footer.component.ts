import { Component } from '@angular/core';
import { ModalTarefaService } from '../shared/services/modal-tarefa.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  public anoAtual: number = new Date().getFullYear();
  constructor(private modalTarefaService: ModalTarefaService) { }


  abrirModalTarefa() {
    this.modalTarefaService.exibirModal();
  }

}
