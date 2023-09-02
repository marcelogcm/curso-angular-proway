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
  quantidade = 1;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idFromRoute = this.route.snapshot.paramMap.get('id');

    if (idFromRoute !== null) {
      const parsedId = parseInt(idFromRoute, 10);

      if (!isNaN(parsedId)) {
        this.id = parsedId;
        this.produto = this.produtosService.getOne(this.id);

        if (!this.produto) {
          // Se o produto com esse ID não foi encontrado, redirecione
          this.router.navigate(['/nao-encontrada']);
        }

      } else {
        // Se o ID não for um número, redirecione
        this.router.navigate(['/nao-encontrada']);
      }

    } else {
      // Se o ID for nulo, redirecione
      this.router.navigate(['/nao-encontrada']);
    }
  }

}
