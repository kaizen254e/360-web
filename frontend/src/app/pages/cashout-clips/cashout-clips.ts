import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoService, Video } from '../../service/video/video.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-cashout-clips',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cashout-clips.html',
  styleUrl: './cashout-clips.css'
})
export class CashoutClips implements OnInit {
  videos: Video[] = [];
  loading = false;
  error = false;
  selectedVideo: Video | null = null;
  showVideoModal = false;

  constructor(
    private videoService: VideoService,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    this.loadVideos();
  }

  loadVideos() {
    this.loading = true;
    this.error = false;

    this.videoService.getActiveVideos().subscribe({
      next: (response) => {
        this.videos = response.videos;
        this.loading = false;
        console.log('Loaded videos:', this.videos);
      },
      error: (error) => {
        console.error('Error loading videos:', error);
        this.error = true;
        this.loading = false;
        this.toastService.error('Failed to load videos');
      }
    });
  }

  playVideo(video: Video) {
    console.log('Playing video:', video);
    this.selectedVideo = video;
    this.showVideoModal = true;

    // Increment view count
    this.videoService.incrementViews(video.id).subscribe({
      next: () => {
        video.views++;
        console.log('View count incremented');
      },
      error: (error) => {
        console.error('Error incrementing view count:', error);
      }
    });
  }

  closeVideoModal() {
    this.showVideoModal = false;
    this.selectedVideo = null;
  }

  getVideoThumbnail(video: Video): string {
    return video.thumbnailUrl || 'https://via.placeholder.com/400x300/cccccc/666666?text=No+Thumbnail';
  }

  getVideoDuration(video: Video): string {
    if (!video.duration) return 'Unknown';
    const minutes = Math.floor(video.duration / 60);
    const seconds = video.duration % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

  formatViews(views: number): string {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`;
    }
    return views.toString();
  }
}
