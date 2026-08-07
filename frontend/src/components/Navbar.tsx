import type { User } from "../types/user";

type NavbarProps = {
    user: User;
    onLogout: () => void;
};

function Navbar({ user, onLogout }: NavbarProps) {
    return (
        <nav>
            <h2>AI Project Manager</h2>

            <div>
                <span>{user.name}</span>

                <button onClick={onLogout}>
                    Logout
                </button>
            </div>
        </nav>
    );
}

export default Navbar;