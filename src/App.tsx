import React, { useState, useCallback } from 'react';
import { Layout } from './components/Layouts';
import { SearchField } from './components/organisms';
import { Hotels } from './types/hotels';

const App: React.FC = () => {
    const [ hotels, setHotels ] = useState<Hotels>([])
    console.log(hotels);

    const handleHotels = useCallback((fetchedHotels: Hotels) => {
        setHotels([...fetchedHotels])
    },[setHotels])

    return (
        <Layout>
            <SearchField
                handleHotels={handleHotels}
            />
        </Layout>
    );
}

export default App;
