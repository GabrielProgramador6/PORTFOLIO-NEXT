import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Meu nome é Gabriel e procuro uma primeira 
        oportunidade no <br/> mercado de trabalho, como 
        programador Front-End Javascript!
      </SectionText>
      <Button onClick={() => window.location = 'http://github.com'}>
        Saiba Mais!
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;