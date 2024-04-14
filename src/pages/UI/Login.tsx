import { Link } from "react-router-dom";
import Input from "./Input";

export default function () {
  return (
    <div>
      <div className=" w-full min-h-screen flex justify-center items-center ">
        <form className="grid gap-4">
          <Input
            type="Email"
            placeholder="Enter your email"
            label="Email"
            name="email"
          />
          <Input
            type="password"
            placeholder="Enter your password"
            label="Password"
            name="password"
          />
          <div className="flex justify-center gap-8 mt-4">
            <Link
              to="/register"
              className="bg-blue-400 hover:bg-blue-600 px-4 py-2 rounded-full "
            >
              Register
            </Link>
            <button className="bg-blue-400 hover:bg-blue-600 px-4 py-2 rounded-full ">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
