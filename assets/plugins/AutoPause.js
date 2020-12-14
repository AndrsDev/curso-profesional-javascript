class AutoPause {
  constructor() {
    this.handleIntersection = this.handleIntersection.bind(this)
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
  }
  run(player) {
    this.player = player;
    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: 0.25
    })

    observer.observe(player.media);
    document.addEventListener('visibilitychange', this.handleVisibilityChange);
  }

  handleVisibilityChange() {
    const isVisible = document.visibilityState;

    if(isVisible === 'visible'){
      this.player.play()
    } else {
      this.player.pause()
    }
  }

  handleIntersection(entries) {
    const entry = entries[0];

    if(entry.isIntersecting){
      this.player.play();
    } else {
      this.player.pause();
    }
  }
}

export default AutoPause;