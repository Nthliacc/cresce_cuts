import { getLocalStorage, setLocalStorage } from "./localStorage";

const getAllProduct = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products?limit=6");
        const data = await response.json();

        const productsWithAdditionalData = data.map((product: ProductResponseType) => {
            const isActivated = Math.random() < 0.5;
            const activationDate = generateRandomDate();
            const inactivationDate = generateRandomDate();
            const discountTypes = [
                { value: "1", label: "Leve + Pague -" },
                { value: "2", label: "Percentual" },
                { value: "3", label: "De / Por" },
            ];
            const randomDiscountType = discountTypes[Math.floor(Math.random() * discountTypes.length)];
            const statuses = [true, false];
            const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

            return {
                ...product,
                isActivated,
                activationDate,
                inactivationDate,
                discountType: randomDiscountType,
                status: randomStatus,
            };
        });
        const storageData = getLocalStorage("products");

        return storageData ? [...storageData, ...productsWithAdditionalData] : productsWithAdditionalData;
    } catch (error) {
        console.error(error);
    }
};

const generateRandomDate = () => {
    const year = 2022 + Math.floor(Math.random() * 2);
    const month = 1 + Math.floor(Math.random() * 12);
    const day = 1 + Math.floor(Math.random() * 31);
    return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
};

const createProduct = async (product: ProductType) => {
    try {
        const response = await fetch("https://fakestoreapi.com/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });

        const productsStorage = getLocalStorage("products");
        if (productsStorage) {
            setLocalStorage("products", [...productsStorage, product]);
        } else {
            setLocalStorage("products", [product]);
        }

        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export { getAllProduct, createProduct };