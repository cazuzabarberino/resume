import styled, { createGlobalStyle, DefaultTheme } from "styled-components";
import { transparentize } from "polished";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    second: string;
    background: string;
  }
}

export const theme: DefaultTheme = {
  primary: "#344563",
  second: "#0079bf",
  background: "#fff",
};

export const GlobalStyle = createGlobalStyle`

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
  }

`;

export const Container = styled.div`
  padding: 16px 32px;
`;

export const Header = styled.div`
  > h2 {
    color: ${({ theme }) => theme.second};
  }

  > div {
    margin-top: 16px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 4px;
  }
`;

export const TextWithIcon = styled.div`
  display: flex;
  align-items: center;

  > svg {
    margin-right: 8px;
    color: ${({ theme }) => theme.second};
  }
`;

export const SectionWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
  column-gap: 16px;
`;

export const Section = styled.div`
  margin-top: 32px;
`;

export const Division = styled.div`
  height: 4px;
  background: ${({ theme }) => theme.primary};
  border-radius: 8px;
`;

export const SkillList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 -8px;
  margin-top: 8px;

  > li {
    white-space: nowrap;

    border-bottom: 2px solid ${({ theme }) => transparentize(0.5, theme.second)};
    padding: 8px 8px 4px 8px;

    margin: 0 8px;
  }
`;

export const ProgrammingList = styled.ul`
  list-style: none;
  margin-top: 16px;

  > li {
    margin-top: 4px;
    margin-left: 8px;
    display: flex;
    align-items: center;

    > div {
      background: ${({ theme }) => theme.second};
      height: 4px;
      width: 4px;
      border-radius: 50%;
      margin-right: 8px;
    }
  }
`;

export const TimeStampCard = styled.div`
  margin-top: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid ${({ theme }) => transparentize(0.5, theme.second)};
  display: grid;
  place-content: start;
  place-items: start;
  grid-auto-flow: row;
  row-gap: 4px;

  > div {
    display: flex;
    align-items: center;

    > svg {
      margin-right: 4px;
      color: ${({ theme }) => theme.second};
    }

    > p {
      font-size: 14px;
    }
  }

  > p,
  a {
    color: ${({ theme }) => theme.second};
  }

  ul {
    margin-left: 24px;
  }
`;
