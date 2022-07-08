import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { BiMobileVibration } from 'react-icons/bi';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Estou a procura do meu primeiro emprego no ramo de tecnologia.
      O felizardo que me contratar terá um excelente e competente desenvolvedor!
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiência com <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Pretendo obter conhecimento em <br />
            Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <BiMobileVibration size='3rem' />
        <ListContainer>
          <ListTitle>Mobile</ListTitle>
          <ListParagraph>
            Pretendo obter conhecimento em  <br />
            React Native
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
