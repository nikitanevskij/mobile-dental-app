import React from "react";
import { View, SectionList } from "react-native";
import styled from "styled-components/native";
import Appointment from "./components/Appointment";
import SectionTitle from "./components/SectionTitle";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const DATA = [
    {
      title: "11 сентября",
      data: [
        {
          time: "15:30",
          diagnognosis: "здоровая булочка",
          active: true,
          user: {
            fullName: "Настюшка Навышняя",
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOfqBBnGW-ntm2BhRJQQJupmw5Gh5drIDnvA&usqp=CAU",
          },
        },
        {
          time: "17:30",
          diagnognosis: "установка импланта",
          user: {
            fullName: "Игорь Игоревич",
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOfqBBnGW-ntm2BhRJQQJupmw5Gh5drIDnvA&usqp=CAU",
          },
        },
        {
          time: "19:30",
          diagnognosis: "пульпит, удаление зуба",
          user: {
            fullName: "Вероника Агневич",
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOfqBBnGW-ntm2BhRJQQJupmw5Gh5drIDnvA&usqp=CAU",
          },
        },
      ],
    },
    {
      title: "12 сентября",
      data: [
        {
          time: "15:30",
          diagnognosis: "здоровая булочка",

          user: {
            fullName: "Настюшка Навышняя",
            avatar:
              "https://sun1.mts-by-minsk.userapi.com/s/v1/if1/pe2-32xOpmhqftA-15NazoJ2JmK9vh4VJHDnqiNLItFUL-1SBjg8AGMCYD9A-YoWdrFtXM_1.jpg?size=100x100&quality=96&crop=0,165,1218,1218&ava=1",
          },
        },
        {
          time: "17:30",
          diagnognosis: "установка импланта",
          user: {
            fullName: "Игорь Игоревич",
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOfqBBnGW-ntm2BhRJQQJupmw5Gh5drIDnvA&usqp=CAU",
          },
        },
        {
          time: "19:30",
          diagnognosis: "пульпит, удаление зуба",
          user: {
            fullName: "Вероника Агневич",
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOfqBBnGW-ntm2BhRJQQJupmw5Gh5drIDnvA&usqp=CAU",
          },
        },
      ],
    },
    {
      title: "13 сентября",
      data: [
        {
          time: "15:30",
          diagnognosis: "здоровая булочка",

          user: {
            fullName: "Настюшка Навышняя",
            avatar:
              "https://sun1.mts-by-minsk.userapi.com/s/v1/if1/pe2-32xOpmhqftA-15NazoJ2JmK9vh4VJHDnqiNLItFUL-1SBjg8AGMCYD9A-YoWdrFtXM_1.jpg?size=100x100&quality=96&crop=0,165,1218,1218&ava=1",
          },
        },
        {
          time: "17:30",
          diagnognosis: "установка импланта",
          user: {
            fullName: "Игорь Игоревич",
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOfqBBnGW-ntm2BhRJQQJupmw5Gh5drIDnvA&usqp=CAU",
          },
        },
        {
          time: "19:30",
          diagnognosis: "пульпит, удаление зуба",
          user: {
            fullName: "Вероника Агневич",
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOfqBBnGW-ntm2BhRJQQJupmw5Gh5drIDnvA&usqp=CAU",
          },
        },
      ],
    },
  ];
  return (
    <Container>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <Appointment {...item} />}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle title={title} />
        )}
      />
      <PlsButton
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.5,
          shadowRadius: 2.5,

          elevation: 5,
        }}
      >
        <Ionicons name="ios-add" size={36} color="white" />
      </PlsButton>
    </Container>
  );
}
const Container = styled.View`
  flex: 1;
  margin-top: 30px;
`;

const PlsButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 25px;
  right: 25px
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 64px;
  height: 64px;
  background: #2a86ff;
`;

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
