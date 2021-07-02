import React, { useState, useEffect, useRef, Suspense } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import classes from './Home.module.css';
import Dashboard from '../Dashboard/Dashboard';
import WebFont from 'webfontloader';

const Home = () => {
  const [modalControl, setModalControl] = useState({
    isOpen: false,
    modalContent: null,
  });

  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    window.addEventListener('resize', updateWindowDimensions);
    WebFont.load({
      google: {
        families: ['Teko'],
      },
    });
    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, []);

  const updateWindowDimensions = () =>
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

  const showModalHandler = modalContent => {
    setModalControl({ modalContent: modalContent, isOpen: true });
  };

  const hideModalHandler = () => {
    setModalControl({ ...modalControl.modalContent, isOpen: false });
  };

  const elementRefs = {
    skills: useRef(null),
    dashboard: useRef(null),
    courses: useRef(null),
    extraInfo: useRef(null),
    contact: useRef(null),
  };

  const modal = (
    <Modal show={modalControl.isOpen} hide={() => hideModalHandler()}>
      {modalControl.modalContent}
    </Modal>
  );
  // <p>
  //   A devout learner experienced in Full-stack development with a
  //   focus on front-end systems, utilizing popular modern frameworks &
  //   libraries whilst practising the latest generation of architecture
  //   and design principles to create responsive, scaleable, and
  //   initiative web solutions.
  // </p>

  return (
    <div ref={elementRefs.dashboard} className={classes.DashboardWrapper}>
      <Dashboard showModal={modalContent => showModalHandler(modalContent)} />
    </div>
  );
};

export default Home;
