import {Purchase} from "@/lib/purchases/data/purchases";
import {purchases} from "@/lib/purchases/data/purchases";

export type MakeKeyOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export function addPurchases(purchase: Purchase) {
    purchases.push(purchase);
}

export function deletePurchase(purchase: Purchase) {
    const ind = purchases.findIndex(p => p.id === purchase.id);
    purchases.splice(ind, 1);
}