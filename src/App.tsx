import React from "react";
import { ThemeProvider } from "styled-components";
import {
  FiPhone,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiCalendar,
} from "react-icons/fi";
import {
  Container,
  GlobalStyle,
  theme,
  TextWithIcon,
  Header,
  Section,
  SkillList,
  Division,
  SectionWrapper,
  ProgrammingList,
  TimeStampCard,
} from "./styles";

const skills: string[] = [
  "React.js",
  "Node.js",
  "React Native",
  "HTML5 & CSS",
  "Redux",
  "PostgreSQL",
  "MySQL",
  "API REST",
  "Unit Testing",
  "TDD",
  "SOLID",
  "AWS",
  "Git",
];

const programming: string[] = ["TypeScript", "JavaScript", "C#", "C++"];
const languages: string[] = ["Inglês - Intermediário"];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header>
          <h1>Cazuza Neves Barberino</h1>
          <h2>Full-Stack Developer</h2>

          <div>
            <TextWithIcon>
              <FiPhone />
              <p>(21) 98845-0254</p>
            </TextWithIcon>
            <TextWithIcon>
              <FiMail />
              <p>cazuzaneves@gmail.com</p>
            </TextWithIcon>
            <TextWithIcon>
              <FiMapPin />
              <p>Niterói, Rio de Janeiro</p>
            </TextWithIcon>
            <TextWithIcon>
              <FiLinkedin />
              <a
                href="https://www.linkedin.com/in/cazuza/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/cazuza/
              </a>
            </TextWithIcon>
            <TextWithIcon>
              <FiGithub />
              <a
                href="https://github.com/cazuzabarberino"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/cazuzabarberino
              </a>
            </TextWithIcon>
          </div>
        </Header>
        <SectionWrapper>
          <Section>
            <h2>Competências</h2>
            <Division />
            <SkillList>
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </SkillList>
          </Section>
          <Section>
            <h2>Programação</h2>
            <Division />
            <ProgrammingList>
              {programming.map((lg) => (
                <li key={lg}>
                  <div />
                  <p>{lg}</p>
                </li>
              ))}
            </ProgrammingList>
          </Section>
        </SectionWrapper>
        <SectionWrapper>
          <Section>
            <h2>Educação</h2>
            <Division />
            <TimeStampCard>
              <h3>Bootcamp GoStack 11</h3>
              <a
                href="https://rocketseat.com.br/gostack"
                target="_blank"
                rel="noopener noreferrer"
              >
                RocketSeat
              </a>
              <div>
                <FiCalendar /> <p>2020 · 2 meses</p>
              </div>
              <ul>
                <li>
                  Treinamento imersivo nas tecnologias React.js, Node.js e React
                  Native.
                </li>
              </ul>
            </TimeStampCard>
            <TimeStampCard>
              <h3>Curso - Web Full-Stack</h3>
              <a
                href="https://www.labenu.com.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Labenu
              </a>
              <div>
                <FiCalendar /> <p>2020 · 6 meses</p>
              </div>
              <ul>
                <li>
                  Curso intensivo para formação de desenvolverdor full-stack.
                </li>
              </ul>
            </TimeStampCard>
            <TimeStampCard>
              <h3>Bacharelado, Engenharia Elétrica</h3>
              <p>
                Cefet/RJ - Centro Federal de Educação Tecnológica Celso Suckow
                da Fonseca
              </p>
              <div>
                <FiCalendar /> <p>2016 - 2021</p>
              </div>
            </TimeStampCard>
          </Section>
          <Section>
            <h2>Idiomas</h2>
            <Division />
            <TimeStampCard>
              <h3>Inglês Intermédiário</h3>
              <p>
                Cefet/RJ - Centro Federal de Educação Tecnológica Celso Suckow
                da Fonseca
              </p>
              <div>
                <FiCalendar /> <p>2016 - 2021</p>
              </div>
            </TimeStampCard>
          </Section>
        </SectionWrapper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
