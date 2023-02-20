import Image from 'next/image';
import Link from 'next/link';
import {FC} from 'react';

type MovieProps = {
  id: number,
  title: string;
  releaseDate: string,
  poster_path: string
}

const Movie:FC<MovieProps> = ({id,title, releaseDate, poster_path}) => {
  const imgPath = 'https://image.tmdb.org/t/p/original';
  return (
    <div>
      <h3 className='text-lg'>{title}</h3>
      <span>Release date: {releaseDate}</span>
      <Link href={`/${id}`}>
        <Image src={imgPath + poster_path} alt={title} width={600} height={800}/>
      </Link>
    </div>
  )
}

export default Movie;