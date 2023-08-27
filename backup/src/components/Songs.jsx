import { Song } from "./Song"

export const Songs=({allsongs, fun})=>{
    return(
        <>
        {allsongs.map((currentSong, index)=><Song key={index} song={currentSong} fun={fun}/>)}
        </>
    )
}