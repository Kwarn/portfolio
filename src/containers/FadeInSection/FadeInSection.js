import React, { useState, useEffect, useRef } from 'react';
import classes from './FadeInSection.module.css';

function FadeInSection({
  fadeDirection,
  childAlignDirection,
  children,
  delayRenderDuration,
}) {
  const [isVisible, setVisible] = useState(false);
  const [animationShouldStop, setAnimationShouldStop] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      return setVisible(true);
    }, 100);
  }, [delayRenderDuration, animationShouldStop]);

  const fadeDirections = {
    top: classes.FadeToTop,
    bottom: classes.FadeToBottom,
    left: classes.FadeToLeft,
    right: classes.FadeToRight,
  };

  const alignChildDirection = {
    left: classes.AlignChildLeft,
    right: classes.AlignChildRight,
    center: classes.AlignChildCenter,
  };

  return (
    <div
      className={`${classes.FadeInSection} ${fadeDirections[fadeDirection]} ${
        alignChildDirection[childAlignDirection]
      } ${isVisible ? classes.isVisible : ''}`}
      ref={domRef}
    >
      {children}
    </div>
  );
}

export default FadeInSection;
