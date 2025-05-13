import React from "react";

const AddressCard = ({address}) => {

  return (
    
    <div>
      {/* <p>hdfer fhier jfriu jdfie</p> */}
      {/* <h1 className="text-lg font-bold py-4 text-black">Delivery Adress</h1> */}
      <div className="space-y-3">
        <p className="font-semibold">{`${address?.firstName} ${address?.lastName}`}</p>

        <p>
          {`${address?.streetAddress} ${address?.city} ${address?.state} ${address?.zipCode}`}
        </p>

        <div className="space-y-1">
          <p className="font-semibold">Phone Number</p>
          <p>{address?.mobile}</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
