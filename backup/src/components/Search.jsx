import { useRef } from "react";

export const Search=({fn})=>{
    const artist=useRef()
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          fn(artist.current.value);
        }
      };
    return(
    <>
    <label>Artist Name</label>
    <input ref={artist} type='text' className='form-control' placeholder='Search Artist wise song' 
    onKeyDown={handleKeyDown}/>
    <button className='btn btn-outline-warning' onClick={()=>{
        fn(artist.current.value);
    }}>Search it</button>
    </>
    );
}