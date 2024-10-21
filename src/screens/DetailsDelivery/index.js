import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";
import crud from "../../services/userService";
import styles from "./style";  // Estilos importados

export default function DetailsDelivery({ navigation, route }) {
  const uid = route.params.uid;
  const dados = route.params.dados;
  const entrega = route.params.entrega;

  async function mudarStatus() {
    const dataUp = {
      data: entrega.data,
      horario: entrega.horario,
      endereco: entrega.endereco,
      peso: entrega.peso,
      descricao: entrega.descricao,
      status: entrega.status == "1" ? 0 : 1,
      tipo: entrega.tipo,
      userId: entrega.userId,
      usuario: entrega.usuario,
    };

    await crud.UpdateDelivery({ idDoc: entrega.id, dataUp: dataUp });
    navigation.navigate("HomeCollector", { uid: uid, dados: dados });
  }

  async function deletarEntrega() {
    await crud.DeleteDelivery({ idDoc: entrega.id });
    navigation.navigate("HomeCollector", { uid: uid, dados: dados });
  }

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Tipo de Material</Text>
        <View style={styles.infoRow}>
          <Icon name="home" size={30} color="black" style={styles.icon} />
          <Text style={styles.text}>{entrega.tipo}</Text>
        </View>
        <Text style={styles.description}>{entrega.descricao}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Endereço</Text>
        <Text style={styles.text}>{entrega.endereco}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Peso</Text>
        <View style={styles.infoRow}>
          <Icon name="balance-scale" size={30} color="black" style={styles.icon} />
          <Text style={styles.text}>{entrega.peso}</Text>
        </View>

        <Text style={styles.title}>Data da entrega</Text>
        <View style={styles.infoRow}>
          <Icon name="calendar" size={30} color="black" style={styles.icon} />
          <Text style={styles.text}>{entrega.data}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Hora para a entrega</Text>
        <Text style={styles.text}>{entrega.horario}</Text>
      </View>

      <View style={styles.switch}>
      <TouchableOpacity style={styles.button} onPress={() => mudarStatus()}>
        <Text style={styles.buttonText}>
            {entrega.status == "1" ? "Cancelar finalização" : "Finalizar entrega"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteButton} onPress={() => deletarEntrega()}>
        <Text style={styles.buttonText}>Apagar entrega</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}
