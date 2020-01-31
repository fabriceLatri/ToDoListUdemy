import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import Modal from "react-native-modal";
import { styles } from "./style";

const MenuTask = ({ isVisible, onDisappearCallback, onDeleteCallback, onChangeStatusCallback }) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={() => onDisappearCallback()}
      animationIn={"zoomInDown"}
      animationOut={"zoomOutUp"}
      animationInTiming={1000}
      animationOutTiming={1000}
      backdropTransitionInTiming={1000}
      backdropTransitionOutTiming={1000}
    >
      <View style={styles.modal}>
        <View style={styles.textView}>
          <Text>Que souhaitez vous faire sur la tâche ?</Text>
        </View>
        <View style={styles.buttonView}>
          <Button
            buttonStyle={styles.buttonDelete}
            title="Supprimer"
            onPress={() => onDeleteCallback()}
          />
          <Button
            buttonStyle={styles.buttonChangeStatus}
            title="Changer status"
            onPress={() => onDisappearCallback()}
          />
        </View>
      </View>
    </Modal>
    // </>
  );
};

export default MenuTask;
