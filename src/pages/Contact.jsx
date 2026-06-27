import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);

  const validate = () => {
    let tempErrors = {};

    if (!formData?.name) tempErrors.name = "Name is required";

    if (!formData?.email) {
      tempErrors.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)
    ) {
      tempErrors.email = "Email is invalid";
    }

    if (!formData?.message) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch("http://localhost:9000/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          setSubmit(true);
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setSubmit(false), 3000);
        } else {
          setErrors({ api: data.error || 'Something went wrong.' });
        }

      } catch (err) {
        setErrors({ api: 'Unable to connect to the server. Is it Running ???' })
      }
    }
  };

  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      <h2 className="text-4xl font-bold mb-8 text-center">Get In Touch</h2>

      {submit && (
        <div className="mb-4 rounded bg-green-100 text-green-700 p-3">
          Message sent successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData?.name}
            onChange={handleChange}
            className={`w-full p-3 rounded border dark:bg-gray-700 dark:border-gray-600 focus:ring-2 ${errors?.name
                ? "border-red-500 focus:ring-red-500"
                : "focus:ring-indigo-500"
              }`}
          />
          {errors?.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData?.email}
            onChange={handleChange}
            className={`w-full p-3 rounded border dark:bg-gray-700 dark:border-gray-600 focus:ring-2 ${errors?.email
                ? "border-red-500 focus:ring-red-500"
                : "focus:ring-indigo-500"
              }`}
          />
          {errors?.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block mb-2">Message</label>
          <textarea
            name="message"
            value={formData?.message}
            onChange={handleChange}
            rows="5"
            className={`w-full p-3 rounded border dark:bg-gray-700 dark:border-gray-600 focus:ring-2 ${errors?.message
                ? "border-red-500 focus:ring-red-500"
                : "focus:ring-indigo-500"
              }`}
          />
          {errors?.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;