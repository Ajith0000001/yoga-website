import Levels from "./components/Levels";
import PriceCard from "./components/PriceCard";

export default function Demo() {
  return (
    <div className="w-full min-h-screen">
      <Levels />
      <div className="flex justify-center items-center gap-6 my-16">
        <PriceCard title="Beginner Level" price={20} />
        <PriceCard title="Intermediate Level" price={50} />
        <PriceCard title="Expert Level" price={100} />
      </div>
    </div>
  );
}
