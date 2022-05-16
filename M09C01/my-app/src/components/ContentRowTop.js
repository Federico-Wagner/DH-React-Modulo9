import ContentRowMovies from './contentRowTopComponents/ContentRowMovies'
import LastMovieInDb from './contentRowTopComponents/LastMovieInDb'
import GenresInDb from './contentRowTopComponents/GenresInDb'

import React from 'react';

function ContentRowTop() {
    return (
		<React.Fragment>
			<div className="container-fluid">
				<div className="d-sm-flex align-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
				</div>
				<ContentRowMovies></ContentRowMovies>
				<div className="row">
					<LastMovieInDb></LastMovieInDb>
					<GenresInDb></GenresInDb>
				</div>
			</div>
		</React.Fragment>
    );
  }
  
  export default ContentRowTop;
  