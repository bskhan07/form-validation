import * as Yup from 'yup'

const phoneRegExp = /^[0-9]{10}$/

export const formSchema = Yup.object({
    name: Yup.string().max(25).required("Please Enter Your Name"),
    email: Yup.string().email().required("Please Enter Your Email"),
    password: Yup.string().min(6).required("Please Enter Your Password"),
    phonenumber: Yup.string().max(10, "Mobile Number must be 10 digits").required("Please Enter Mobile Number"),
    date: Yup.string().required("Please Enter Date"),
    skill: Yup.array().min(1, "plese choose at least one skill").required(),
    status: Yup.string().required("Choose Maritail Status"),
    file: Yup.string().required("Please choose File to Upload"),
})