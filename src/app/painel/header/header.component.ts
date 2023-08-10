import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { UsuarioLogado } from 'src/app/auth/usuario-logado.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public usuarioLogado: UsuarioLogado | null;
  constructor(private authService: AuthService,
    private router: Router,
    // private modalTarefaService: ModalTarefaService
    ){
      this.usuarioLogado = this.authService.obterUsuarioLogado()

  }


  deslogar(){
    this.authService.deslogar();
    this.router.navigateByUrl('/login');
  }
  abrirModalAdicionarTarefa() {
    // this.modalTarefaService.exibirModal();
  }
}
