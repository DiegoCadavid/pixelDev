import Layout from "@/components/layouts/Layout";
import Player from "@/components/player/Player";
import PlayerCard from "@/components/player/PlayerCard";
import BackgroundParadax from "../components/core/BackgroundParadax";

interface Props {}

const Home = ({}: Props) => {
  return (
    <Layout>
      <BackgroundParadax
        backgroundLayers={[
          "/assets/background/home/layer1.png",
          "/assets/background/home/layer2.png",
          "/assets/background/home/layer3.png",
          "/assets/background/home/layer4.png",
          "/assets/background/home/layer5.png",
        ]}
        strength={2}
      />

      <PlayerCard />

      {/*Refactor position  */}
      <div className="mb-[5%] flex flex-grow flex-col items-center justify-end">
        <Player />
      </div>
    </Layout>
  );
};

export default Home;
