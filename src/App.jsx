import React from 'react'
import { useFormik } from 'formik'
import { formSchema } from './Validaton'
const App = () => {

    const initialValue = {
        name: "",
        password: "",
        date: "",
        status: "",
        skill: [],
        email: "",
        phonenumber: "",
        range: "50",
        file: ""
    }
    const { handleBlur, handleSubmit, values, handleChange, errors, touched } = useFormik({
        initialValues: initialValue,
        validationSchema: formSchema,
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            resetForm(initialValue)
        }
    })

    const numCheck = (e) => {
        const numericValue = e.target.value.replace(/\D/g, '');
        handleChange({
            target: { name: 'phonenumber', value: numericValue },
          });
    }
    return (
        <form onSubmit={handleSubmit}  >
            <div className="formContainer" style={{
                padding: "100px",
                display: "flex",
                gap: "30px",
                justifyContent: "center"
            }} >
                <div className="firstCol" style={{
                    width: "30%",
                }} >
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input onChange={handleChange} onBlur={handleBlur} value={values.name} type="text" className="form-control  mb-3" name='name' id="exampleInputEmail1" aria-describedby="emailHelp" />
                    {errors.name && touched.name ? <p className="text-danger ">{errors.name}</p> : null}
                    <label htmlFor="exampleInputEmail2" className="form-label">Password</label>
                    <input value={values.password} type="password" name='password' onChange={handleChange} onBlur={handleBlur} className="form-control  mb-3" id="exampleInputEmail2" aria-describedby="emailHelp" />
                    {errors.password && touched.password ? <p className="text-danger ">{errors.password}</p> : null}
                    <label htmlFor="exampleInputEmail3" className="form-label">Date</label>
                    <input value={values.date} name='date' type="date" onChange={handleChange} onBlur={handleBlur} className="form-control  mb-3" id="exampleInputEmail3" aria-describedby="emailHelp" />
                    {errors.date && touched.date ? <p className="text-danger ">{errors.date}</p> : null}
                    <div className='mb-3' >
                        <div style={{ border: "1px solid lightgrey", padding: "0.375rem 0.75rem", borderRadius: "0.375rem" }} >
                            <p style={{ marginBottom: "5px" }}>Marital status</p>
                            <div className="form-check">
                                <input value="single" onChange={handleChange} onBlur={handleBlur} className="form-check-input" type="radio" name="status" id="flexRadioDefault1" />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Single
                                </label>
                            </div>
                            <div className="form-check">
                                <input value="Married" onChange={handleChange} onBlur={handleBlur} className="form-check-input" type="radio" name="status" id="flexRadioDefault2" />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Married
                                </label>
                            </div>
                            {errors.status && touched.status ? <p className="text-danger ">{errors.status}</p> : null}
                        </div>
                    </div>
                    <div>
                        <p style={{ marginBottom: "5px" }}>Skills</p>
                        <div style={{ border: "1px solid lightgrey", padding: "0.375rem 0.75rem", borderRadius: "0.375rem" }}>
                            <div className="form-check">
                                <input onChange={handleChange} onBlur={handleBlur} name='skill' className="form-check-input" type="checkbox" value="python" id="python" />
                                <label className="form-check-label" htmlFor="python">
                                    Python
                                </label>
                            </div>
                            <div className="form-check">
                                <input name='skill' onBlur={handleBlur} onChange={handleChange} className="form-check-input" type="checkbox" value="java" id="java" />
                                <label className="form-check-label" htmlFor="java">
                                    Java
                                </label>
                            </div>
                            <div className="form-check">
                                <input onChange={handleChange} onBlur={handleBlur} name='skill' className="form-check-input" type="checkbox" value="c++" id="c++" />
                                <label className="form-check-label" htmlFor="c++">
                                    C++
                                </label>
                            </div>
                            {errors.skill && touched.skill ? <p className="text-danger ">{errors.skill}</p> : null}
                        </div>
                    </div>
                </div>
                <div className="secondCol" style={{
                    width: "30%",
                }}  >
                    <label htmlFor="email" className="form-label  ">Email</label>
                    <input type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} className="form-control mb-3" name='email' id="email" aria-describedby="emailHelp" />
                    {errors.email && touched.email ? <p className="text-danger ">{errors.email}</p> : null}
                    <label htmlFor="number" className="form-label ">PhoneNumber</label>
                    <input type="text" value={values.phonenumber} pattern="[0-9]*"
                        onChange={numCheck}
                        onBlur={handleBlur} className="form-control mb-3 " name='phonenumber' id="number" aria-describedby="emailHelp" />
                    {errors.phonenumber && touched.phonenumber ? <p className="text-danger ">{errors.phonenumber}</p> : null}
                    <label htmlFor="file" className="form-label ">file</label>
                    <input type="file" name='file' onChange={handleChange} onBlur={handleBlur} className="form-control mb-3 " id="file" aria-describedby="emailHelp" />
                    {errors.file && touched.file ? <p className="text-danger ">{errors.file}</p> : null}
                    <label htmlFor="range" className="form-label">Rate YourSelf As Programmer</label>
                    <input value={values.range} type="range" onChange={handleChange} onBlur={handleBlur} style={{ padding: "12px" }} name='range' className="form-control  mb-3" id="range" aria-describedby="emailHelp" />
                    {errors.range && touched.range ? <p className="text-danger ">{errors.range}</p> : null}
                    <p style={{ fontSize: "18px", }} >{values.range}</p>
                    <button style={{ marginTop: "50px" }} type="submit" onClick={handleSubmit} className="btn btn-primary">submit</button>
                </div>
            </div>
        </form>
    )
}

export default App