import Benefit from "./components/Benefit";
import Feature from "./components/Feature";
import Welcome from "./components/Welcome";
import Slider from "./components/Customer";

export default function Home() {
  return (
    <div className="w-full min-h-screen ">
      <Welcome />
      <Feature />
      <Benefit />
      <Slider />
    </div>
  );
}
