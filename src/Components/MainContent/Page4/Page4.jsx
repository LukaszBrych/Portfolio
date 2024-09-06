import './Page4.css'
import InstagramIcon from '/src/assets/instagram-icon.svg';
import EmailIcon from '/src/assets/email-icon.svg';
import GithubIcon from '/src/assets/github-icon.svg';


const Page4 = () => {
    return (
        <div className="main-section-4">
            <div className="top-panel"></div>
            <div className="contact-outside">
                <div className="down-panel">
                    <div className="left-panel-contact">
                        <h2>Chciałbyś podjąć współpracę?</h2>
                        <h3>Skontaktuj się już teraz!</h3> <br/><br/>
                        <div className="contact-description">
                            Jestem otwarty na wszelakie propozycje. Przez tworzenie interfejsów użytkownika, po
                            wykonywanie
                            grafik/logo i obróbkę zdjęć. Jestem w stanie również wykonać strony internetowe, po stronie
                            Front-Endu. <br/><br/>

                            W razie zainteresowania moją ofertą- proszę o kontakt na maila lub prywatną wiadomość na
                            Instagramie. Liczę, że wspólnie stworzymy twój wymarzony produkt. ;)
                        </div>
                    </div>
                    <div className="right-panel-contact">
                        <a href="https://www.instagram.com/lukasheq_">
                            <img src={InstagramIcon} alt=''/>
                            instagram.com/lukasheq_
                        </a> <br/>
                        <a>
                            <img src={EmailIcon} alt=''/>
                            brychlukasz123@gmail.com
                        </a><br/>
                        <a href="https://github.com/LukaszBrych">
                            <img src={GithubIcon} alt=''/>
                            https://github.com/LukaszBrych
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Page4