import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduto } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {
  produto: IProduto | undefined;
  id: number | undefined;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Acessar o parâmetro 'id' da URL
    // Acessar o parâmetro 'id' da URL
const idFromRoute = this.route.snapshot.paramMap.get('id');
if (idFromRoute !== null) {
  const parsedId = parseInt(idFromRoute, 10);
  if (!isNaN(parsedId)) {
    this.id = parsedId;
    // Agora você pode usar 'this.id' para buscar os detalhes do produto
    this.produto = this.produtosService.getOne(this.id);
  } else {
    // Redirecionar para a página de erro se 'id' não for um número válido
    this.router.navigate(['/nao-encontrada']);
  }
} else {
  // Redirecionar para a página de erro se 'id' for nulo
  this.router.navigate(['/nao-encontrada']);
}


  }
}
