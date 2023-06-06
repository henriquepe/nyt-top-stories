import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100%;
  width: 100%;
  padding: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NewsScrollWrapper = styled.FlatList.attrs({
  contentContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
})`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100%;
  width: 100%;
  /* padding: 40px 0px; */
  margin-top: 20px;
`;
