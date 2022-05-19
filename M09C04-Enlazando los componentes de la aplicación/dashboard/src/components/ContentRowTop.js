import React from 'react';
import ContentRowMovies from './ContentRowMovies';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';
import Error404 from './Error404'
import Chart from './Chart';
import {Route, Routes} from "react-router-dom";

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
					<Routes>
						<Route path="/" exact={true} element={<ContentRowMovies />} />
						<Route path="/ContentRow" exact={true} element={<ContentRowMovies />} />
						<Route path="/LastMovie" exact={true} element={<LastMovieInDb />} />
						<Route path="/Genres" exact={true} element={<GenresInDb />} />		
						<Route path="/*" element={<Error404 />} />		
					</Routes>
					<Chart />
				</div>
				{/*<!--End Content Row Top-->*/}
        </React.Fragment>
    )
}
export default ContentRowTop;