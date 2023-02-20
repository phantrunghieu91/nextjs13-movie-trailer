import Image from "next/image";

const MovieDetail = async ({params}) => {
  const {movie_id} = params;
  const imgPath = 'https://image.tmdb.org/t/p/original';
  const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.API_KEY}`)
  const res = await data.json();
  return (
    <div>
      <h1>{res.title}</h1>
      <h3>{res.release_date}</h3>
      <p>Runtime: {res.runtime} minutes</p>
      <h5 className="inline-block bg-green-500 px-2 py-2 text-sm rounded text-white">{res.status}</h5>
      <Image className='w-full' src={imgPath + res.backdrop_path} alt={res.title} width={600} height={600} priority/>
    </div>
  )
}

export default MovieDetail