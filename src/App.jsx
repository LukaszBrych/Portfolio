import './App.css'
import MainContent from "./Components/MainContent/MainContent.jsx";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {LanguageProvider} from './i18n/LanguageContext.jsx';

function App() {
    return (
        <LanguageProvider>
            <div className="Font">
                <MainContent/>
            </div>
        </LanguageProvider>
    )
}

export default App
