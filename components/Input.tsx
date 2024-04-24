import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type?: string;
    placeholder: string;
}

export default function Input({ type = "text", placeholder, className, ...props }: InputProps) {
    if (type === "file") {
        return (
            <div className={twMerge("w-auto flex flex-col gap-1", className)}>
                <label className="block">
                    <span className="text-gray-700">Escolha um arquivo</span>
                    <div className="relative border border-grayDark rounded-md p-1 mt-1 h-60">
                        <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                        <span className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <Image src="images/upload.svg" alt="upload" width={73} height={51} />
                            <p className="text-md font-medium pt-2">Arraste e solte a imagem aqui ou clique para upload!</p>
                            <p className="font-normal text-sm">Largura X altura recomendada 1000 x 1000px. Tamanho máximo 800KB.</p>
                        </span>
                    </div>
                </label>
            </div>
        );
    }

    return (
        <div className={twMerge("flex flex-col gap-1 w-auto", className)}>
            <label htmlFor={placeholder} className="text-sm text-textGray">{placeholder}</label>
            <input
                id={placeholder}
                type={type}
                className="p-2 border border-grayDark rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                {...props}
            />
        </div>
    );
}