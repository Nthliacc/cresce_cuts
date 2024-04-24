interface ProductResponseType {
    id: number | string;
    title: string
    price:  string;
    category:  string;
    description:  string;
    image: string;
}

interface ProductType {
    id?: number | string;
    title: string
    price:  string;
    category:  string;
    description:  string;
    image: string;
    isActivated: boolean;
    activationDate: string;
    inactivationDate: string;
    discountType: {
        label: "Selecione" | "Leve + Pague Menos" | "Percentual" | "De / Por";
        value: "0" | "1" | "2" | "3";
    };
    discountPercentage: number;
    priceDe: string;
    pricePor: string;
    take: string;
    payment: string;
}