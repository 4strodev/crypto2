import { Component, OnInit } from '@angular/core';
import { CoingeckoService } from 'src/app/services/coingecko.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
    labels: string[] = [
        '#',
        'Coin',
        '',
        'Price',
        'Price change',
        'Total volume',
    ];

    constructor(public coingeckoService: CoingeckoService) {}

    ngOnInit(): void {
        this.coingeckoService.getCoinData();
    }
}
