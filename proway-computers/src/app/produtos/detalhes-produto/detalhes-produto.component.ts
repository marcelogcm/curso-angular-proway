import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit{
  produto: IProduto | undefined;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute

  ){}

  ngOnInit(): void {

    // Acessar o parâmetro 'id' da URL
  this.route.paramMap.subscribe(params => {
    const id = params.get('id'); // + converte para número, se necessário
    // Agora você pode usar 'id' para buscar os detalhes do produto
  });

  }

}
