import { useNavigate } from "react-router-dom";
import Input from "./Input";
import axios from "axios";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();

  const [error, setError] = useState<boolean | string>("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement> | HTMLFormElement
  ) {
    e.preventDefault();

    const fd = new FormData(e.currentTarget);

    const data = Object.fromEntries(fd.entries());

    try {
      if (data.password === data.confirm_password) {
        const response = await axios.post(
          "/",
          {
            user_name: data.user_name,
            password: data.password,
            confirm_password: data.confrom_password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setError(false);
        console.log(response.status);
        navigate("/login");
      } else {
        setError(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center ">
      <form className="grid gap-4" onSubmit={(e) => handleSubmit(e)}>
        <Input
          type="Email"
          placeholder="Enter your email"
          label="Email"
          name="user_name"
        />
        <Input
          type="password"
          placeholder="Enter your password"
          label="Password"
          name="password"
        />
        <Input
          type="password"
          placeholder="Confirm password"
          label="Confrim Password"
          name="confirm_password"
        />
        {error && <p className="text-red-500">password error</p>}

        <div className="flex  items-center gap-4">
          <input
            type="checkbox"
            id="checkbox"
            required
            name="checkbox"
            autoComplete="new-password"
            className="p-4"
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
