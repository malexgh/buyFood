import React, { useState, useEffect } from 'react';
import PlaceForm from '../components/PlaceForm';
import PlaceItem from '../components/PlaceItem';
import api from '../services/api';
import './Main.scss';

export default function Main({ location }) {
    const [places, setPlaces] = useState([]);
    const token = location.state.token;

    useEffect(() => {
        async function loadPlaces() {
            const res = await api.get('/api/places', {
                headers: { "Authorization": token }
            });
            if (res.status === 200) {
                setPlaces(res.data);
            }
        }
        loadPlaces();
    }, [token]);

    async function handleAddPlace(data) {
        const res = await api.post('/api/places', data, {
            headers: { "Authorization": token }
        });
        if (res.status === 201) {
            setPlaces(prevState => [...prevState, res.data]);
        }
    }

    return (
        <div className="Main">
            <aside>
                <strong>Cadastrar</strong>
                <PlaceForm onSubmit={handleAddPlace} />
            </aside>
            <main>
                <ul>
                    {
                        places.map(place => <PlaceItem key={place._id} place={place} />)
                    }
                </ul>
            </main>
        </div>
    );
}
