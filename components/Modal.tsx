'use client';
import Button from "./Button";
import Image from "next/image";
import IconButton from "./IconButton";
import { useRouter } from "next/navigation";
import { useProducts } from "@/services/productsContext";

const Modal = () => {
    const { isOpenModal, closeModal, selectedProduct } = useProducts();
    const router = useRouter();

    if (!isOpenModal || !selectedProduct) return null;

    const { id, title, price, description, image, discountType, take, discountPercentage, payment } = selectedProduct;

    const handleEdit = () => {
        router.push(`/${id}/edit`);
    };

    const percentual = Number(price) * (discountPercentage / 100);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded shadow-lg w-full max-w-xl lg:w-[660px]">
                <div className="border-b-4 border-blue">
                    <div className="relative flex items-center justify-center">
                        <p className="font-bold text-base leading-19 p-4 text-black">Detalhes do produto</p>
                        <IconButton
                            className="absolute right-4"
                            onClick={closeModal}
                            icon={<Image src="/images/CLOSE.svg" alt="Close" width={25} height={25} />}
                        />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2 p-4 flex justify-center">
                        <Image
                            src={image}
                            alt="Imagem do produto"
                            width={220}
                            height={220}
                            className="rounded-lg"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 p-4 flex flex-col gap-4">
                    {
                                discountType.label === "Leve + Pague Menos" ? (
                                    <p className="font-medium text-2xl">Leve {take} Pague {payment} </p>
                                ) : discountType.label === "Percentual" ? (
                                    <p className="font-semibold text-2xl">{discountPercentage}% de desconto</p>
                                ) : null
                            }
                        <p className="font-normal text-lg">{title}</p>
                        <p>{description}</p>
                        {
                                discountType.label !== "Leve + Pague Menos" ? (
                                    <div>
                                        <p className="font-normal text-xl line-through">{discountType.label === "De / Por" && 'de'} R$ {price}</p>
                                        <p className="font-medium text-2xl">{discountType.label === "De / Por" && 'por'} R$ {percentual}</p>
                                    </div>
                                ) : (
                                    <p className="font-medium text-2xl">R$ {price}</p>
                                )
                            }
                    </div>
                </div>
                <div className="p-4 flex justify-between">
                    <Button color="secondary" onClick={handleEdit}>
                        Editar
                    </Button>
                    <Button onClick={closeModal}>
                        Fechar
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
