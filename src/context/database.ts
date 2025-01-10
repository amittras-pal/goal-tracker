import { GoalConfig } from "./context";

let request: IDBOpenDBRequest;
let db: IDBDatabase;
let version = 1;

export const DB_NAME = 'goalTracker';
export enum Stores {
    Goals = 'goals'
}

export const initDB = (): Promise<boolean> => {
    return new Promise(resolve => {
        request = indexedDB.open(DB_NAME);
        request.onupgradeneeded = () => {
            db = request.result;
            if (!db.objectStoreNames.contains(Stores.Goals)) {
                db.createObjectStore(Stores.Goals, { keyPath: 'id' })
            }
        }

        request.onsuccess = () => {
            db = request.result;
            version = db.version;
            resolve(true);
        }

        request.onerror = () => {
            resolve(false);
        }
    })
}

export const writeToDB = (storeName: Stores, data: GoalConfig[]): Promise<GoalConfig[] | string | null> => {
    return new Promise(resolve => {
        request = indexedDB.open(DB_NAME, version);

        request.onsuccess = () => {
            db = request.result;
            const tx = db.transaction(storeName, 'readwrite');
            const store = tx.objectStore(storeName);
            data.forEach(item => {
                store.put(item);
            })
            resolve(data)
        }

        request.onerror = () => {
            const error = request.error?.message;
            if (error) resolve(error);
            else resolve('Unknown Error!!')
        }
    })
}

export const getData = (storeName: Stores): Promise<GoalConfig[] | string> => {
    return new Promise(resolve => {
        request = indexedDB.open(DB_NAME);
        request.onsuccess = () => {
            db = request.result;
            const tx = db.transaction(storeName, 'readonly');
            const store = tx.objectStore(storeName);
            const res = store.getAll();
            res.onsuccess = () => {
                resolve(res.result);
            }
        }

        request.onerror = () => {
            resolve('Something went wrong.')
        }
    })
}