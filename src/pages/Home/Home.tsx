import React from 'react';
import './Home.css';
import Card from './components/servicesCard';
import { servicesData } from './data/servicesData';
import useSelectedServices from './hooks/useSelectedServices';

const HomePage: React.FC = () => {
    const { total, updateTotal } = useSelectedServices();

    // User service selection
    const handleSelection = (id: number, isSelected: boolean) => {
        const service = servicesData.find((s) => s.id === id);

        if (service) {
            updateTotal(service.price, isSelected);
        }
    }

    return (
        <div className="container py-5">
            <nav className="navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand text-start fw-bold">
                    <img src="/src/assets/logo.png" width="35" height="35" alt="Logo" />
                        Frontender.itacademy</a>
                </div>
            </nav>
            <div className="heading align-items-center">
                <h1 className="mb-4 text-center">Aconsegueix la millor qualitat</h1>
            </div>
            <div className="cards-section">
                {servicesData.map((service) => (
                    <Card key={service.id} service={service} handleSelection={handleSelection} />
                ))}
            </div>
            <div className="total-price-container">
                <h3 className="total-price">
                    Preu pressupostat: <span className="total-num">{total} <span className="currency">€</span></span>
                </h3>
            </div>
        </div>
    )
}

export default HomePage;