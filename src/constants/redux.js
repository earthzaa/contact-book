import storage from 'redux-persist/lib/storage';

export const PERSIST_CONFIG = {
    key: 'root-v1',
    storage,
    whitelist: ['contact'],
};