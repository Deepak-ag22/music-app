export const Song=({song, fun})=>
{

    const showPlayer=()=>{
        fun(true, song);
    }
    return(
        <div className="row">
            <div className="col-4">
                <img src={song.artworkUrl100} alt='song'/>
            </div>
            <div className="col-4">
            {song.artistName} {song.trackName}
            </div>
            <div className="col-4">
                <button onClick={showPlayer} className="btn btn-warning">Play Button</button>
            </div>
            </div>
    )
}