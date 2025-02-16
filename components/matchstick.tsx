import { StyleSheet, Image } from "react-native";

const imageSource = require("../assets/images/mathcstick.png");

interface Layout {
  x: number;
  y: number;
  width: number;
  height: number;
}

const Matchstick = ({ layout }) => {
  // Получаем размер экрана
  console.log(layout);
  // console.log(x);
  // console.log(y);
  // console.log(width);
  // console.log(height);
  const compressionPercent = 0.3;
  // Генерация случайных данных
  const getX = () => {
    return layout.x + Math.random() * layout.width;
  };
  const getY = () => {
    return layout.y + Math.random() * layout.height;
  };

  const getSafeX = () => {
    const x = getX();
    return x > layout.x + layout.width ? layout.x + layout.width : x;
  };

  const getSafeY = () => {
    const y = getY();
    return y > layout.y + layout.height ? layout.y + layout.height : y;
  };
  const getRotation = () => {
    return Math.random() * 360;
  };

  return (
    <Image
      source={imageSource}
      style={[
        styles.image,
        {
          left: getSafeX(),
          top: getSafeY(),
          transform: [
            { scale: compressionPercent }, // Сжимаем на 50%
            { rotate: `${getRotation()}deg` },
          ],
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  image: {
    position: "absolute",
  },
});

export default Matchstick;
