import Home from "@/pages/home";
import { ProductsProvider } from "@/services/productsContext";

export default function HomePage() {
  return (
    <ProductsProvider>
      <Home />
    </ProductsProvider>
  );
}