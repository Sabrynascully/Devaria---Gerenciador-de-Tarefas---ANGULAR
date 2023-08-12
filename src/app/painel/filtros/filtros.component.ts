import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Status } from '../shared/models/status.model';
import { StatusEnum } from '../shared/enums/status.enum';
import { Filtro } from '../shared/models/filtro.model';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {

  public modalAberto: boolean = false;
  public filtro: Filtro = new Filtro();
  public listaDeStatus: Status[] = StatusEnum.todosStatus();
  @Output('filtrarTarefas') filtrarTarefasEmitter: EventEmitter<Filtro> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleModal() {
    this.modalAberto = !this.modalAberto;
  }

  filtrarTarefas() {
    this.filtrarTarefasEmitter.emit(this.filtro);
    this.modalAberto = false;
  }

  limparFiltro() {
    this.filtro.periodoDe = '';
    this.filtro.periodoAte = '';
    this.filtro.status = StatusEnum.TODAS;
    this.filtrarTarefas();
  }

}
