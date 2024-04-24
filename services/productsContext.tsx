'use client';
import React, { createContext, useState, useEffect } from 'react';
import { getAllProduct } from './serviceProduct';

interface SelectType {
    value: string;
    label: string;
}

interface ProductsContextValue {
    products: ProductType[];
    filteredProducts: ProductType[];
    filterProducts: (statusFilter: string, typeFilter: string) => void;
    openModal: (product: ProductType) => void;
    closeModal: () => void;
    selectedProduct: ProductType | null;
    isOpenModal: boolean;
    setTypeFilter: (type: SelectType) => void;
    setStatusFilter: (status: SelectType) => void;
    typeFilter: SelectType;
    statusFilter: SelectType;
    loading: boolean;
    switchStatus: (statusSwitch: boolean, id: string | number) => void;
}

export const ProductsContext = createContext<ProductsContextValue>({
    products: [],
    filteredProducts: [],
    filterProducts: () => { },
    openModal: () => { },
    closeModal: () => { },
    selectedProduct: null,
    isOpenModal: false,
    setTypeFilter: () => { },
    setStatusFilter: () => { },
    typeFilter: {
        value: "0",
        label: "Selecione",
    },
    statusFilter: {
        value: "0",
        label: "Selecione",
    },
    loading: false,
    switchStatus: () => { },
});

export const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
    const [statusFilter, setStatusFilter] = useState<SelectType>({ value: "0", label: "Selecione" });
    const [typeFilter, setTypeFilter] = useState<SelectType>({ value: "0", label: "Selecione" });
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            const data = await getAllProduct() as ProductType[];
            setProducts(data);
            setFilteredProducts(data);
            setLoading(false);
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        filterProducts(statusFilter.value, typeFilter.value);
    }, [statusFilter.value, typeFilter.value, products]); // eslint-disable-line react-hooks/exhaustive-deps

    const filterProducts = (statusValue: string, typeValue: string) => {
        const filtered = products.filter((product) => {
            if (statusValue !== "0" && product.isActivated !== (statusValue === "1" ? true : false)) {
                return false;
            }
            if (typeValue !== "0" && product.discountType.value !== typeValue) {
                return false;
            }
            return true;
        });
        setFilteredProducts(filtered);
    };
    
    const switchStatus = (statusSwitch: boolean, id: string | number ) => {
        const filtered = products.map((product) => {
            if (product.id === id) {
                product.isActivated = statusSwitch;
            }
            return product;
        });
        setProducts(filtered);
    }

    const openModal = (product: ProductType) => {
        setIsOpenModal(true);
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setIsOpenModal(false);
    };

    return (
        <ProductsContext.Provider
            value={{
                products, filteredProducts, filterProducts, openModal, closeModal, selectedProduct,
                isOpenModal, setTypeFilter, setStatusFilter, typeFilter, statusFilter, loading, switchStatus
            }}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProducts = () => React.useContext(ProductsContext);