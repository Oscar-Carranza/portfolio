import React from 'react';
import styled from 'styled-components';

import electric_grid from '../images/electric_grid.jpeg';
import ami_mobile from '../images/ami_mobile.png';
import hv_battery from '../images/hv_battery.jpg';

const Section = styled.section`
  padding: 0 0 2rem; /* base vertical breathing */
`;

const Heading = styled.h2`
  margin:0 0 2.25rem;
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  letter-spacing:-1px;
`;

const Grid = styled.div`
  display: grid;
  gap: 2.25rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const Card = styled.article`
  background:#fff;
  border:1px solid #dedede;
  border-radius: 20px;
  display:flex;
  flex-direction:column;
  overflow:hidden;
  min-height: 380px;
  transition: box-shadow .25s, transform .25s;
  &:hover { box-shadow:0 10px 28px -10px rgba(0,0,0,.25); transform:translateY(-6px); }
`;

const ImageWrap = styled.div`
  height: 210px; overflow:hidden; background:#000; position:relative;
`;

const Img = styled.img`
  width:100%; height:100%; object-fit:cover; display:block; filter:brightness(.92);
  transition: transform .6s ease, filter .6s ease;
  ${Card}:hover & { transform:scale(1.06); filter:brightness(1); }
`;

const CardBody = styled.div`
  padding: 1.35rem 1.4rem 1.6rem;
  display:flex; flex-direction:column; gap:.75rem;
`;

const CardTitle = styled.h3`
  margin:0; font-size:1.35rem;
`;

const CardText = styled.p`
  margin:0;
  color:#444;
  font-size:1rem;
  line-height:1.5;
  text-align:justify;
  text-justify:inter-word;
`;

const PillWrap = styled.div`
  display:flex; flex-wrap:wrap; gap:.55rem; margin-top:.35rem;
`;

const Pill = styled.span`
  padding:.45rem .75rem; font-size:.65rem; font-weight:600; letter-spacing:.5px; border:1px solid #d9d9d9; border-radius:999px; background:#fff; color:#111; box-shadow:0 2px 4px rgba(0,0,0,.03); text-transform:uppercase;
`;

const data = [
  { 
    title: 'BEC Warranty Insights', 
    text: 'Implemented web-application for enhancing the warranty analytics process of the Bussed Electrical Center (BEC) component in hybrid and electric vehicles within the Ford Motor Company.', 
    image: hv_battery, alt:'High voltage vehicle battery pack',
    skills:['PostgreSQL','FastAPI', 'SQLAlchemy', 'Pydantic', 'React', 'Cloud Run', 'Cloud Storage', 'BigQuery', 'Azure', 'Docker', 'Terraform']
  },
  { 
    title: 'AMI mobile', 
    text: 'Developed a mobile application for internal use at Comisión Federal de Electricidad, streamlining the reading of billing and measurement variables of commercial AMI-meters.', 
    image: ami_mobile, alt:'logo of AMI mobile app',
    skills:['Java','SQL', 'Android', 'GitHub', 'UI in XML']
  },
  { 
    title: 'Power System Flow Analyzer', 
    text: 'Built a power flow analysis tool (generalized for n-buses) aiding planners to optimize grid loading and reliability, including power generation, transformers, transmission lines, and loads.', 
    image: electric_grid, alt:'Transmission lines picture',
    skills:['Python','Numpy', 'Pandas', 'Matplotlib', 'Seaborn']
  }
];

function Projects({ id }){
  return (
    <Section id={id}>
      <Heading>Projects</Heading>
      <Grid>
        {data.map(d => (
          <Card key={d.title}>
            <ImageWrap>
              <Img src={d.image} alt={d.alt} loading="lazy" />
            </ImageWrap>
            <CardBody>
              <CardTitle>{d.title}</CardTitle>
              <CardText>{d.text}</CardText>
              <PillWrap>
                {d.skills.map(skill => <Pill key={skill}>{skill}</Pill>)}
              </PillWrap>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}

export default Projects;