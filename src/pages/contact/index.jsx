export default function Contact() {
  return (
    <div>
      <div className="py-10">
        <h2 className="text-xl font-bold px-5">Contact Us</h2>
        <div className="text-center mx-auto w-3/4 mt-10">
          <p className="font-semibold">We'd love to hear from you</p>
          <p className="mt-3">
            Whether your query is about features, materials, pricing or anything
            else, our team is ready to answer all your questions.
          </p>
          <p className="mt-10">
            For Press:{" "}
            <span className="text-primary font-semibold">
              corpcom@designcafe.com
            </span>
          </p>
          <p>For Business Partnerships</p>
          <p className="text-primary font-semibold">corpcom@designcafe.com</p>
          <p>
            For Jobs:{" "}
            <span className="text-primary font-semibold">
              corpcom@designcafe.com
            </span>
          </p>
          <p>
            For Others:
            <span className="text-primary font-semibold">
              corpcom@designcafe.com
            </span>
          </p>
        </div>
      </div>

      <div className="mt-6">
        <div className="w-5/6 mx-auto">
          <label htmlFor="fullName" className="block">
            Full Name*
          </label>
          <input
            type="text"
            placeholder="Rxxx Sxxx"
            className="outline-none bg-secondary p-2 w-full rounded-lg"
          />
        </div>
        <div className="w-5/6 mx-auto mt-4">
          <label htmlFor="mobileNo" className="block">
            Mobile No*
          </label>
          <input
            type="tel"
            placeholder="9xxxxxx"
            className="outline-none bg-secondary p-2 w-full rounded-lg"
          />
        </div>
        <div className="w-5/6 mx-auto mt-4">
          <label htmlFor="email" className="block">
            Email Id*
          </label>
          <input
            type="email"
            placeholder="Email Id"
            className="outline-none bg-secondary p-2 w-full rounded-lg"
          />
        </div>
        <div className="w-5/6 mx-auto mt-4">
          <label htmlFor="mobileNo" className="block">
            Select Location*
          </label>
          <select
            name=""
            id=""
            className="outline-none bg-secondary p-2 w-full rounded-lg"
          >
            <option value="">Select Location*</option>
            <option value="">Bengaluru</option>
            <option value="">Hyderabad</option>
            <option value="">Chennai</option>
            <option value="">Mumbai</option>
            <option value="">Navi Mumbai</option>
          </select>
        </div>
        <div className="w-5/6 mx-auto mt-4">
          <label htmlFor="mobileNo" className="block">
            Message
          </label>
          <textarea
            placeholder="9xxxxxx"
            rows={5}
            className="outline-none resize-none bg-secondary p-2 w-full rounded-lg"
          ></textarea>
        </div>
        <div className="w-5/6 mx-auto mt-4">
          <button className="py-2 w-full bg-primary text-white rounded-lg">
            Submit
          </button>
        </div>{" "}
      </div>

      <div className="mt-10 px-7">
        <h2 className="font-semibold text-xl">Visit us</h2>
        <select
          name=""
          id=""
          className="outline-black bg-secondary p-2 w-full rounded-lg mt-4 md:w-3/4"
        >
          <option value="">Select cities</option>
          <option value="">Bengaluru</option>
          <option value="">Thane</option>
          <option value="">Navi Mumbai</option>
        </select>
      </div>

      <div className="mt-16 px-7">
        <div>
          <h2 className="font-semibold">Chennai</h2>
          <p className="font-semibold mt-3">
            DesignCafe Experience Centre, Mount Road
          </p>
          <p className="mt-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            ad odit temporibus!
          </p>
          <p className="mt-3">
            Landmark: Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <p className="mt-3">Phone: 080-68065000</p>
          <button className="text-white bg-primary py-2 px-4 rounded-lg">
            Get Direction
          </button>
        </div>

        <div className="mt-16">
          <h2 className="font-semibold">Chennai</h2>
          <p className="font-semibold mt-3">
            DesignCafe Experience Centre, Mount Road
          </p>
          <p className="mt-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            ad odit temporibus!
          </p>
          <p className="mt-3">
            Landmark: Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <p className="mt-3">Phone: 080-68065000</p>
          <button className="text-white bg-primary py-2 px-4 rounded-lg">
            Get Direction
          </button>
        </div>

        <div className="mt-16">
          <h2 className="font-semibold">Chennai</h2>
          <p className="font-semibold mt-3">
            DesignCafe Experience Centre, Mount Road
          </p>
          <p className="mt-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            ad odit temporibus!
          </p>
          <p className="mt-3">
            Landmark: Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <p className="mt-3">Phone: 080-68065000</p>
          <button className="text-white bg-primary py-2 px-4 rounded-lg">
            Get Direction
          </button>
        </div>

        <div className="mt-16">
          <h2 className="font-semibold">Chennai</h2>
          <p className="font-semibold mt-3">
            DesignCafe Experience Centre, Mount Road
          </p>
          <p className="mt-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            ad odit temporibus!
          </p>
          <p className="mt-3">
            Landmark: Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <p className="mt-3">Phone: 080-68065000</p>
          <button className="text-white bg-primary py-2 px-4 rounded-lg">
            Get Direction
          </button>
        </div>
      </div>
    </div>
  );
}
