import React from 'react';
import './contact.css';


function Contact() {
    const [parentname, setName] = React.useState('');
    const [childname, setCName] = React.useState('');
    const [childgrade, setGrade] = React.useState('');
    const [momemail, setEmail] = React.useState('');
    const [momphone, setPhone] = React.useState('');
    const [parentchild, setParentChild] = React.useState('');
    const [joinwhatsapp, setWhatsapp] = React.useState(false);
    const [message, setMessage] = React.useState('');
    // Function to handle form submission
    // This function will be called when the form is submitted
    // It prevents the default form submission behavior, collects the form data,
    // converts it to JSON, and sends it to the specified URL using a POST request.
    // It also handles the response from the server, displaying an alert based on success or failure
    const handleSubmit = (event) => {
    event.preventDefault();

    if (isNaN(childgrade) || childgrade.trim() === "") {
        setMessage("Please enter Student Grade as Number.");
    return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(momemail)) {
        setMessage("Please enter a valid email address.");
        return;
    }

    if (!momemail.includes('@') || !momemail.includes('.')) {
        setMessage("Please enter a valid email address.");
    return;
    }

    if (momphone.trim() === "" || isNaN(momphone)) {
        setMessage("Please enter a valid phone number.");
    return;
    }

    if (parentname.trim() === "" || childname.trim() === "" || parentchild.trim() === "") {
        setMessage("Please fill in all required fields.");
    return;
    }
    // Collect form data
    const formData = new URLSearchParams();
    formData.append("parentname", parentname);
    formData.append("childname", childname);
    formData.append("childgrade", childgrade);
    formData.append("momemail", momemail);
    formData.append("momphone", momphone);
    formData.append("parentchild", parentchild);
    formData.append("joinwhatsapp", joinwhatsapp);
    formData.append("message", message);
    const url = process.env.REACT_APP_GOOGLE_SCRIPT_URL;
    fetch(url, {
        method: "POST",
        headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: formData.toString(),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log("Response:", data);
      setMessage("Thank you for your submission! We will get back to you soon.");
      setName("");
      setCName("");
      setGrade("");
      setEmail("");
      setPhone("");
      setParentChild("");
      setWhatsapp(false);
    })
    .catch((err) => console.error("Error:", err));
};


  return (
        <section id="cs-contact-490">
            <div className="cs-container">
                <div className="cs-content">
                    <span className="cs-topper">Sai Spiritual Education</span>
                    <h2 className="cs-title">Bal Vikas / SSE</h2>
                    <p className="cs-text">
                        Sai Spiritual Education is a <strong>FREE</strong> program to nurture the innate divinity in children and young adults. <br /><br />
                        It is a spiritual education program that helps children develop a <strong>strong moral foundation</strong>, <strong>character</strong>, and <strong>values</strong>.
                    </p>
                    <p className="cs-text">
                        The program is open to all children aged 5-18, regardless of their background or beliefs. It is designed to be inclusive and welcoming to all.
                    </p>
                    
                    <span className="cs-header">Address</span>
                    <a href="" className="cs-link">
                        2418 W Mangold Ave, <br />Milwaukee, WI 53221
                    </a>
                </div>
                <form id="cs-form-490" name="Contact Form" method="post" onSubmit={handleSubmit}>
                    <div> <h3>{message ? <p> {message} </p> : null}</h3> </div>
                    <label className="cs-label">
                        Parent Name
                        <input className="cs-input" value={parentname} required type="text" id="name-490" placeholder="Parent Name" onChange={(e) => setName(e.target.value)} ></input>
                    </label>
                    <label className="cs-label">
                        Student Name
                        <input className="cs-input" value={childname} required type="text" id="sname-490"  placeholder="Child Name" onChange={(e) => setCName(e.target.value)}></input>
                    </label>
                    <label className="cs-label">
                        Student Grade
                        <input className="cs-input" value={childgrade} required type="text" id="grade-490" placeholder="Student Grade" onChange={(e) => setGrade(e.target.value)}></input>
                    </label>
                    <label className="cs-label">
                        Parent Email
                        <input className="cs-input" value={momemail} required type="text" id="email-490" placeholder="Parents/Guardian Email" onChange={(e) => setEmail(e.target.value)}></input>
                    </label>
                    <label className="cs-label">
                        Parent Contact Phone Number
                        <input className="cs-input" value={momphone} required type="text" id="phone-490" placeholder="Contact Phone Number" onChange={(e) => setPhone(e.target.value)}></input>
                    </label>
                    <label className="cs-label">
                        Relationship to Student
                        <select className="cs-input" value={parentchild} required id="relationship-490" onChange={(e) => setParentChild(e.target.value)}>
                            <option value="" disabled>Select Relationship</option>
                            <option value="Father">Father</option>
                            <option value="Mother">Mother</option>
                            <option value="Relative">Relative</option>
                        </select>
                    </label>
                    <label className="cs-label">
                        Join Whatsapp Group
                        <input className="cs-input" value={joinwhatsapp} type="checkbox" id="whatsapp-490" checked={joinwhatsapp} onChange={(e) => setWhatsapp(e.target.checked)}></input>
                        <span className="cs-checkbox">Yes, I would like to join the SSE Whatsapp group</span>
                    </label>
                    <button className="cs-button-solid" type="submit">Submit Now.. Sai Ram</button>
                    <div> {message ? <p> {message} </p> : null} </div>
                </form>
            </div>
        </section>
    );
    }   
export default Contact;