import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContactAPI from '../API/ContactAPI';


Contact.propTypes = {};

function Contact(props) {
    // Khai báo state để lưu trữ dữ liệu từ form
    const [formData, setFormData] = useState({
        customerName: '',
        customerEmail: '',
        contactSubject: '',
        contactMessage: '',
    });

    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Hàm xử lý khi form được submit
    const handleSubmit = async (e) => {
        e.preventDefault(); // Ngăn hành vi mặc định của form

        // Kiểm tra các trường bắt buộc (Name và Email)
        if (!formData.customerName || !formData.customerEmail) {
            setError('Please fill in all required fields.');
            return;
        }

        try {
            // Gọi API với fetch hoặc axios
            const response = await ContactAPI.send_mail(formData)
            console.log('response send email', response);

            if (response.status = 200) {
                setSuccessMessage('Your message has been sent successfully!');
                setFormData({
                    customerName: '',
                    customerEmail: '',
                    contactSubject: '',
                    contactMessage: '',
                });
            } else {
                throw new Error('Failed to submit form');
            }
        } catch (error) {
            setError('There was a problem submitting the form');
        }
    };

    // Hàm xử lý khi người dùng thay đổi input
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div>
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li className="active">Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="contact-main-page mt-60 mb-40 mb-md-40 mb-sm-40 mb-xs-40">
                <div className="container mb-60">
                    <iframe src="https://maps.google.com/maps?width=600&height=500&hl=en&q=8 cù chính lan, thanh xuân hà nội&t=&z=13&ie=UTF8&iwloc=B&output=embed" width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy"></iframe>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 offset-lg-1 col-md-12 order-1 order-lg-2">
                            <div className="contact-page-side-content">
                                <h3 className="contact-page-title">Contact Us</h3>
                                <p className="contact-page-message mb-25">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem sapiente ab cum accusantium, incidunt nihil fugit similique? Reiciendis ex dignissimos libero iusto quos, consequuntur nobis tenetur a minima! Voluptatum, ab?
                                </p>
                                <div className="single-contact-block">
                                    <h4><i className="fa fa-fax"></i> Address</h4>
                                    <p>Số 8 Cù Chính Lan, Khương Thượng, Thanh Xuân, Hà Nội, Việt Nam</p>
                                </div>
                                <div className="single-contact-block">
                                    <h4><i className="fa fa-phone"></i> Phone</h4>
                                    <p>Mobile: 0393949169</p>
                                    <p>Hotline: 1900100 Biết</p>
                                </div>
                                <div className="single-contact-block last-child">
                                    <h4><i className="fa fa-envelope-o"></i> Email</h4>
                                    <p>huy1992nd@gmail.com</p>
                                    <p>hahadaubo@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 order-2 order-lg-1">
                            <div className="contact-form-content pt-sm-55 pt-xs-55">
                                <h3 className="contact-page-title">Tell Us Your Message</h3>
                                <div className="contact-form">
                                    {error && <p style={{ color: 'red' }}>{error}</p>}
                                    {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                                    <form id="contact-form" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label>Your Name <span className="required">*</span></label>
                                            <input
                                                type="text"
                                                name="customerName"
                                                id="customername"
                                                value={formData.customerName}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Your Email <span className="required">*</span></label>
                                            <input
                                                type="email"
                                                name="customerEmail"
                                                id="customerEmail"
                                                value={formData.customerEmail}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Subject</label>
                                            <input
                                                type="text"
                                                name="contactSubject"
                                                id="contactSubject"
                                                value={formData.contactSubject}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="form-group mb-30">
                                            <label>Your Message</label>
                                            <textarea
                                                name="contactMessage"
                                                id="contactMessage"
                                                value={formData.contactMessage}
                                                onChange={handleInputChange}
                                            ></textarea>
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" value="Send" className="li-btn-3" name="submit" />
                                        </div>
                                    </form>
                                </div>
                                <p className="form-messege"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
