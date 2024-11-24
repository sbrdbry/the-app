import './news.scss';

export default function News() {
  // Pause and play the video, and change the button text
  function myFunction() {
    // Get the video
    var video = document.getElementById("myVideo");

    // Get the button
    var btn = document.getElementById("myBtn");

    if (video.paused) {
      video.play();
      btn.innerHTML = "Pause";
    } else {
      video.pause();
      btn.innerHTML = "Play";
    }
  }

  return (
    <>
    {/*<h1>NEWS</h1>*/}
<video autoPlay muted loop id="myVideo">
  <source src="rain.mp4" type="video/mp4" />
</video>

<div className="content">
  <h1>Heading</h1>
  <p>Lorem ipsum...</p>
  <button id="myBtn" onClick={myFunction}>Pause</button>
</div>
    </>
  );
}