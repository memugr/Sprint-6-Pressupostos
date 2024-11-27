import { useContext } from 'react';
import { HomeContext } from '../contexts/HomeContext';

const useSelectedServices = () => {
    const context = useContext(HomeContext);

    if (!context) {
        throw new Error('useSelectedServices must be used within a HomeProvider');
    }

    return context;
}

export default useSelectedServices;