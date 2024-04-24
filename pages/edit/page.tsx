
export default function Edit(formdata: any) {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-semibold">Edit</h1>
            <form className="flex flex-col w-96 space-y-4">
                <input
                    type="text"
                    placeholder="Nome"
                    className="p-2 border border-grayDark rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                />
                <input
                    type="email"
                    placeholder="E-mail"
                    className="p-2 border border-grayDark rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                />
                <input
                    type="password"
                    placeholder="Senha"
                    className="p-2 border border-grayDark rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                />
                <button
                    type="submit"
                    className="p-2 bg-blue text-white rounded-md shadow-md hover:bg-opacity-80"
                >
                    Cadastrar
                </button>
            </form>
        </div>
    );
}