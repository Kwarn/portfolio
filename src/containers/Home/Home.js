import React, { useState, useEffect } from 'react';
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

  const modal = (
    <Modal show={modalControl.isOpen} hide={() => hideModalHandler()}>
      {modalControl.modalContent}
    </Modal>
  );

  return (
    <div className={classes.DashboardWrapper}>
      <Dashboard showModal={modalContent => showModalHandler(modalContent)} />
    </div>
  );
};

export default Home;
