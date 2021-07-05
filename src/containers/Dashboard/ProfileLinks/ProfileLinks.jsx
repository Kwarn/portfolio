import React from 'react';
import imageAssets from '../../../assets/assets';
import classes from './ProfileLinks.module.css';
import FileSaver from 'file-saver';

export default function ProfileLinks() {
  const saveFile = () =>
    FileSaver.saveAs(
      process.env.PUBLIC_URL + '/resource/Karl_Warner_CV.pdf',
      'Karl_Warner_CV.pdf'
    );
  return (
    <div className={classes.ProfileLinks}>
      <a
        href="https://github.com/Kwarn/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={imageAssets.gitHubLight} alt="gitHubIcon"></img>
      </a>
      <a
        href="https://www.linkedin.com/in/karl-warner-9147661b5/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={imageAssets.linkedInLight} alt="linkedInIcon"></img>
      </a>
      <div className={classes.DownloadCV} onClick={saveFile}>
        <img src={imageAssets.cvIcon} alt="download CV" />
      </div>
    </div>
  );
}
