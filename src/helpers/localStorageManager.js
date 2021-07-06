export const addToLocalStorage = (key, data) =>
{
    if(Array.isArray(data) || typeof data === 'object')
    {
        const newData = JSON.stringify(data);
        localStorage.setItem(key, newData);
    }
    else
    {
        localStorage.setItem(key, data);
    }
    
    return getLocalStorageDataByKey(key);
}

export const getLocalStorageDataByKey = key =>
{
    const data = localStorage.getItem(key);

    if(isJson(data))
    {
        return JSON.parse(data);
    }

    return data;
}

const isJson = str =>
{
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
