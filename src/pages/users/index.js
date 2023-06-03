import Layout from "@/components/Layout";

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
            <div>
                <h1>All users</h1>
                {users.map(user => (
                    <div key={user.id}>
                        <a>
                            <h3>{user.name}</h3>
                        </a>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export default Users;