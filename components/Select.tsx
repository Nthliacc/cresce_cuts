'use client';
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    options: { label: string, value: string }[];
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ label, options, value, onChange, ...props }: SelectProps) => {
    return (
        <div className="flex flex-col w-full">
            <label className="font-regular"> {label} </label>
            <select
                {...props}
                value={value}
                onChange={onChange}
                className="block w-full p-2 border border-grayDark rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            >
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
};

export default Select;