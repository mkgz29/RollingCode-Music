const keyStorage = "songs";

export function getSongs {
    const data = LocalStorage.getItem(keyStorage);
    if (data) {
    return JSON.parse(data);
} else {
    return [];
};
};