import { useAuth0 } from "@auth0/auth0-react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const LoginButton = (props: ButtonProps) => {
  const { loginWithRedirect } = useAuth0();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (props.onClick) {
      props.onClick(event);
    } else {
      loginWithRedirect();
    }
  };

  return (
    <button onClick={handleClick} className={props.className}>
      {props.children}
    </button>
  );
};

export default LoginButton;
