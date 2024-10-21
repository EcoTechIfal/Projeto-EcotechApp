
import crud from "./userService";

export async function buscarDadosEntregasUsuarios(uid) {
    try {
        const data = await crud.SelectDeliveryUser({ uid });
        return data;
    } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
        return null;
    }
}

