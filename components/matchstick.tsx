import React, { useState } from "react";
import { StyleSheet, Image, View } from "react-native";

const imageSource = require("../assets/images/mathcstick.png");

const Matchstick = (layout) => {
  // Функция для получения случайного значения X с учетом маржи 10 пикселей
  console.log(layout.layout);
  const getX = () => {
    // Генерируем случайное значение от 0 до ширины родителя с учетом маржи
    const randomX = Math.random() * (layout.width - 20); // Ширина - 10 пикселей с каждой стороны
    return layout.x + 10 + randomX; // Добавляем начальное значение X и маржу 10 пикселей с левой стороны
  };

  // Функция для получения случайного значения Y с учетом маржи 10 пикселей
  const getY = () => {
    // Генерируем случайное значение от 0 до высоты родителя с учетом маржи
    const randomY = Math.random() * (layout.layout.height - 20); // Высота - 10 пикселей с каждой стороны
    console.log(layout.layout.height);
    console.log(layout.layout.y);
    return layout.layout.y + 10 + randomY; // Добавляем начальное значение Y и маржу 10 пикселей сверху
  };
  console.log("Random X:", getX()); // Выведет случайное X внутри родителя с маржей
  console.log("Random Y:", getY()); // Выведет случайное Y внутри родителя с маржей

  const getRotation = () => {
    return Math.random() * 360;
  };

  return (
    <View
      style={styles.container} // Получаем размер контейнера
    >
      {layout && (
        <Image
          source={imageSource}
          style={[
            styles.image,
            {
              left: getX(), // безопасное расположение в процентах от родителя
              top: getY(),
              transform: [
                { scale: 0.15 }, // Сжимаем на 30%
                { rotate: `${getRotation()}deg` },
              ],
            },
          ]}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative", // Обеспечиваем правильное позиционирование дочерних элементов
  },
  image: {
    position: "absolute", // Для корректного позиционирования изображения
  },
});

export default Matchstick;
