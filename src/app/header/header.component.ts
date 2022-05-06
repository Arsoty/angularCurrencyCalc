import { Component, OnInit } from '@angular/core';
import { DataType } from '../workspace/workspace.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  url = 'https://open.er-api.com/v6/latest/UAH';
  data: DataType = {};
  hrnToEur: number = 0;
  hrnToUsd: number = 0;

  async getRates(): Promise<void> {
    const response = await fetch(this.url).then((data) => data.json());
    this.data = response.rates;
    this.hrnToEur = +(1 / this.data['EUR']).toFixed(2);
    this.hrnToUsd = +(1 / this.data['USD']).toFixed(2);
  }

  ngOnInit(): void {
    this.getRates();
  }
}
