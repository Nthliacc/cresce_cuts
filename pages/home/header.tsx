'use client';
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();

    const handleNewDiscount = () => {
        router.push("/register");
    };

    return (
        <div className="flex justify-between w-full px-4 py-6 gap-4">
            <h2 className="text-xl">Descontos Cadastrados</h2>
            <Button 
                className="bg-blue text-white py-2 px-4 rounded w-80"
                onClick={handleNewDiscount}
            >
                Novo desconto
            </Button>
        </div>
    );
}