import { faLinkedinIn, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const contactData = [
    {
        title: 'Instagram',
        linkText: `Follow me`,
        linkHref: `https://www.instagram.com/ux.connor/`,
        icon: faInstagram
    },
    {
        title: 'GitHub',
        linkText: `Inspect my code`,
        linkHref: `https://github.com/cjbeales?tab=repositories`,
        icon: faGithub
    },
    {
        title: 'LinkedIn',
        linkText: `Verify I'm real`,
        linkHref: `https://www.linkedin.com/in/connor-beales-a8169692/`,
        icon: faLinkedinIn
    },
    {
        title: 'Email',
        linkText: `Ping me an email`,
        linkHref: `mailto:connorj.beales@gmail.com`,
        icon: faEnvelope
    }
];