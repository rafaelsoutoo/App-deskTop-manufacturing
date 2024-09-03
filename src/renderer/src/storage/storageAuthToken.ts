const Store = require('electron-store');
const store = new Store();

import { AUTH_STORAGE } from "./storageConfig";

// Salvar token de autenticação
export async function storageAuthTokenSave(token: string) {
  store.set(AUTH_STORAGE, token);
}

// Obter token de autenticação
export async function storageAuthTokenGet() {
  const token = store.get(AUTH_STORAGE);
  return token;
}

// Remover token de autenticação
export async function storageAuthTokenRemove() {
  store.delete(AUTH_STORAGE);
}