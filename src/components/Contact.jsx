import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xzzbpydq");
  if (state.succeeded) {
    return <motion.h2
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -70 }}
      transition={{ duration: 0.5 }}
      className="my-80 text-center text-4xl font-thin"
    >
      Thank You For Your Message!
    </motion.h2>
    ;
    
  }

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -70 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-thin"
      >
        Contact Me
      </motion.h2>
      <div className="text-center tracking-tighter">
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto space-y-6 bg-slate-900 p-6 rounded-lg shadow-md"
        >
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm text-neutral-400 mb-2 text-left"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="border bg-slate-800 border-neutral-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-700 transition-colors"
              placeholder="Your email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-500 text-sm mt-2"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="text-sm text-neutral-400 mb-2 text-left"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              className="border bg-slate-800 border-neutral-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-700 transition-colors h-32"
              placeholder="Write your message here"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-red-500 text-sm mt-2"
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-sky-800 text-slate-200 py-3 rounded-md hover:bg-sky-900 transition-colors disabled:opacity-50"
          >
            Submit
          </button>
        </form>

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="my-4"
        >
          {CONTACT.email}
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;