import { Container, SectionTitle } from "@/components"
import styles from './contact.module.scss'
import { ContactItem } from "./ContactItem"
import { contactData } from "./contactData"


export const ContactSection = () => {
    return (
        <section id="contact" className="dark">
            <Container variant="large">
                <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <SectionTitle title={'Say hi'} subContent={`Don’t be shy, get in touch and let’s have a chat!`} />
                </div>
                <div className={styles.contactGrid}>
                    {contactData.map(({ title, linkText, linkHref, icon }) => (
                        <ContactItem icon={icon} title={title} linkText={linkText} linkHref={linkHref} />
                    ))}
                </div>
            </Container>
        </section>
    )
}