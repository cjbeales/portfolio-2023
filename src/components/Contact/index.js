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
                        <div
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-offset="0"
                        >
                            <ContactItem icon={icon} title={title} linkText={linkText} linkHref={linkHref} />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}