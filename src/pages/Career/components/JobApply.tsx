import Input from "../../UI/Input";

export default function JobApply() {
  return (
    <>
      <h2 className="text-[2rem] ml-[15rem] mt-[2rem]">Application</h2>
      <form action="">
        <div className="grid justify-center mt-[2rem]  mx-auto w-full pt-4 h-screen ">
          <div className="flex flex-col gap-4">
            <Input
              type="text"
              placeholder="Enter your name"
              label="Name*"
              name="name"
            />
            <Input
              type="email"
              placeholder="Enter your email"
              label="Email*"
              name="email"
            />
            <Input type="date" placeholder="" label="DOB" name="dob" />

            <div className="flex justify-center items-center gap-[4rem]">
              <div>
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Gender
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5"
                  required
                >
                  <option selected>Choose</option>
                  <option value="US">Male</option>
                  <option value="CA">Female</option>
                  <option value="FR">Others</option>
                </select>
              </div>
              <div className="mt-2">
                <Input
                  type="text"
                  label="Phone"
                  placeholder="Phone Number"
                  name="phoneNumber"
                />
              </div>
            </div>
            <label htmlFor="textarea">Summary</label>
            <textarea
              id="textarea"
              cols={10}
              rows={5}
              className="border outline-none  bg-gray-50 border-gray-300 rounded-xl w-[300px] p-2.5 text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
            <div className="flex justify-center">
              {" "}
              <button
                type="submit"
                className="bg-blue-400 px-4 py-2 rounded-full inline-block hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
