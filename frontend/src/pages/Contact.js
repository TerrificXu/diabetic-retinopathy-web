import React, { useEffect } from "react";
import "./Contact.css";

const Contact = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get("name");
        const email = formData.get("email");
        const subject = formData.get("subject");
        const message = formData.get("message");

        const emailBody = `Hi Dr. Liu,\n\n${message}\n\nBest,\n${name}`;

        const payload = {
            name,
            email,
            subject,
            message,
            body: emailBody,
        };

        try {
            const response = await fetch("http://127.0.0.1:5000/send_email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });
            const data = await response.json();
            if (response.ok) {
                alert("Email sent successfully!");
            } else {
                alert("Failed to send email: " + data.error);
            }
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Error sending email");
        }
    };

    useEffect(() => {
        // 如果 URL 中有 hash，滚动到对应的元素
        if (window.location.hash) {
            const id = window.location.hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, []);

    return (
        <div className="contact-container">
            {/* 第一部分：Contact Information */}
            <section className="contact-section">
                <h2>Contact Information</h2>
                <p>
                    For more information, please feel free to reach out to us at:
                </p>
                <p>
                    <strong>Dr. Tieming Liu</strong>
                    <br />
                    Professor &amp; Graduate Program Director
                    <br />
                    School of Industrial Engineering &amp; Management
                    <br />
                    Oklahoma State University
                    <br />
                    341 Engineering North
                    <br />
                    Stillwater, OK 74078
                    <br />
                    Phone: (405) 744-6055
                    <br />
                    Email: <a href="mailto:tieming.liu@okstate.edu">tieming.liu@okstate.edu</a>
                </p>
            </section>

            <hr className="contact-divider" />

            {/* 第二部分：Lab Location */}
            <section className="contact-section">
                <h2>Office Location</h2>
                <p>
                    Our Office is located at Oklahoma State University Industrial Engineering &amp; Management.
                    Please visit us at 341 Engineering N, Stillwater, OK 74078.
                </p>
                <div className="map-container">
                    <iframe
                        title="Lab Location Map"
                        src="https://maps.google.com/maps?q=Oklahoma%20State%20University%20Industrial%20Engineering%20and%20Management&output=embed"
                        width="100%"
                        height="475"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </section>

            <hr className="contact-divider" />

            {/* 第三部分：Questions and Inquiries，添加 id="questions" */}
            <section id="questions" className="contact-section">
                <h2>Contact Us</h2>
                <p>
                    If you have any questions or inquiries, please fill out the form below and we will get back to you as soon as possible.
                </p>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="contact-name">Name:</label>
                        <input type="text" id="contact-name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact-email">Email:</label>
                        <input type="email" id="contact-email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact-subject">Subject:</label>
                        <input type="text" id="contact-subject" name="subject" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact-message">Message:</label>
                        <textarea id="contact-message" name="message" rows="4" required></textarea>
                    </div>
                    <button type="submit" className="contact-submit">Submit</button>
                </form>
            </section>
        </div>
    );
};

export default Contact;
