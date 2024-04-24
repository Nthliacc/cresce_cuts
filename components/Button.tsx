interface ButtonProps
    extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: React.ReactNode;
    color?: "primary" | "secondary";
};

const Button = ({ children, color = "primary", ...rest }: ButtonProps) => {
    const colorClasses = {
        primary: "bg-blue text-white hover:bg-opacity-80",
        secondary: "bg-white text-blue border border-blue hover:bg-grayLigth hover:text-blue hover:border-blue"
    };
    return (
        <button
            className={`font-light p-2 m-2 rounded w-full ${colorClasses[color]}`}
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button;