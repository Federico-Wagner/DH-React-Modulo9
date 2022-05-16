import React from 'react';
import Metric from './metric'

function ContentRowMovies() {
  return (
    <React.Fragment>
      <div className="row">
        <Metric 
          titulo="Movies in Data Base" 
          cifra="21" 
          colorDeBorde="card border-left-primary shadow h-100 py-2" 
          icono="fas fa-film fa-2x text-gray-300">
        </Metric>
        <Metric 
          titulo="Total awards" 
          cifra="79" 
          colorDeBorde="card border-left-success shadow h-100 py-2" 
          icono="fas fa-award fa-2x text-gray-300">
        </Metric>
        <Metric 
          titulo="Actors quantity" 
          cifra="49" 
          colorDeBorde="card border-left-warning shadow h-100 py-2" 
          icono="fas fa-user fa-2x text-gray-300">
        </Metric>
      </div>
    </React.Fragment>
  );
}

export default ContentRowMovies;