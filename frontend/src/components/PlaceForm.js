import React, { useState, useEffect } from 'react';

function DevForm({ onSubmit }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLatitude(latitude);
                setLongitude(longitude);
            },
            (err) => {
                console.log(err);
            },
            {
                timeout: 30000,
            }
        );
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        await onSubmit({
            name,
            description,
            address,
            //latitude,
            //longitude,
        });
        setName('');
        setDescription('');
        setAddress('');
        //setLatitude('');
        //setLongitude('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-block">
                <label htmlFor="name">Nome</label>
                <input
                    name="name"
                    id="name"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div className="input-block">
                <label htmlFor="description">Descrição</label>
                <input
                    name="description"
                    id="description"
                    required
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
            </div>
            <div className="input-block">
                <label htmlFor="address">Endereço</label>
                <input
                    name="address"
                    id="address"
                    required
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                />
            </div>
            <div className="input-group">
                <div className="input-block">
                    <label htmlFor="latitude">Latitude</label>
                    <input
                        type="number"
                        name="latitude"
                        id="latitude"
                        required
                        value={latitude}
                        onChange={e => setLatitude(e.target.value)}
                    />
                </div>
                <div className="input-block">
                    <label htmlFor="longitude">Longitude</label>
                    <input
                        type="number"
                        name="longitude"
                        id="longitude"
                        required
                        value={longitude}
                        onChange={e => setLongitude(e.target.value)}
                    />
                </div>
            </div>
            <button type="submit">Salvar</button>
        </form>
    );
}

export default DevForm;
