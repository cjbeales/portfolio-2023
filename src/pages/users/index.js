import Layout from "@/components/Layout";
import { Container } from "@/components";
import styles from './users.module.scss';

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { users: data }
    }

}

const Users = ({ users }) => {
    return (
        <Layout>
            <Container variant="large">
                <section>
                    <h1>All users</h1>
                    <div className={styles.userGrid}>

                        {users.map(({ id, name, username, email, phone }) => (
                            <div key={id} className={styles.user}>
                                <a>
                                    <h3 className="margin--8">{name}</h3>
                                    <ul className="non-styled">
                                        <li>Username: {username}</li>
                                        <li>Email: {email}</li>
                                        <li>Phone: +{phone}</li>
                                    </ul>
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
            </Container>
        </Layout>
    )
}

export default Users;