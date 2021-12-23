import React from 'react'

const Categories = () => {
    return (
        <div className="container">
        	<h2 className="mt-2 pb-0 text-center text-bold" style={{fontSize: "19px", borderBottom: "1px solid green", display: "inline"}}> SHOP BY CATEGORY</h2>
        	<hr className=" w-100" />
        	<div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 gy-5 my-3">
        		
        		<div className="col">
        			<div className="card">
        				<img className="card-image-top" height="70%" width="100%" src="./img/samsung/samsungA12.jpg" alt="" srcset="" />
        				<div className="card-body">
        					<a href="#" className="btn btn-primary w-100">Mobile & Electronics</a>
        				</div>
        			</div>
        		</div>
        		
        		<div className="col">
        			<div className="card">
        				<img src="./img/laptop.jpg" height="70%" width="100%" className="card-image-top" alt="" />
        				<div className="card-body">
        					<a href="#" className="btn btn-primary w-100">Computer & laptop</a>
        				</div>
        			</div>
        		</div>
        		
        		<div className="col">
        			<div className="card">
        				<img src="./img/beauty.jpg" height="70%" width="100%" alt="" className="card-image-top" />
        				<div className="card-body">
        					<a href="#" className="btn btn-primary w-100">Beauty Picks</a>
        				</div>
        			</div>
        		</div>
        		
        		<div className="col">
        			<div className="card">
        				<img src="./img/gameaccess.jpg" height="70%" width="100%" alt="" className="card-image-top" />
        				<div className="card-body">
        					<a href="#" className="btn btn-primary w-100">Game Accessories</a>
        				</div>
        			</div>
        		</div>
        	</div>
        </div>
    )
}

export default Categories
