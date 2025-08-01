<template>
    <div class="video-player">
      <video 
        ref="videoPlayer"
        :src="videoSource"
        controls
        @play="onPlay"
        @pause="onPause"
        @ended="onEnded"
        @timeupdate="onTimeUpdate"
        :poster="posterImage"
        :preload="preload"
      >
        Your browser does not support the video tag.
      </video>
      <!-- <div class="controls">
        <button @click="togglePlay">{{ isPlaying ? 'Pause' : 'Play' }}</button>
        <button @click="rewind">Rewind 10s</button>
        <button @click="fastForward">Fast Forward 10s</button>
        <span>{{ currentTimeFormatted }} / {{ durationFormatted }}</span>
      </div> -->
    </div>
  </template>
  
  <script>
  export default {
    props: {
      videoSource: {
        type: String,
        required: true
      },
      posterImage: {
        type: String,
        default: ''
      },
      preload: {
        type: String,
        default: 'auto'
      }
    },
    data() {
      return {
        isPlaying: false,
        currentTime: 0
      };
    },
    computed: {
      durationFormatted() {
        const minutes = Math.floor(this.videoDuration / 60);
        const seconds = Math.floor(this.videoDuration % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      },
      currentTimeFormatted() {
        const minutes = Math.floor(this.currentTime / 60);
        const seconds = Math.floor(this.currentTime % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      },
      videoDuration() {
        return this.$refs.videoPlayer ? this.$refs.videoPlayer.duration : 0;
      }
    },
    methods: {
      togglePlay() {
        const video = this.$refs.videoPlayer;
        if (this.isPlaying) {
          video.pause();
        } else {
          video.play();
        }
      },
      onPlay() {
        this.isPlaying = true;
      },
      onPause() {
        this.isPlaying = false;
      },
      onEnded() {
        this.isPlaying = false;
        this.currentTime = 0;
      },
      onTimeUpdate() {
        this.currentTime = this.$refs.videoPlayer.currentTime;
      },
      rewind() {
        const video = this.$refs.videoPlayer;
        video.currentTime -= 10;
      },
      fastForward() {
        const video = this.$refs.videoPlayer;
        video.currentTime += 10;
      }
    }
  };
  </script>
  
  <style scoped>
  .video-player {
    width: 100%;
    margin: 0 auto;
  }

  video {
    max-height: 350px;
  }
  
  .controls {
    display: none;
  }
  
  button {
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
  }
  </style>
  