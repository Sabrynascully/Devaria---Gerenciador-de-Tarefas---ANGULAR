export class UsuarioLogado {
  public nome: string;
  public email: string;
  public token: string;

  constructor(nome: string, email: string, token: string) {
      this.nome = nome;
      this.email = email;
      this.token = token;
  }
}
