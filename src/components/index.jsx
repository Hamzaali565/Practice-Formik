import { useFormik } from "formik";
import * as yup from "yup";
import './index.css'
let Check = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            gender: '',
            dob: '',

        },
        validationSchema:
            yup.object({
                //

                firstName: yup
                    .string("Enter your Gender")
                    .min(2, 'Too Short!')
                    .max(50, 'Too Long!')
                    .required('FirstName is Required'),
                // 
                lastName: yup
                    .string("Enter your Gender")
                    .min(2, 'Too Short!')
                    .max(50, 'Too Long!')
                    .required('LastName isRequired'),
                // 
                email: yup
                    .string('Enter your email')
                    .email('Enter a valid email')
                    .required('Email is required'),
                // 
                password: yup
                    .string('Enter your password')
                    .min(8, 'Password should be of minimum 8 characters length')
                    .required('Password is required'),
                dob: yup
                    .date()
                    .required("BirthDate is Required")
                //    


            }),

        onSubmit: (values) => {
            console.log("ok");
        },
    });



    return (
        <div className="">
            <h1 className="heading">React SignUp Form</h1>
            <div className="main-o-main">
                <div className="allInputs">
                    <div className="formContainer">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="firstName">
                                {/* firstName */}
                                <div className="label"><label htmlFor="">FirstName:</label></div>
                                <div className="input">
                                    <input
                                        id="firstName"
                                        label="Email"
                                        value={formik.values.firstName}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                            </div>
                            <div className="err">
                                {
                                    (formik.touched.firstName && Boolean(formik.errors.firstName)) ?
                                        <span>*{formik.errors.firstName}*</span>
                                        : null
                                }
                            </div>
                            <div className="firstName">
                                <div className="label"><label htmlFor="">LastName:</label></div>
                                <div className="input">
                                    <input
                                        id="lastName"
                                        label="Email"
                                        value={formik.values.lastName}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                            </div>
                            <div className="err">{
                                (formik.touched.lastName && Boolean(formik.errors.lastName)) ?
                                    <span>*{formik.errors.lastName}*</span>
                                    : null
                            }
                            </div>
                            <div className="firstName">
                                <div className="label"><label htmlFor="">Email:</label></div>
                                <div className="input">
                                    <input
                                        id="email"
                                        label="Email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                            </div>

                            <div className="err">
                                {
                                    (formik.touched.email && Boolean(formik.errors.email)) ?
                                        <span>*{formik.errors.email}*</span>
                                        : null
                                }
                            </div>

                            <div className="firstName">
                                <div className="label"><label htmlFor="">Password:</label></div>
                                <div className="input">
                                    <input
                                        // fullWidth
                                        id="password"
                                        label="Password"
                                        type="password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                            </div>
                            <div className="err">
                                {
                                    (formik.touched.password && Boolean(formik.errors.password)) ?
                                        <span>*{formik.errors.password}*</span>
                                        : null
                                }
                            </div>

                            <div className="firstName">
                                <div className="label"><label htmlFor="">Date of Birth:</label></div>
                                <div className="input">
                                    <input
                                        fullWidth
                                        id="dob"
                                        name="dob"
                                        label="DOB"
                                        type="date"
                                        value={formik.values.dob}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                            </div>
                            <div className="err">
                                {
                                    (formik.touched.dob && Boolean(formik.errors.dob)) ?
                                        <span>*{formik.errors.dob}*</span>
                                        : null
                                }
                            </div>
                            <div className="radio">
                                <div className="label"> <label htmlFor="">Gender</label> </div>
                                <div className="rad">
                                    <input type="radio" name="gender" required value="Male" id="" />{"Male"}
                                    <input type="radio" name="gender" required value="Female" id="" />{"Female"}
                                </div>
                            </div>
                            <div className="button">
                                <button color="primary" variant="contained" fullWidth type="submit">
                                    SignUp
                                </button>
                            </div>
                        </form>
                    </div >
                </div>
            </div >
        </div>


    )
}
{/* <br /> */ }
{/* Gender */ }
{/* 
                    <input
                        id="gender"
                        label="Gender"
                        value={formik.values.gender}
                        onChange={formik.handleChange}
                    />
                    {
                        (formik.touched.gender && Boolean(formik.errors.gender)) ?
                            <span>{formik.errors.gender}</span>
                            : null
                    } */}
export default Check;