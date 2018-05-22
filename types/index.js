declare type ppm$Callback = Function;

declare module '@fem/file-locking' {
    declare export type LockOptions = {
        lock?: boolean,
        parse?: boolean
    };

    declare export function readFile (name: string, data: any, callback: Function): void;

    declare export function unlockFile (name: string, callback: Function): void;

    declare export function lockFile (name: string, callback: Function): void;
}

declare module '@fem/types' {
    declare export type Callback = ppm$Callback;
}