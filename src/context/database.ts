import { GoalConfig } from "./context";

export const DB_NAME = 'goalTracker';
export enum Stores { Goals = 'goals' };

const connect = (): IDBOpenDBRequest => {
    return indexedDB.open(DB_NAME);
}

const disconnect = (req: IDBOpenDBRequest): void => {
    req.result.close();
}

export const initDB = (): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        const request = connect();
        request.onupgradeneeded = () => {
            if (!request.result.objectStoreNames.contains(Stores.Goals))
                request.result.createObjectStore(Stores.Goals, { keyPath: 'id' })
        }
        request.onsuccess = () => {
            resolve(true);
            disconnect(request);
        }
        request.onerror = () => {
            reject(false);
            disconnect(request);
        }
    })
}

export const writeToDB = (storeName: Stores, data: GoalConfig[]): Promise<GoalConfig[] | string | null> => {
    return new Promise((resolve, reject) => {
        const request = connect();

        request.onsuccess = () => {
            const tx = request.result.transaction(storeName, 'readwrite');
            const store = tx.objectStore(storeName);
            data.forEach(item => {
                store.put(item);
            })
            resolve(data);
            disconnect(request);
        }

        request.onerror = () => {
            const error = request.error?.message;
            if (error) reject(error);
            else reject('Unknown Error!!')
            disconnect(request);
        }
    })
}

export const getData = (storeName: Stores): Promise<GoalConfig[] | string> => {
    return new Promise((resolve, reject) => {
        const request = connect();

        request.onsuccess = () => {
            const tx = request.result.transaction(storeName, 'readonly');
            const store = tx.objectStore(storeName);
            const res = store.getAll();
            res.onsuccess = () => {
                resolve(res.result);
                disconnect(request);
            }
        }

        request.onerror = () => {
            reject('Something went wrong.')
            disconnect(request);
        }
    })
}

export const clearStore = (storeName: Stores): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        const request = connect();
        request.onsuccess = () => {
            const tx = request.result.transaction(storeName, 'readwrite');
            const store = tx.objectStore(storeName);
            const clearReq = store.clear();

            clearReq.onsuccess = () => {
                resolve(true);
                disconnect(request)
            }

            clearReq.onerror = () => {
                reject(false);
                disconnect(request);
            }
        }
    })
}