import axiosClient from './axiosClient'

const ContactAPI = {

    send_mail: (data) => {
        const url = `/api/contact/send_email`
        return axiosClient.post(url, data)
    },

}

export default ContactAPI