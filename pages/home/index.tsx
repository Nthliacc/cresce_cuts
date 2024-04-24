import Modal from "@/components/Modal";
import ProductTable from "@/components/ProductTable";
import FilterPage from "./filter";
import Header from "./header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-start p-8 w-full">
      <div className="flex flex-col pb-4">
        <h1 className="text-2xl font-bold">Lista de descontos</h1>
        <p className="text-lg">Loja: Super João - Nova loja online</p>
      </div>
      <div className="w-full bg-white flex flex-col border-2 rounded-md border-grayDark">
        <Header />
        <FilterPage />
        <ProductTable />
        <Modal />
      </div>
    </div>
  );
}