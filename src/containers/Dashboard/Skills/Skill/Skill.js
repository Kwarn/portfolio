import React, { useContext } from 'react';
import styled from 'styled-components';
import LayoutsContext from '../../../../Layout/LayoutsContext';
import FadeInSection from '../../../FadeInSection/FadeInSection';

const StyledSkill = styled.div`
  height: 100%;
  max-width: ${props => (props.isDesktop ? '80%' : '90%')};
  margin: auto;
`;

const StyledTextSections = styled.div`
  display: inline-flex;
  img {
    margin: auto 5px auto auto;
    /* padding: 0 5px 0 5px; */
    height: ${props => (props.isMobile ? '60px' : ' 100px')};
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
        <StyledTextSections {...layouts}>
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
