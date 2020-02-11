import React from 'react';

function PlaceItem({ place }) {
    return (<li className="place-item">
        <header>
            <div className="place-info">
                <strong>{place.name}</strong>
                <span>{place.description}</span>
            </div>
        </header>
        <p>{place.address}</p>
    </li>);
}

export default PlaceItem;
