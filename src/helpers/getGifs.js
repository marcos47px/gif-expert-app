export const getGifs = async( category) => {
    //Con encode evitamos espacios
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=7WOp49UNplopA6iVbcRBPz3nan6UpIc0`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs =  data.map( img => {
        return{
            id:img.id,
            title:img.title,
            url: img.images?.downsized_medium.url //Con ? nos aseguramos qu sean imagenes
        }
    })

    return gifs;
}