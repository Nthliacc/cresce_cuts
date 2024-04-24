'use client';
import Image from 'next/image';
import Switch from './Switch';
import IconButton from './IconButton';
import { useProducts } from '@/services/productsContext';

const ProductTable = () => {
    const { filteredProducts, openModal, switchStatus } = useProducts();
    return (
        <div>
            <table className="w-full p-2">
                <thead className="bg-grayDark text-left">
                    <tr>
                        <th className="p-4">Desconto</th>
                        <th>Tipo</th>
                        <th>Data ativação</th>
                        <th>Data inativação</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts?.length > 0 ? filteredProducts.map((product) => (
                        <tr key={product.id}>
                            <td className="p-4 w-64 min-h-[60px] flex items-center ">
                                <Image src={product.image ? product.image : '/images/image-default.jpg'} alt={product.title} 
                                    width={40} height={40} className='mr-4 rounded-md'
                                    priority quality={60} />
                                <p>{product.title}</p>
                            </td>
                            <td>{product.discountType.label}</td>
                            <td>{product.activationDate}</td>
                            <td>{product.inactivationDate}</td>
                            <td className="flex">
                                <Switch onClick={() => switchStatus(product.isActivated, product.id || '')} active={product.isActivated} />
                                <IconButton
                                    icon={<Image src="/images/EyeAdd.svg" alt="edit" width={30} height={30} />}
                                    onClick={openModal.bind(null, product)}
                                />
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan={5} className="text-center p-20">Nenhum produto encontrado</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;