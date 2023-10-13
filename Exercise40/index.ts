function make_album(artist: String, title: string,tracks?:number):
{artist: String, title: string,tracks?:number}
{
    const album = {
        artist,
        title,
        tracks
        
    };
    return album;
}

const album1 = make_album('Vitel Signs', 'Hum Tum');
const album2 = make_album('Artist2', 'Album2,12');
const album3 = make_album('Artist1', 'Album3,8');
console.log(album1);
console.log(album2);
console.log(album3);