'use client';
import Select from "@/components/Select";
import { useProducts } from "@/services/productsContext";

export default function FilterPage() {
    const { statusFilter, setStatusFilter, typeFilter, setTypeFilter } = useProducts();

    const handleChange = (e:
        React.ChangeEvent<HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        const { label } = e.target.options[e.target.selectedIndex];

        if (name === "statusFilter")
            setStatusFilter({ value, label });
        else {
            setTypeFilter({ value, label });
        }

    }
    return (
        <div className="flex justify-between px-4 py-6 gap-4">
            <Select
                label="Status"
                value={statusFilter.value}
                options={[
                    { label: "Selecione", value: "0" },
                    { label: "Ativo", value: "1" },
                    { label: "Inativo", value: "2" },
                ]}
                onChange={
                    handleChange
                }
            />
            <Select
                label="Tipo desconto"
                value={typeFilter.value}
                options={[
                    { label: "Selecione", value: "0" },
                    { label: "Leve + Pague Menos", value: "1" },
                    { label: "Percentual", value: "2" },
                    { label: "De / Por", value: "3" },
                ]}
                onChange={handleChange}
            />
        </div>
    );
}