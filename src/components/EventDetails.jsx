import React from "react";
import { useParams } from "react-router-dom";

function EventDetails() {
  const { name, id, description, price , img  } = useParams();
  console.log("hedha name",name);
  console.log("hedhi id",id);
  console.log("hedha name",description);
  console.log("hedhi id",price);

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Image Section (Left) */}
        <div className="col-md-4">
          <img
            src={`/images/${img}`} // replace with the actual path to your image src="/images/event3.jpg"
            alt={name}
            className="img-fluid"
          />
        </div>

        {/* Details Section (Right) */}
        <div className="col-md-8">

          <h1>{id}</h1>
          <div>Description : </div>
          <p>{description}</p>
          <div>Price:</div>
          <p>{price}</p>
          {/* Add more details as needed */}
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
