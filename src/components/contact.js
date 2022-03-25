import React, { useState } from "react";
import "./contact.css";
const FormRequest = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");

  const submitRequest = async (e) => {
    e.preventDefault();
   console.log({ email, message, name, phoneNum });
    fetch("http://localhost:3001/access", {
      
      method: "POST",
      headers: {"Content-Type":"application/json",
       
        },
      body: JSON.stringify({ email, message, name, phoneNum }),
    });  
   
   
  };

  return (
    <div>
      <div className="contact-container">
        <div className="contact-pad">
          <form action="/access" className="Contact" onSubmit={submitRequest}>
            <h2 className="contact-title">Contact Me</h2>

            {/* Email */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Email"
              >
                Email
              </label>
              <input
                className="Email"
                type="text"
                name="email"
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Email"
              >
                Phone Number
              </label>
              <input
                className="Phone"
                type="text"
                name="phone"
                placeholder="Phone Number"
                onChange={(e) => setPhoneNum(e.target.value)}
                value={phoneNum}
                required
              />
            </div>
            {/* Name */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Name"
              >
                Name
              </label>
              <input
                className="Name"
                type="text"
                name="Name"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>
            {/* Message */}
            <div className="mb-4">
              <label className="message-tb" htmlFor="message">
                Message 
              </label>
              <textarea
                className="message-textBox"
                name="message"
                type="text"
                placeholder="Tell me your purpose"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button className="submit" type="submit">
                Send A Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormRequest;
