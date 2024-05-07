
import crud from "../recursos/crud";

export async function buscarDadosEntregas() {
    try {
        const data = await crud.SelectDelivery();
        return data;
    } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
        return null;
    }
}

