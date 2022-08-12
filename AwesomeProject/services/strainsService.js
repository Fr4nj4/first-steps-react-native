export const getStrains = () => {
    return fetch('http://localhost:3002/strains')
        .then((response) => response.json())
        .then((json) => {
            return json.movies;
        })
        .catch((error) => {
            console.error(error);
        });
};