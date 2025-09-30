import { useState } from "react";
import {
  Dimensions,
  GestureResponderEvent,
  StyleSheet,
  View,
} from "react-native";
import { Button, Text } from "react-native-paper";
import Matchstick from "@/components/matchstick";

interface Layout {
  x: number;
  y: number;
  width: number;
  height: number;
}

const { width, height } = Dimensions.get("window");

export default function Index() {
  const [layout, setLayout] = useState<Layout | null>(null);

  const handleLayout = (event: any) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    setLayout({ x, y, width, height });
  };

  const [matchsticks, setMatchsticks] = useState<JSX.Element[]>([]);

  const displayMatchsticks = (num: number = 0) => {
    for (let i = 0; i < num; i++) {
      setMatchsticks((prevMatchsticks) => [
        ...prevMatchsticks,
        <Matchstick layout={layout}></Matchstick>,
      ]);

      console.log("Проверка лэйаута ", layout);
    }
  };

  const clearMatchsticks = () => {
    setMatchsticks((prevMatchsticks) => []);
  };

  const updateMatchsticks = (num: number) => {
    clearMatchsticks();
    displayMatchsticks(5);
  };

  const updateMatchsticksByButton = (e: GestureResponderEvent) => {
    updateMatchsticks(5);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
      }}
    >
      <View style={styles.matchesLayout} onLayout={handleLayout}>
        {matchsticks}
      </View>
      <View>
        <Button onPress={() => {}} style={styles.button}>
          <Text>-</Text>
        </Button>
        <Button onPress={updateMatchsticksByButton} style={styles.button}>
          <Text>reload</Text>
        </Button>
        <Button onPress={() => {}} style={styles.button}>
          <Text>+</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  matchesLayout: {
    width: width * 0.9, // 90% ширины экрана
    height: height * 0.67, // 2/3 высоты экрана
    backgroundColor: "skyblue", // Цвет фона для видимости
    borderRadius: 10, // Слегка скругленные углы
  },
  buttonContainer: {
    flexDirection: "column",
    gap: 10,
  },
  button: {
    backgroundColor: "#FF4F00",
  },
});
