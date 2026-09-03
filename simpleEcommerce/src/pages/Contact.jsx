function Contact() {
  return (
    <div className="w-full  flex justify-center items-center flex-col">
      <h1 className="font-bold text-blue-600 mb-10 text-6xl">Contact Us</h1>
      <h2 className="font-light text-2xl text-blue-900 ">
        We would love to hear from you! Whether you have a question about our
        products, shipping, returns, or anything else, our team is ready to
        answer all your questions.
      </h2>
      <div className="container mt-10 flex justify-between ">
        <div className="box flex flex-col gap-2 p-7 shadow-xl rounded-xl justify-center items-start hover:scale-103 transition duration-700  ">
          <h3 className="font-bold">📞 Phone</h3>
          <ul>
            <li>Customer Support: +1 (800) 555-0199</li>
            <li>Hours: Monday – Friday, 9:00 AM – 6:00 PM EST</li>
          </ul>
        </div>
        <div className="box flex flex-col gap-2 p-7 shadow-xl rounded-xl justify-center items-start hover:scale-103 transition duration-700  ">
          <h3 className="font-bold">✉️ Email</h3>
          <ul>
            <li>General Inquiries: support@clickshop.com</li>
            <li>Order Status: orders@clickshop.com</li>
          </ul>
        </div>
        <div className="box flex flex-col gap-2 p-7 shadow-xl rounded-xl justify-center items-start hover:scale-103 transition duration-700 ">
          <h3 className="font-bold">📍 Headquarters</h3>
          <ul>
            <li>
              Address: Click SHOP Headquarters, <br />
              123 Retail Boulevard, Suite 400, New York, NY 10001
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
