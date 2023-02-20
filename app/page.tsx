import Movie from "./Movie";
type MovieType = {
  id: number,
  title: string,
  release_date: string,
  gener_ids: [],
  overview: string,
  popularity: number,
  poster_path: string,
}

export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`, {next: {revalidate: 60}})
  const res = await data.json();
  return (
    <main>
      <div className="grid gap-16 grid-cols-fluid">
        {res.results.map((movie: MovieType) => (
          <Movie key={movie.id} id={movie.id} title={movie.title} releaseDate={movie.release_date} poster_path={movie.poster_path}/>
        ))}
      </div>
    </main>
  )
}
