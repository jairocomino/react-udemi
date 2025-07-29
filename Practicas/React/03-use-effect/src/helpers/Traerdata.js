// Función async/await
export const traerData = async (endpoint) => {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

// Función con promesas
export const getData = (endpoint) => {
    return fetch(endpoint)
        .then(response => response.json())
        .then(data => data.data)
        .catch(error => {
            console.error('Error fetching users:', error);
            return [];
        });
}