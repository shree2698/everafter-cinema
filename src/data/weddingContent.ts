import weddingDataJson from './weddingData.json';

export type WeddingDataType = typeof weddingDataJson;

export interface WeddingEvent {
  id: string;
  name: string;
  date: string;
  displayDate: string;
  time: string;
  venueName: string;
  venueAddress: string;
  description: string;
  dressCode?: string;
  iconName: string;
  image?: string;
}

export interface StoryScene {
  sceneNumber: string;
  headline: string;
  subtext: string;
  image: string;
  caption: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  image: string;
  location: string;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  caption: string;
  orientation: 'portrait' | 'landscape' | 'square';
  category: 'candid' | 'ceremony' | 'portraits' | 'details';
}

// Single source of truth loaded dynamically from weddingData.json
export const weddingData = {
  meta: weddingDataJson.meta,
  couple: weddingDataJson.couple,
  weddingDate: weddingDataJson.weddingDate,
  audio: weddingDataJson.audio,
  hero: weddingDataJson.hero,
  storyPrologue: weddingDataJson.storyPrologue,
  storyScenes: weddingDataJson.storyPrologue.scenes as StoryScene[],
  parallaxScene: weddingDataJson.parallaxScene,
  timeline: weddingDataJson.timeline,
  timelineMilestones: weddingDataJson.timeline.milestones as TimelineMilestone[],
  gallery: weddingDataJson.gallery.photos as GalleryPhoto[],
  galleryConfig: weddingDataJson.gallery,
  eventsConfig: weddingDataJson.events,
  events: weddingDataJson.events.items as WeddingEvent[],
  venue: weddingDataJson.venue,
  countdown: weddingDataJson.countdown,
  rsvp: weddingDataJson.rsvp,
  closingStatement: weddingDataJson.closingStatement
};

export default weddingData;
