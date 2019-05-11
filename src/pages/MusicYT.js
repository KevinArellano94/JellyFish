import React from "react";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import Music from "../components/Music";
import MusicList from "../components/MusicList";

function handleClick(e, data) {
  console.log(data.foo);
}

class MusicYT extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoId: YakushimaruEtsukoRadioOnsenEutopiaAlbum,
      player: null
    };

    this.onReady = this.onReady.bind(this);
    this.onPlayVideo = this.onPlayVideo.bind(this);
    this.onPauseVideo = this.onPauseVideo.bind(this);
  }

  onReady(event) {
    console.log(
      `YouTube Player object for videoId: "${
        this.state.videoId
      }" has been saved to state.`
    ); // eslint-disable-line
    this.setState({
      player: event.target
    });
  }

  onPlayVideo() {
    this.state.player.playVideo();
  }

  onPauseVideo() {
    this.state.player.pauseVideo();
  }

  render() {
    return (
      <div className="container">
        <Music videoId={this.state.videoId} onReady={this.onReady} />

        <div className="list-group">
          {/* Yakushimaru Etsuko */}
          <ContextMenuTrigger id="[Album] | Yakushimaru Etsuko | Radio Onsen Eutopia">
            <div className="well">
              <MusicList
                onClickFunction={() =>
                  this.setState({
                    videoId:
                      this.state.videoId !==
                      YakushimaruEtsukoRadioOnsenEutopiaAlbum
                        ? YakushimaruEtsukoRadioOnsenEutopiaAlbum
                        : YakushimaruEtsukoRadioOnsenEutopiaAlbum
                  })
                }
                videoName="Yakushimaru Etsuko - Radio Onsen Eutopia [Album]"
              />
            </div>
          </ContextMenuTrigger>

          {/* Post Rock */}
          <ContextMenuTrigger id="[Mix] | Post Rock">
            <MusicList
              onClickFunction={() =>
                this.setState({
                  videoId:
                    this.state.videoId !== BestOfMelancholicPostRockMix
                      ? BestOfMelancholicPostRockMix
                      : BestOfMelancholicPostRockMix
                })
              }
              videoName="Best Of Melancholic PostRock [Mix]"
            />
          </ContextMenuTrigger>
          {/* Nier Automata */}
          <ContextMenuTrigger id="Mixes: Music Mix">
            <MusicList
              onClickFunction={() =>
                this.setState({
                  videoId:
                    this.state.videoId !==
                    NierAutomataOSTVocalsGrandmaDestruction
                      ? NierAutomataOSTVocalsGrandmaDestruction
                      : NierAutomataOSTVocalsGrandmaDestruction
                })
              }
              videoName="Nier Automata OST [Vocals] - Grandma (Destruction)"
            />
          </ContextMenuTrigger>
        </div>
        <button
          type="button"
          className="btn btn-dark"
          onClick={this.onPlayVideo}
        >
          Play
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={this.onPauseVideo}
        >
          Pause
        </button>

        <ContextMenu id="[Album] | Yakushimaru Etsuko | Radio Onsen Eutopia">
          <MenuItem data={{ foo: "bar" }} onClick={this.handleClick}>
            <p className="btn btn-light" disabled>
              Yakushimaru Etsuko | Radio Onsen Eutopia songlist:
            </p>
            <ul className="btn btn-light" disabled>
              <li>Noruniru : 0:00</li>
              <li>Koi Suru Niwatori : 7:05</li>
              <li>Venus To Jesus : 9:19</li>
              <li>Cosmos Vs Alien : 12:32</li>
              <li>Kitakaze Kozou No Kantarou : 17:22</li>
              <li>Yamiyami : 21:59</li>
              <li>Shounen Yo Ware Ni Kaere : 25:58</li>
              <li>Cabbage UFO : 32:28</li>
              <li>Raja Maharaja : 35:22</li>
              <li>Tokimeki Hacker : 37:17</li>
              <li>Metropolitan Museum : 43:09</li>
              <li>Lonely Planet : 45:28</li>
            </ul>
          </MenuItem>
        </ContextMenu>

        <ContextMenu id="Genre: Post Rock">
          <MenuItem data={{ foo: "bar" }} onClick={this.handleClick}>
            <p className="btn btn-light" disabled>
              Post Rock
            </p>
          </MenuItem>
        </ContextMenu>

        <ContextMenu id="[Mix] | Post Rock">
          <MenuItem data={{ foo: "bar" }} onClick={this.handleClick}>
            <p className="btn btn-light">
              Infinite Tea | Best Of Melancholic Post-Rock Mix
            </p>
            <ul className="btn btn-light" disabled>
              <li>As Seas Exhale - Mare Incontra Il Cielo : 0:00</li>
              <li>Bitcrush - 270 Degrees : 10:56</li>
              <li>We Lost The Sea - A Gallant Gentleman : 23:09</li>
              <li>Follow The Compass - Be Near : 29:12</li>
              <li>Inside The Light - Morning Dawn : 32:25</li>
              <li>65daysofstatic - betraying chino : 42:54</li>
              <li>Collapse Under the Empire - The Last Reminder : 45:04</li>
              <li>
                Gather Your Quiet - Sentiments of fear and trembling : 51:03
              </li>
            </ul>
          </MenuItem>
        </ContextMenu>
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    // event.target.pauseVideo();
    event.target.playVideo();
  }
}

// Albums
const YakushimaruEtsukoRadioOnsenEutopiaAlbum = "qfV3qt2-430"; //Yakushimaru Etsuko - Radio Onsen Eutopia [Album]

// Mixes
const BestOfMelancholicPostRockMix = "ZpCluchEflg";

// Songs
const NierAutomataOSTVocalsGrandmaDestruction = "KcMAHY4DFW8"; // Nier Automata OST [Vocals] - Grandma (Destruction)

export default MusicYT;
