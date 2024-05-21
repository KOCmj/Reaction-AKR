import { useAuth0 } from "@auth0/auth0-react";
interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}


const LogoutButton = (props: ButtonProps) => {
    const { logout, isAuthenticated } = useAuth0();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (props.onClick) {
            props.onClick(event);
        } else {
            logout();
        }
    };

    return ( 
        isAuthenticated && (
            <button onClick={handleClick} className={props.className}>
                {props.children}
            </button>
        )
    );
};

export default LogoutButton;

