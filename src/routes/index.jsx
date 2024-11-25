
import img1 from '../images/logo.png';
import me1 from '../images/me_lol.jpg';
import bitcoin from '../images/bitcoin-landscape.png';

import './index.scss';

export default function Index() {
  const handleClick = () => {
    const link = document.createElement('a');
    link.href = 'downloads/Stuart Bradbury - Curriculum Vitae.docx'; // Replace with the URL of your file
    link.download = 'Stuart Bradbury - Curriculum Vitae.docx'; // Replace with the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const visitLivestream = () => {
    window.open('/about', "_self");
  }

  const visitGithub = () => {
    window.open('https://github.com/sbrdbry/the-app', "_blank");
  }

  return (
    <>
<div className="container">
  <div className="row">
    <div className="column-66">
      <h1 className="xlarge-font"><b>Stuart <span className="surname">Bradbury</span></b></h1>
      <h1 className="large-font" style={{color: "MediumSeaGreen"}}><b>Who am I?</b></h1>
      <p><span style={{fontSize: "36px"}}>Develop software like a pro.</span> You should work with me because lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Contact us via <a href="mailto:sbrdbry@gmail.com">sbrdbry@gmail.com</a> / <a href="tel:+44 7389 082 177">+44 7389 082 177</a>.</p>
      <button className="button" onClick={handleClick}>Download C.V.</button>
    </div>
    <div className="column-33">
        <img src={img1} width="335" height="471"/>
    </div>
  </div>
</div>

<div className="container" style={{backgroundColor:"#f1f1f1"}}>
  <div className="row">
    <div className="column-33">
      <img src={me1} alt="App" width="335" height="471"/>
    </div>
    <div className="column-66">
      <h1 className="xlarge-font"><b>Rate</b></h1>
      <h1 className="large-font" style={{color:"#F4511E"}}><b>Much, how?</b></h1>
      <p><span style={{fontSize:"24px"}}>From just 0.00013BTC an hour.</span> Sharp and clean solutions with the world's best developer, incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <button className="button" style={{backgroundColor:"#F4511E"}} onClick={visitLivestream}>View Livestream</button>
    </div>
  </div>
</div>

<div className="container">
  <div className="row">
    <div className="column-66">
      <h1 className="xlarge-font"><b>Crypto</b></h1>
      <h1 className="large-font" style={{color:"#F7931A"}}><b>How to pay?</b></h1>
      <p><span style={{fontSize:"36px"}}>Send us some Bitcoin.</span> Contact me for a personal Bitcoin address, and let us know what it is you want in return ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <button className="button" style={{backgroundColor:"#F7931A"}} onClick={visitGithub}>GitHub Repo</button>
    </div>
    <div className="column-33">
        <img src={bitcoin} width="335" height="471" />
    </div>
  </div>
</div>
  </>
  );
}