import MediaPlayer from "../MediaPlayer";

class AutoPause {
  private player: MediaPlayer;

  constructor() {
    this.handleIntersection = this.handleIntersection.bind(this)
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
  }

  run(player: MediaPlayer) {
    this.player = player;
    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: 0.25
    })

    observer.observe(player.media);
    document.addEventListener('visibilitychange', this.handleVisibilityChange);
  }

  private handleVisibilityChange() {
    const isVisible = document.visibilityState;

    if(isVisible === 'visible'){
      this.player.play()
    } else {
      this.player.pause()
    }
  }

  private handleIntersection(entries: IntersectionObserverEntry[]) {
    const entry = entries[0];
    if(entry.isIntersecting){
      this.player.play();
    } else {
      this.player.pause();
    }
  }
}

export default AutoPause;