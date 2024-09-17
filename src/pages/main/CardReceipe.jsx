import React from 'react';
import SingleCard from '../../components/SingleCard';
import { useLoaderData } from 'react-router-dom';

const CardReceipe = () => {
  const cards = useLoaderData();
  
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="my-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold">
          Explore <span className="text-primary">Yummy Recipe</span>
        </h1>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cards.map((item) => (
          <SingleCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CardReceipe;
