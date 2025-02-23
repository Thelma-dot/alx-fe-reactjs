
function Contact() {
  // State for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    console.log("Form submitted:", { name, email });
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
