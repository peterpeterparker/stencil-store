import { ObservableMap } from './types';
export declare const createStore: <T extends {
    [key: string]: any;
}>(defaultState?: T, shouldUpdate?: (newV: any, oldValue: any, prop: keyof T) => boolean) => ObservableMap<T>;
