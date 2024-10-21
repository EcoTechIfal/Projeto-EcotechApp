
import crud from "./userService";

export async function buscarDadosPatro() {
    try {
        const data = await crud.SelectPatro();
        return data;
    } catch (error) {
        console.error("Erro ao buscar dados de patrocínio:", error);
        return null;
    }
}

