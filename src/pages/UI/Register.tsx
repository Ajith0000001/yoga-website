import { useNavigate } from "react-router-dom";
import Input from "./Input";

export default function Register() {
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement> | HTMLFormElement) {
    e.preventDefault();

    const fd = new FormData(e.currentTarget);

    const data = Object.fromEntries(fd.entries());

    if (data.password !== data.confrimPassword) {
      return;
    }
    navigate("/login");
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center ">
      <form className="grid gap-4" onSubmit={(e) => handleSubmit(e)}>
        <Input
          type="Email"
          placeholder="Enter your email"
          label="Email"
          name="RegsiterEmail"
        />
        <Input
          type="password"
          placeholder="Enter your password"
          label="Password"
          name="RegisterPassword"
        />
        <Input
          type="password"
          placeholder="Confirm password"
          label="Confrim Password"
          name="RegisterConfrimPassword"
        />
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            id="checkbox"
            required
            name="RegisterCheckbox"
          />
          <label htmlFor="checkbox" className="text-sm">
            {" "}
            Agreeed to the terms and conditions
          </label>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-400 px-4 py-2 rounded-full mx-auto"
          >
            Regsiter
          </button>
        </div>
      </form>
    </div>
  );
}
