import DungeonItem from "@/components/dungeons/DungeonItem";
import Layout from "@/components/layouts/Layout";

interface Props {}

const Dungeons = ({}: Props) => {
  return (
    <Layout>
      <div className="flex justify-center h-full mt-12">
        <div className="flex gap-16">
          {[...new Array(3)].map((_, i) =><DungeonItem key={i} />)}
        </div>
      </div>
    </Layout>
  );
};

export default Dungeons;
