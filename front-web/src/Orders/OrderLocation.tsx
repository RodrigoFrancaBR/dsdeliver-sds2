import { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import AsyncSelect from 'react-select/async'
import { fetchLocalMapBox } from '../api'
import { OrderLocationData } from './types'

const initalPosition = {
    lat: -22.8862099,
    lng: -43.285517
}


type Place = {
    label?: string,
    value?: string,
    position: {
        lat: number,
        lng: number
    }
}

type Props = {
    onChangeLocation: (location: OrderLocationData) => void
}

/**
 * Local aonde estou
 */

function OrderLocation({ onChangeLocation }: Props) {
    /**
     * inicializando apenas a posição 
     */
    const [address, setAddress] = useState<Place>({
        position: initalPosition
    })


    const loadOptions = async (inputValue: string, callback: (places: Place[]) => void) => {
        const response = await fetchLocalMapBox(inputValue);

        const places = response.data.features.map((item: any) => {
            return ({
                label: item.place_name,
                value: item.place_name,
                position: {
                    lat: item.center[1],
                    lng: item.center[0]
                },
                place: item.place_name,
            });
        });

        callback(places);
    };

    const handleChangeSelect = (place: Place) => {
        setAddress(place);
        onChangeLocation({
            latitude: place.position.lat,
            longitude: place.position.lng,
            // place pode ser undefined por isso usa-se o ! para forçar que tem valor no label do obj place.
            address: place.label!
        });
    };

    return (
        <div className="order-location-container">
            <div className="order-location-content">
                <h3 className="order-location-title">
                    Selecione onde o pedido deve ser entregue:
                </h3>
                <div className="filter-container">
                    <AsyncSelect
                        placeholder="Digite um endereço para entregar o pedido"
                        className="filter"
                        loadOptions={loadOptions}
                        onChange={value => handleChangeSelect(value as Place)}
                    />
                </div>
                <MapContainer center={address.position} zoom={13} scrollWheelZoom key={address.position.lat}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={address.position}>
                        <Popup>Minha localização. <br /> Minha casa.</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    )
}

export default OrderLocation;