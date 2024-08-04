import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [file, setFile] = useState(null);
    const [transcript, setTranscript] = useState(null);

    return (
        <AppContext.Provider value={{ file, setFile, transcript, setTranscript }}>
            {children}
        </AppContext.Provider>
    );
};