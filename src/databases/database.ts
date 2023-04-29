import { MMKV } from 'react-native-mmkv';

//mmkv
const DATABASE_USERS = 'user';
const DATABASE_TOKENS = 'token';

export const storageUser = new MMKV({ id: `${DATABASE_USERS}` });
export const storageToken = new MMKV({ id: `${DATABASE_TOKENS}` });

export { DATABASE_USERS, DATABASE_TOKENS };
