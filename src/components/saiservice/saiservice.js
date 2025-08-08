import React from 'react';
import './saiservice.css';


function SaiService() {
            const [parentname, setsName] = React.useState('');
            const [parentemail, setsEmail] = React.useState('');
            const [parentphone, setsPhone] = React.useState('');
            const [joinwhatsapp, setWhatsapp] = React.useState(false);
            const [message, setMessage] = React.useState('');
            const handleSubmit = (event) => {
            event.preventDefault();

            if (parentname.trim() === "") {
                setMessage("Please enter Name.");
            return;
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(parentemail)) {
                setMessage("Please enter a valid email address.");
                return;
            }

            if (!parentemail.includes('@') || !parentemail.includes('.')) {
                setMessage("Please enter a valid email address.");
            return;
            }

            if (parentphone.trim() === "" || isNaN(parentphone)) {
                setMessage("Please enter a valid phone number.");
            return;
            }

            // Collect form data
            const formData = new URLSearchParams();
            formData.append("parentname", parentname);
            formData.append("parentemail", parentemail);
            formData.append("parentphone", parentphone);
            formData.append("joinwhatsapp", joinwhatsapp);
            formData.append("message", message);
            const url = process.env.REACT_APP_GOOGLE_SCRIPT_URL_SAIEVENT;
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
            setMessage("SaiRam !!! Thank you for your submission!");
            setsName("");
            setsEmail("");
            setsPhone("");
            setWhatsapp(false);
            })
            .catch((err) => console.error("Error:", err));
        };

    return (
            <>
            <section id="services-1267">
                <div className="cs-container">
                    <div className="cs-content">
                        <span className="cs-topper">Sathya Sai Services</span>
                        <h2 className="cs-title">Hands that Serve are Holier than lips that Pray</h2>
                        <p className="cs-text"></p>
                        <ol>
                            <li>
                                <strong>Selfless Love:</strong> Service should be performed with unconditional love and the attitude of serving God in all beings. 
                            </li>
                            <li>
                                <strong>Humility and Appreciation</strong>: Volunteers should approach service with humility, recognizing the opportunity to serve as a gift from God. 
                            </li>
                            <li>
                                <strong>Ego and Attachment</strong>: Baba emphasized the importance of overcoming ego and attachment in service, as these can hinder spiritual progress. 
                            </li>
                            <li>
                                <strong>"Love All Serve All"</strong>: This is the core principle guiding the SSIO's service activities. 
                            </li>
                            <li>
                                <strong>Service to Others as Service to God</strong>: Baba taught that serving humanity is serving the divine. 
                            </li>
                        </ol>
                        <form id="cs-form-490" name="Sai Event Form" method="post" onSubmit={handleSubmit}>
                            <div> <h3>{message ? <p> {message} </p> : null}</h3> </div>
                            <label className="cs-label">
                                Name
                                <input className="cs-input" value={parentname} required type="text" id="sname-490" placeholder="Name" onChange={(e) => setsName(e.target.value)} ></input>
                            </label>
                            <label className="cs-label">
                                Email
                                <input className="cs-input" value={parentemail} required type="text" id="semail-490" placeholder="Email" onChange={(e) => setsEmail(e.target.value)} ></input>
                            </label>
                            <label className="cs-label">
                                Phone
                                <input className="cs-input" value={parentphone} required type="text" id="sphone-490" placeholder="Phone" onChange={(e) => setsPhone(e.target.value)} ></input>
                            </label>
                            <label className="cs-label">
                                Join Whatsapp Group
                                <input className="cs-input" value={joinwhatsapp} type="checkbox" id="swhatsapp-490" checked={joinwhatsapp} onChange={(e) => setWhatsapp(e.target.checked)}></input>
                                <span className="cs-checkbox">Yes, I would like to join Whatsapp group</span>
                            </label>
                            <button className="cs-button-solid" type="submit">Sai Ram .. Add Me</button>
                        </form>
                    </div>
                    <div className="cs-wrapper">
                        <ul className="cs-card-group">
                            <li className="cs-item">
                                <h3 className="cs-h3">
                                    <picture className="cs-picture">
                                        <img className="cs-icon" aria-hidden="true"
                                                src="https://csimg.nyc3.digitaloceanspaces.com/Services/two-people.svg" alt="svg icon"
                                                width="37" height="29" loading="lazy" decoding="async"></img>
                                    </picture>
                                    Community Outreach
                                </h3>
                                <span className="cs-number">Social</span>
                                <p className="cs-item-text">
                                    Engaging in various activities like providing food and clothing to the needy, adopting communities, and supporting refugees. 
                                </p>
                            </li>
                            <li className="cs-item">
                                <h3 className="cs-h3">
                                    <picture className="cs-picture">
                                        <img className="cs-icon" aria-hidden="true"
                                                src="https://csimg.nyc3.digitaloceanspaces.com/Services/line-graph.svg" alt="svg icon"
                                                width="37" height="29" loading="lazy" decoding="async"></img>
                                    </picture>
                                    Values-Based Education
                                </h3>
                                <span className="cs-number">Learning</span>
                                <p className="cs-item-text">
                                    Promoting education based on universal human values such as truth, right conduct, peace, love, and non-violence.
                                </p>
                            </li>
                            <li className="cs-item">
                                <h3 className="cs-h3">
                                    <picture className="cs-picture">
                                        <img className="cs-icon" aria-hidden="true"
                                                src="https://csimg.nyc3.digitaloceanspaces.com/Services/briefcase2.svg" alt="svg icon"
                                                width="37" height="29" loading="lazy" decoding="async"></img>
                                    </picture>
                                    Environmental Care
                                </h3>
                                <span className="cs-number">Reduce, Reuse, Recycle</span>
                                <p className="cs-item-text">
                                    Participating in projects like rescuing seedlings and promoting environmental awareness. Planting tress, cleaning parks, and promoting sustainable practices.
                                </p>
                            </li>
                            <li className="cs-item">
                                <h3 className="cs-h3">
                                    <picture className="cs-picture">
                                        <img className="cs-icon" aria-hidden="true"
                                                src="https://csimg.nyc3.digitaloceanspaces.com/Services/three-bars.svg" alt="svg icon"
                                                width="37" height="29" loading="lazy" decoding="async"></img>
                                    </picture>
                                    Health and Wellness
                                </h3>
                                <span className="cs-number">Health</span>
                                <p className="cs-item-text">
                                    Organizing health camps, blood donation drives, and awareness programs to promote physical and mental well-being.
                                </p>
                            </li>
                        </ul>
                        <picture className="cs-background">
                            <img src="https://csimages2.nyc3.digitaloceanspaces.com/Services/orange-waves.jpg" alt="waves"></img>
                        </picture>
                    </div>
                </div>
            </section>
            </>
    );
}
export default SaiService;
                                