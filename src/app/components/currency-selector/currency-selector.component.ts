import { Component, OnInit } from '@angular/core';
import { CoingeckoService } from 'src/app/services/coingecko.service';
import { Currency } from 'src/app/types/currency';

@Component({
    selector: 'app-currency-selector',
    templateUrl: './currency-selector.component.html',
    styleUrls: ['./currency-selector.component.scss'],
})
export class CurrencySelectorComponent implements OnInit {
    currencies: Currency[] = [
        {
            label: 'usd',
            symbol: '$',
        },
        {
            label: 'eur',
            symbol: '€',
        },
    ];

    currency_index = 0;

    constructor(private coingeckoService: CoingeckoService) {}

    ngOnInit(): void {}

    refreshCoins(): void {
        this.coingeckoService.currency =
            this.currencies[this.currency_index].label;
        this.coingeckoService.currency_symbol = this.currencies[this.currency_index].symbol;
        this.coingeckoService.getCoinData();
    }
}
