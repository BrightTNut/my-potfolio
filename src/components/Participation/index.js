import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './cipationStyle';
import ParticipationCards from '../Cards/ParticipationCards.jsx';
import { participations } from '../../data/constants'

const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="participations">
      <Wrapper>
        <Title>Participation</Title>
        <Desc>
          I have worked on a wide range of participations.Which make me learn and grown mind set.
        </Desc>
        <CardContainer>
          {toggle === 'all' && participations
            .map((project) => (
              <ParticipationCards project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {participations
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ParticipationCards project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects