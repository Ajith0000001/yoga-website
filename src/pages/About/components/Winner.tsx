import Achievement from "../../Home/components/Achievement";
import LiveSore from "./LiveSore";

export default function Winner() {
  return (
    <div>
      <h2 className="text-4xl mt-8 ml-10 ">About us</h2>

      <div className="text-3xl flex justify-center items-center gap-10 mt-10 font-bold">
        <div className="flex gap-2 ">
          Wins:
          <LiveSore />+
        </div>
        <div>24 Hours Services</div>
        Certificated Pratices
      </div>
      <div className="mt-8">
        <Achievement />
      </div>
    </div>
  );
}
