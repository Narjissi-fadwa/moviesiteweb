import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import images from '../../../constant/images';
import { useAppContext } from '../../../context';

const Section = ({ name, setName }) => {
    const movieData = useAppContext();
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const filteredMovies = movieData.filter(movie =>
        movie.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-6 bg-gray-900 min-h-screen text-white d-flex flex-column items-center justtify-center w-100">

            <div className='flex gap-4 items-center justify-center flex-col p-6'>
                <h1 className="text-3xl font-bold mb-6 text-center">Type name of movie to search</h1>
                <input className="rounded w-full text-black w-[60vh] py-2 px-5"
                    type="text"
                    placeholder="Search movie..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justtify-center" >
                {filteredMovies.map((movie, index) => (
                    <div key={index}
                        onClick={() => navigate(`/about/${index}/${movie.title}`)}
                        className="bg-gray-800 rounded-lg overflow-hidden shadow-lg w-[20vw] h-[fit-content]">
                        <img className="w-full h-auto" src={movie.image} alt={movie.title} />
                        <h3 className="p-2 font-semibold">{movie.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Section;