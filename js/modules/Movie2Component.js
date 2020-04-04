export default {
    template: `
    <div class="video">

    <video id="video" controls preload="metadata">
   <source src="video/fresh.mp4" type="video/mp4">
   <source src="video/fresh.webm" type="video/webm">
   <track label="English" kind="subtitles" srclang="en" src="captions/vtt/sintel-en.vtt" default>
</video>

<div id="video-controls" class="controls" data-state="hidden">
   <button id="playpause" type="button" data-state="play">Play/Pause</button>
   <button id="stop" type="button" data-state="stop">Stop</button>
   <div class="progress">
      <progress id="progress" value="0" min="0">
         <span id="progress-bar"></span>
      </progress>
   </div>
   <button id="mute" type="button" data-state="mute">Mute/Unmute</button>
   <button id="volinc" type="button" data-state="volup">Vol+</button>
   <button id="voldec" type="button" data-state="voldown">Vol-</button>
   <button id="fs" type="button" data-state="go-fullscreen">Fullscreen</button>
   <button id="subtitles" type="button" data-state="subtitles">CC</button>
</div>

    </div>

    `,

}
