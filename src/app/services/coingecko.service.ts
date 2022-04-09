import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coin } from '../types/coin';

@Injectable({
    providedIn: 'root',
})
export class CoingeckoService {
    currency = 'usd';
    currency_symbol = '$';

    coins: Coin[] = [];
    editableCoins: Coin[] = [];

    constructor(private http: HttpClient) { }

    getCoinData(): void {
        this.http
            .get<Coin[]>(this.getApiUrl(this.currency))
            .subscribe((res) => {
                this.coins = res;
                this.editableCoins = this.coins;
            });
    }

    private getApiUrl(currency: string) {
        return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
    }
}
