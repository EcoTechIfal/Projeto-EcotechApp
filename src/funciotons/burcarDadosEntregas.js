
import crud from "../recursos/crud";

export async function buscarDadosEntregas(uid) {
    try {
        const data = await crud.SelectDelivery({ uid });
        return data;
    } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
        return null;
    }
}

