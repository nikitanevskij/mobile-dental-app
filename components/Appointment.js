import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import styled from "styled-components/native";

function Appointment({ time, diagnognosis, active, user }) {
  return (
    <GroupItem>
      <Avatar
        source={{
          uri: user.avatar,
        }}
      />
      <View style={{ flex: 1 }}>
        <FullName>{user.fullName}</FullName>
        <GrayText>{diagnognosis}</GrayText>
      </View>
      <GroupDate active={active}>{time}</GroupDate>
    </GroupItem>
  );
}

const GroupDate = styled.Text`
  background: ${(props) => (props.active ? "#2A86FF" : "#e9f5ff")};
  border-radius: 18px;
  font-weight: 500;
  color: ${(props) => (props.active ? "#FFF" : "#4294ff")};
  font-size: 14px;
  width: 70px;
  height: 32px;
  text-align: center;
  line-height: 32px;
`;

const GrayText = styled.Text`
  font-size: 16px;
  color: #8b979f;
`;
const FullName = styled.Text`
  font-weight: 600;
  font-size: 16px;
`;
const Avatar = styled.Image`
  margin-right: 15px;
  border-radius: 50px;
  width: 40px;
  height: 40px;
`;
const GroupItem = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #f3f3f3;
`;

export default Appointment;
