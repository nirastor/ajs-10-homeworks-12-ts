import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    calculateTotalPrice(): number {
        return this._items.reduce((sum, current) => sum + current.price, 0)
    }

    calculatePriceWithDiscount(discount: number): number {
        if (discount < 0 || discount > 100) {
            throw new Error ('Скидка может быть от 0 до 100')
        }
        return this.calculateTotalPrice() * (100 - discount) / 100;
    }

    remove(id: number): boolean {
        const index = this._items.findIndex((item) => item.id === id);
        if (index === -1 ) {
            return false;
        }
        this._items.splice(index, 1);
        return true;
    }
}