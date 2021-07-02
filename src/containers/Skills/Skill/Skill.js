import React from 'react';
import FadeInSection from '../../FadeInSection/FadeInSection';
import classes from './Skill.module.css';

const Skill = ({
  title,
  fadeInAndAlignDirection,
  image,
  content,
  renderDelayDuration,
}) => {
  const img = <img src={image} alt={title} />;
  return (
    <div className={classes.Skill}>
      <FadeInSection
        key={title}
        fadeDirection={fadeInAndAlignDirection}
        childAlignDirection={fadeInAndAlignDirection}
        renderDelayDuration={renderDelayDuration}
      >
        <div className={classes.TechSubsection}>
          {fadeInAndAlignDirection === 'left' ? img : null}
          <div>
            <h2>{title}</h2>
            <p>{content}</p>
          </div>
          {fadeInAndAlignDirection === 'right' ? img : null}
        </div>
      </FadeInSection>
    </div>
  );
};

export default Skill;
