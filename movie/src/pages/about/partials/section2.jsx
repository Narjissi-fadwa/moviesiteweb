import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppContext } from '../../../context';

const Section2 = () => {
  const movieData = useAppContext();
  const { index, title } = useParams();
  const navigate = useNavigate();
  const movie = movieData[Number(index)];
  
  return (
      <div className="bg-gray-900 min-h-screen text-white flex items-center justify-center p-6">
          <div className="flex flex-col md:flex-row items-start justify-center max-w-4xl w-full mx-auto bg-white/20 text-white p-5 rounded-2xl">
              <img src={movie.image} alt={movie.title} className="w-full md:w-64 h-auto object-cover rounded-xl mb-4 md:mb-0 md:mr-8"/>
              <div>
                  <h1 className="text-3xl font-bold mb-8">{movie.title}</h1>
                  <p className="text-lg whitespace-pre-line mb-4 text-white">
                      {movie.description}
                  </p>
                  <p className="text-gray-500">Date de sortie: {movie.releaseDate}</p>
              </div>
          </div>
      </div>
  );
};

export default Section2;