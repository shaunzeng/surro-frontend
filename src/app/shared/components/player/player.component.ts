import { Component,  ViewChild, ElementRef, AfterContentInit, Input, OnDestroy } from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html'
})
export class PlayerComponent implements  AfterContentInit, OnDestroy {
  @ViewChild('videoPlayer', { static: true }) videoPlayer: ElementRef;
  @Input() options = {};
  player;
  constructor() { }

  ngAfterContentInit(): void {
    this.player = videojs(this.videoPlayer.nativeElement, this.options,
      // tslint:disable-next-line:typedef
      function onPlayerReady() {
    });
  }

  ngOnDestroy(): void {
    if (this.player) {
      this.player.dispose();
    }
  }


}
