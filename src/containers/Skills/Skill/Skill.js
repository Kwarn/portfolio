import React, { useContext } from 'react';
import styled from 'styled-components';
import LayoutsContext from '../../../Layout/LayoutsContext';
import FadeInSection from '../../FadeInSection/FadeInSection';

const StyledSkill = styled.div`
  height: 100%;
  max-width: ${props => (props.isDesktop ? '80%' : '90%')};
  margin: auto;
`;

const StyledTextSections = styled.div`
  font-size: 1.2em;
  display: inline-flex;
  img {
    padding: 0 5px 0 5px;
    height: 100px;
    width: auto;
  }
`;

const Skill = ({
  title,
  fadeInAndAlignDirection,
  image,
  content,
  renderDelayDuration,
}) => {
  const layouts = useContext(LayoutsContext);
  const img = <img src={image} alt={title} />;
  return (
    <StyledSkill {...layouts}>
      <FadeInSection
        key={title}
        fadeDirection={fadeInAndAlignDirection}
        childAlignDirection={fadeInAndAlignDirection}
        renderDelayDuration={renderDelayDuration}
      >
        <StyledTextSections>
          {fadeInAndAlignDirection === 'left' ? img : null}
          <div>
            <h2>{title}</h2>
            <p>{content}</p>
          </div>
          {fadeInAndAlignDirection === 'right' ? img : null}
        </StyledTextSections>
      </FadeInSection>
    </StyledSkill>
  );
};

export default Skill;
