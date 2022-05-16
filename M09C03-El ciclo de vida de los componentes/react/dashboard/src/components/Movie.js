import React, { Component } from 'react';

class Movie extends Component{
	constructor(){
		super();
		this.state = {
            moviesList : []
        }
	}

	componentDidMount(){
		fetch('/api/movies')
			.then((respon)=>{
				return respon.json()
			})
			.then(movies=>{
				this.setState({moviesList: movies.data })
			})
			.catch(err => {console.log(err)}) 
	}

	render(){
    return(
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">All the movies in the Database</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<p>{this.state.movieList}</p>
								<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Titulo</th>
                                            <th>Calificación</th>
                                            <th>Premios</th>
                                            <th>Duración</th>
										</tr>
									</thead>
									<tfoot>
										<tr>
                                            <th>Id</th>
                                            <th>Titulo</th>
                                            <th>Calificación</th>
                                            <th>Premios</th>
                                            <th>Duración</th>
										</tr>
									</tfoot>
									<tbody>	
									{this.state.moviesList.map((movie, i)=>{
										return(
											<tr key={i}>
												<th>{i}</th>
												<th>{movie.title}</th>
												<th>{movie.rating}</th>
												<th>{movie.awards}</th>
												<th>{movie.length}</th>
											</tr>
										)	
										})
									}							
									</tbody>
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
    )}
}
export default Movie;