const keyStorage = "songs";

export function getSongs {
    const data = LocalStorage.getItem(keyStorage);
    return data ? JSON.parse(data) : [];
}