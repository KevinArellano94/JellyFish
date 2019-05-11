import React from "react";

function MusicPage(props) {
  return (
    <div className="container">
      <div class="list-group">
        <a class="list-group-item" href="#">
          <i class="fa fa-home fa-fw" aria-hidden="true" />
          &nbsp; Home
        </a>
        <a class="list-group-item" href="#">
          <i class="fa fa-book fa-fw" aria-hidden="true" />
          &nbsp; Library
        </a>
        <a class="list-group-item" href="#">
          <i class="fa fa-pencil fa-fw" aria-hidden="true" />
          &nbsp; Applications
        </a>
        <a class="list-group-item" href="#">
          <i class="fa fa-cog fa-fw" aria-hidden="true" />
          &nbsp; Settings
        </a>
      </div>

      <audio src="" controls id="audioPlayer">
        Heh heh... get your browser to work with html5...
      </audio>

      <div className="container">
        <i class="fas fa-backward" onclick="playlist.prevTrack();" />
        <i class="fas fa-play" onclick="playlist.player.play();" />
        <i class="fas fa-pause" onclick="playlist.player.pause();" />
        <i class="fas fa-forward" onclick="playlist.nextTrack();" />
      </div>

      <ul id="playlist">
        <li>
          <a href="audio/Antipixel - Electro Panda Eyes.mp3">
            Yakushimaru Etsuko - Radio Onsen Eutopia (Album)
          </a>
        </li>
        <li>
          <a href="audio/Antipixel - Electro Panda Eyes.mp3">
            Antipixel - Electro Panda Eyes
          </a>
        </li>
        <li>
          <a href="audio/OWEL - Every Good Boy Does Fine.mp3">
            OWEL - Every Good Boy Does Fine
          </a>
        </li>
        <li>
          <a href="audio/OWEL - Every Good Boy Does Fine.mp3">
            Stvannyr | Secrets of the Runes (Album)
          </a>
        </li>
      </ul>

      <div className="container">
        <a href="#" onclick="playlist.prevTrack();">
          <button type="button" class="btn btn-dark">
            <i class="fas fa-backward" onclick="playlist.prevTrack();" />
          </button>
        </a>

        <a href="#" onclick="playlist.togglePlay();">
          <button type="button" class="btn btn-dark">
            <i class="fas fa-play" onclick="playlist.player.play();" />
            <i class="fas fa-pause" onclick="playlist.player.pause();" />
          </button>
        </a>

        <a href="#" onclick="playlist.toggleShuffle();">
          <button type="button" class="btn btn-dark">
            <i class="fas fa-random" onclick="playlist.toggleShuffle();" />
          </button>
        </a>

        <a href="#" onclick="playlist.nextTrack();">
          <button type="button" class="btn btn-dark">
            <i class="fas fa-forward" onclick="playlist.nextTrack();" />
          </button>
        </a>
      </div>

      <p>JellyFish Music App</p>
    </div>
  );
}

export default MusicPage;
