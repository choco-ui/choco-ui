export const Button = ({ children, type = "primary", onClick = () => {} }) => {
  return <button onClick={onClick}>{children}</button>;
};
