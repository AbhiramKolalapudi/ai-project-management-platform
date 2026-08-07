import type { User } from "../types/user";

type WelcomeProps = {
    user: User;
};

function Welcome({ user }: WelcomeProps) {
    return (
        <div>
            <h1>Dashboard</h1>

            <h2>Hello, {user.name}!</h2>

            <p>{user.email}</p>

            <hr />
        </div>
    );
}

export default Welcome;