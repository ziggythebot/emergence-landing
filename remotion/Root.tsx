import { Composition } from 'remotion';
import { TwitterAnnouncement } from './compositions/TwitterAnnouncement';
import { EventShowcase } from './compositions/EventShowcase';
import { HeroLoop } from './compositions/HeroLoop';
import { LondonSkylineData } from './compositions/LondonSkylineData';
import { AnimatedNetworkGraph } from './compositions/AnimatedNetworkGraph';
import { EventCountdown } from './compositions/EventCountdown';
import { EcosystemStats } from './compositions/EcosystemStats';
import { LocationFlythrough } from './compositions/LocationFlythrough';

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

      {/* EXPERIMENTAL VIDEOS */}

      {/* 1. London Skyline + Data Overlay - 30s, 16:9 */}
      <Composition
        id="LondonSkylineData"
        component={LondonSkylineData}
        durationInFrames={900} // 30 seconds at 30fps
        fps={30}
        width={1280}
        height={720}
      />

      {/* 2. Animated Network Graph - 45s, 16:9 */}
      <Composition
        id="AnimatedNetworkGraph"
        component={AnimatedNetworkGraph}
        durationInFrames={1350} // 45 seconds at 30fps
        fps={30}
        width={1280}
        height={720}
      />

      {/* 3. Event Countdown - 15s, 1:1 square for Instagram */}
      <Composition
        id="EventCountdown"
        component={EventCountdown}
        durationInFrames={450} // 15 seconds at 30fps
        fps={30}
        width={1080}
        height={1080}
      />

      {/* 4. Ecosystem Stats - 20s, 16:9 */}
      <Composition
        id="EcosystemStats"
        component={EcosystemStats}
        durationInFrames={600} // 20 seconds at 30fps
        fps={30}
        width={1280}
        height={720}
      />

      {/* 5. Location Flythrough - 40s, 16:9 */}
      <Composition
        id="LocationFlythrough"
        component={LocationFlythrough}
        durationInFrames={1200} // 40 seconds at 30fps
        fps={30}
        width={1280}
        height={720}
      />
    </>
  );
};
