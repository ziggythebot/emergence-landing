import { Composition } from 'remotion';
import { TwitterAnnouncement } from './compositions/TwitterAnnouncement';
import { EventShowcase } from './compositions/EventShowcase';
import { HeroLoop } from './compositions/HeroLoop';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Twitter announcement - 16:9 landscape */}
      <Composition
        id="TwitterAnnouncement"
        component={TwitterAnnouncement}
        durationInFrames={180} // 6 seconds at 30fps
        fps={30}
        width={1280}
        height={720}
      />

      {/* Event showcase - TikTok/Instagram vertical */}
      <Composition
        id="EventShowcase"
        component={EventShowcase}
        durationInFrames={450} // 15 seconds at 30fps
        fps={30}
        width={1080}
        height={1920}
      />

      {/* Hero loop for website */}
      <Composition
        id="HeroLoop"
        component={HeroLoop}
        durationInFrames={150} // 5 second loop at 30fps
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
