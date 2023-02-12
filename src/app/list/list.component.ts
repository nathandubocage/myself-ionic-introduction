import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  protected $pokemonList!: Observable<any>;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.$pokemonList = this.httpClient.get(
      'https://pokeapi.co/api/v2/pokemon/'
    );
  }
}
