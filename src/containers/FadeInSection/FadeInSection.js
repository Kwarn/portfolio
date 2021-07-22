import React, { useState, useEffect, useRef } from 'react';
import classes from './FadeInSection.module.css';

function FadeInSection({
  fadeDirection,
  childAlignDirection,
  children,
  renderDelayDuration,
}) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      return setVisible(true);
    }, renderDelayDuration);
  }, [renderDelayDuration]);

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
