import React from "react";
import styled from "styled-components/native";

function SectionTitle({ title }) {
  return <GroupTitle>{title}</GroupTitle>;
}
const GroupTitle = styled.Text`
  margin-top: 25px;
  font-weight: 800;
  font-size: 22px;
  color: #000000;
  padding: 0 20px;
`;
export default SectionTitle;
