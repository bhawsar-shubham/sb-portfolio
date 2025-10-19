import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";
import InputField from "../CommonInuptField";
import TextAreaField from "../CommonTextAreaField";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [timestamp, setTimestamp] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    const currentTimestamp = new Date();
    setTimestamp(currentTimestamp);
  
    // Generate a random ID
    const randomId = `id-${Math.floor(Math.random() * 1000000)}`; // Adjust range if needed
    console.log("Generated Random ID:", randomId);
  
    const formData = { id: randomId, name, email, message, timestamp: currentTimestamp };
  
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      if (result.success) {
        toast.success(`Thank you for your message, ${name}! I will get back to you soon.`);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };
  
  

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
      <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
      <form className="flex flex-col items-center gap-5 border p-3 shadow-sm">
        <h2 className="text-2xl font-normal">Send me a Message</h2>
        <h4 className="text-xl font-mono">I am very responsive to messages</h4>

        <InputField
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          register={register}
          errors={errors}
          placeholder="Name"
        />
        <InputField
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          register={register}
          errors={errors}
          type="email"
          placeholder="Email"
          required={true}
        />
        <TextAreaField
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          register={register}
          errors={errors}
          placeholder="Enter Your Message"
          required={true}
        />

        <button
          type="button"
          onClick={handleSubmit(onSubmit)}
          className="px-10 py-3 text-white font-medium bg-blue-400 hover:bg-blue-900 rounded-full"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
