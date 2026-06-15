import './Page4.css'
import InstagramIcon from '/src/assets/instagram-icon.svg';
import EmailIcon from '/src/assets/email-icon.svg';
import GithubIcon from '/src/assets/github-icon.svg';
import {PERSON, SECTIONS} from '../../../data/siteSeo.js';
import {useLanguage} from '../../../i18n/LanguageContext.jsx';


const Page4 = () => {
    const {t} = useLanguage();
    const {contact} = t;

    return (
        <div className="main-section-4">
            <div className="top-panel"></div>
            <div className="contact-outside">
                <div className="down-panel">
                    <div className="left-panel-contact">
                        <h2 id={SECTIONS.contact.headingId}>{contact.heading}</h2>
                        <h3>{contact.subheading}</h3>
                        <p className="contact-description">
                            {contact.description}
                        </p>
                    </div>
                    <address className="right-panel-contact">
                        <a href={PERSON.instagram} rel="me noopener noreferrer" target="_blank">
                            <img src={InstagramIcon} alt={contact.instagramAlt} />
                            instagram.com/lukasheq_
                        </a>
                        <a href={`mailto:${PERSON.email}`}>
                            <img src={EmailIcon} alt={contact.emailAlt} />
                            {PERSON.email}
                        </a>
                        <a href={PERSON.github} rel="me noopener noreferrer" target="_blank">
                            <img src={GithubIcon} alt={contact.githubAlt} />
                            github.com/LukaszBrych
                        </a>
                    </address>
                </div>
            </div>

        </div>
    )
}

export default Page4
