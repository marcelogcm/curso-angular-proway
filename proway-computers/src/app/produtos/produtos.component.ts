import { Component, OnInit } from '@angular/core';
import { IProduto } from '../produtos';
import { ProdutosService } from './../produtos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: IProduto[] = [];

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const produtos = this.produtosService.getAll();
    this.route.queryParamMap.subscribe(params => {
      const descricao = params.get('descricao')?.toLowerCase();

      if (descricao) {
        // Use o método filter para filtrar os produtos e atribuir de volta a this.produtos
        this.produtos = produtos.filter(produto =>
          produto.descricao.toLowerCase().includes(descricao)
        );
      } else {
        this.produtos = produtos; // Se não houver descrição, exiba todos os produtos
      }
    });
  }
}

