import React, { useEffect, useState } from 'react';
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './ProjectsStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { projects as projectsData } from '../../constants/constants';

const Projects = () => {
  // State to store projects (for client-side rendering)
  const [projects, setProjects] = useState([]);

  // useEffect to load projects on the client side only
  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <Section nopadding id='projects'>
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.length > 0 &&
          projects.map((p) => {
            return (
              <BlogCard key={p.id}>
                <Img src={p.image} alt={p.title} />
                <TitleContent>
                  <Hr />
                </TitleContent>
                <CardInfo className='card-info'>{p.description}</CardInfo>
                <div>
                  <TitleContent></TitleContent>
                  <TagList>
                    {p.tags.map((t, i) => {
                      return <Tag key={i}>{t}</Tag>;
                    })}
                  </TagList>
                </div>
                <UtilityList>
                  <ExternalLinks>
                    <strong>Technical Specifications:</strong>
                    <ul>
                      <li>
                        <strong>Cell Chemistry:</strong>{' '}
                        {p.techSpecification.cellChemistry}
                      </li>
                      <li>
                        <strong>Discharge Capacity:</strong>{' '}
                        {p.techSpecification.dischargeCapacity}
                      </li>
                      <li>
                        <strong>Nominal Voltage:</strong>{' '}
                        {p.techSpecification.nominalVoltage}
                      </li>
                      <li>
                        <strong>Cycle Life:</strong>{' '}
                        {p.techSpecification.cycleLife}
                      </li>
                      <li>
                        <strong>Operating Temperature:</strong>{' '}
                        {p.techSpecification.operatingTemperature}
                      </li>
                      <li>
                        <strong>Weight:</strong> {p.techSpecification.weight}
                      </li>
                    </ul>
                  </ExternalLinks>

                  <div>
                    <strong>Challenges:</strong>
                    <p>{p.challenges}</p>
                  </div>
                </UtilityList>
              </BlogCard>
            );
          })}
      </GridContainer>
    </Section>
  );
};

export default Projects;
