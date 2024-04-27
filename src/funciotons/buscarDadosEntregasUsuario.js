
import crud from "../recursos/crud";

export async function buscarDadosEntregasUsuarios(uid) {
    try {
        const data = await crud.SelectDeliveryUser({ uid });
        return data[0];
    } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
        return null;
    }
}

