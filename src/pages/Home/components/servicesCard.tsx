import React, { FC } from 'react';
import { Service } from '../data/servicesData';
import './servicesCard.css'

interface CardProps {
    service: Service;
    handleSelection: (id: number, isSelected: boolean) => void;
}

const Card: FC<CardProps> = ({ service, handleSelection }) => {
    const [selected, setSelected] = React.useState(false);

    const toggleSelection = () => {
        setSelected(!selected);
        handleSelection(service.id, !selected);
    }

    return (
        <div className="container">
            <div className="card mb-3">
                <div className="card-body d-flex justify-content-between align-items-center">
                    <div>
                        <h5 className="card-title">{service.name}</h5>
                        <p className="card-text text-muted">{service.description}</p>
                    </div>
                    <div className="text-center">
                        <h5 className="price">{service.price} <span className="currency">€</span></h5>
                    </div>
                    <div className="text-end d-flex align-items-center gap-2">
                        <input
                            className="check-input"
                            type="checkbox"
                            checked={selected}
                            onChange={toggleSelection}
                        />
                        <h5 className="add">Afegir</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
