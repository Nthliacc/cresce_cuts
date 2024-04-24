interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    icon: React.ReactNode;
    onClick: () => void;
}

const IconButton = ({ icon, onClick, className, ...rest }: IconButtonProps) => {
    return (
        <button
            {...rest}
            className={"p-2 rounded-full hover:bg-grayLigth focus:outline-none focus:ring-2 focus:ring-gray-500" + (className ? ` ${className}` : "")}
            onClick={onClick}
        >
            {icon}
        </button>
    );
};
export default IconButton;