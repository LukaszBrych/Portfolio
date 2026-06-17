import './App.css'
import MainContent from "./Components/MainContent/MainContent.jsx";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {LanguageProvider} from './i18n/LanguageContext.jsx';
import SeoHead from './Components/Seo/SeoHead.jsx';

function App() {
    return (
        <LanguageProvider>
            <SeoHead />
            <div className="Font">
                <MainContent/>
            </div>
        </LanguageProvider>
    )
}

export default App
