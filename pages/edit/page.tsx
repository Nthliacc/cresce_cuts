'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Button from "@/components/Button";
import Switch from "@/components/Switch";
import { editProduct } from "@/services/serviceProduct";
import { useProducts } from "@/services/productsContext";

export default function Register() {
    const { selectedProduct } = useProducts();
    const router = useRouter();
    const [formData, setFormData] = useState<ProductType | null>(
        selectedProduct
    );

    if (!formData) {
        return null;
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        editProduct(formData);
        router.push("/");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name === "discountType") {
            setFormData({
                ...formData,
                discountType: {
                    value: value as "0" | "1" | "2" | "3",
                    label: name as "Selecione" | "Leve + Pague Menos" | "Percentual" | "De / Por",
                },
            });
            return;
        } else{
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (typeof reader.result === "string") {
                    setFormData({
                        ...formData,
                        image: reader.result,
                    });
                }
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex min-h-screen flex-col items-start p-8 w-full">
            <div className="flex flex-col pb-4">
                <h1 className="text-2xl font-bold">Lista de descontos</h1>
                <p className="text-lg">Loja: Super João - Nova loja online</p>
            </div>
            <div className="w-full p-4 bg-white flex flex-col border-2 rounded-md text-textGray border-grayDark">
                <div className="flex flex-row justify-between py-2  border-b-2 border-grayDark">
                    <h1 className="text-xl font-normal">Formulário cadastro desconto</h1>
                    <Switch label="Ativo"
                        onClick={() => setFormData({
                            ...formData,
                            isActivated: !formData.isActivated,
                        })}
                        active={formData.isActivated} />
                </div>
                <form className="flex flex-col space-y-4 gap-2 py-4" onSubmit={handleSubmit}>
                    <Input
                        name="title"
                        value={formData.title}
                        placeholder="Nome do desconto"
                        onChange={handleChange}
                    />
                    <Input
                        name="description"
                        value={formData.description}
                        type="textarea"
                        placeholder="Descrição do desconto"
                        onChange={handleChange}
                    />
                    <Select
                        name="discountType"
                        label="Tipo do desconto"
                        value={formData.discountType.value}
                        options={[
                            { value: "0", label: "Selecione" },
                            { value: "1", label: "Porcentagem" },
                            { value: "2", label: "DE / POR" },
                            { value: "3", label: "Leve + Pague Menos" },
                        ]}
                        onChange={handleChange}
                    />
                    {formData.discountType.value == "1" && (
                        <div className="flex justify-between w-full gap-4">
                            <Input
                                name="price"
                                value={formData.price}
                                className="w-full"
                                placeholder="Preço"
                                onChange={handleChange}
                            />
                            <Input
                                name="discountPercentage"
                                value={formData.discountPercentage}
                                className="w-full"
                                placeholder="Porcentagem de desconto"
                                onChange={handleChange}
                            />
                        </div>
                    )}
                    {formData.discountType.value == "2" && (
                        <div className="flex justify-between w-full gap-4">
                            <Input
                                name="priceDe"
                                value={formData.priceDe}
                                className="w-full"
                                placeholder="Preço 'DE'"
                                onChange={handleChange}
                            />
                            <Input
                                name="pricePor"
                                value={formData.pricePor}
                                className="w-full"
                                placeholder="Preço 'POR'"
                                onChange={handleChange}
                            />
                        </div>
                    )}
                    {formData.discountType.value == "3" && (
                        <div className="flex justify-between w-full gap-4">
                            <Input
                                name="price"
                                value={formData.price}
                                className="w-full"
                                placeholder="Preço"
                                onChange={handleChange}
                            />
                            <Input
                                name="take"
                                value={formData.take}
                                className="w-full"
                                placeholder="Leve"
                                onChange={handleChange}
                            />
                            <Input
                                name="payment"
                                value={formData.payment}
                                className="w-full"
                                placeholder="Pague"
                                onChange={handleChange}
                            />
                        </div>
                    )}
                    <div className="flex justify-between w-full gap-4">
                        <Input
                            name="activationDate"
                            value={formData.activationDate}
                            type="date"
                            placeholder="Data de ativação"
                            className="w-full"
                            onChange={handleChange}
                        />
                        <Input
                            name="inactivationDate"
                            value={formData.inactivationDate}
                            type="date"
                            placeholder="Data de inativação"
                            className="w-full"
                            onChange={handleChange}
                        />
                    </div>
                    <Input
                        type="file"
                        accept="image/*"
                        placeholder="Imagem do desconto"
                        className="p-2 border border-grayDark rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                        onChange={handleFileChange}
                    />
                    <Button
                        type="submit"
                        className="p-2 bg-blue text-white rounded-md shadow-md hover:bg-opacity-80 self-end lg:max-w-52 w-full"
                    >
                        Salvar
                    </Button>
                </form>
            </div>
        </div>
    );
}
