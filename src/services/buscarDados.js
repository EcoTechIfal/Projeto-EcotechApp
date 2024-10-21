
import crud from "./userService";

export async function buscarDados(uid) {
    try {
        const data = await crud.Select({ uid });
        return data[0];
    } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
        return null;
    }
}

