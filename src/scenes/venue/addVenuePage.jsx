import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { Fragment } from "react";

const Form = () => {
     const isNonMobile = useMediaQuery("(min-width:600px)");

     const handleFormSubmit = (values) => {
          console.log(values);
     };

     return (
          <Box m="20px">
               <Header title="CREATE VENUE" subtitle="Create a New Venue" />

               <Formik
                    onSubmit={handleFormSubmit}
                    initialValues={initialValues}
                    validationSchema={checkoutSchema}
               >
                    {({
                         values,
                         errors,
                         touched,
                         handleBlur,
                         handleChange,
                         handleSubmit,
                    }) => (
                         <form onSubmit={handleSubmit}>
                              <Box
                                   display="grid"
                                   gap="30px"
                                   gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                                   sx={{
                                        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                                   }}
                              >
                                   <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Venue Name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.firstName}
                                        name="firstName"
                                        error={!!touched.firstName && !!errors.firstName}
                                        helperText={touched.firstName && errors.firstName}
                                        sx={{ gridColumn: "span 3" }}
                                   />
                                   <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Description"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.lastName}
                                        name="lastName"
                                        error={!!touched.lastName && !!errors.lastName}
                                        helperText={touched.lastName && errors.lastName}
                                        sx={{ gridColumn: "span 3" }}
                                   />
                                   <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Contact Number"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.contact}
                                        name="contact"
                                        error={!!touched.contact && !!errors.contact}
                                        helperText={touched.contact && errors.contact}
                                        sx={{ gridColumn: "span 3" }}
                                   />

                                   <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Booking Amount"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.amount}
                                        name="amount"
                                        sx={{ gridColumn: "span 3" }}
                                   />
                                   <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Address"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.address}
                                        name="address"
                                        error={!!touched.address && !!errors.address}
                                        helperText={touched.address && errors.address}
                                        sx={{ gridColumn: "span 3" }}
                                   />

                                  {/* <div sx={{gridColumn:"span 3"}}>
                                   <label>Add Image</label>
                                   <input type="file" />
                                   
                                  </div> */}
                              
                                  
                              </Box>
                              <Box display="flex" justifyContent="end" mt="20px">
                                   <Button type="submit" color="secondary" variant="contained">
                                        Create New Venue
                                   </Button>
                              </Box>
                         </form>
                    )}
               </Formik>
          </Box>
     );
};

const phoneRegExp =
     /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
     firstName: yup.string().required("required"),
     lastName: yup.string().required("required"),
     email: yup.string().email("invalid email").required("required"),
     contact: yup
          .string()
          .matches(phoneRegExp, "Phone number is not valid")
          .required("required"),
     address1: yup.string().required("required"),
     address2: yup.string().required("required"),
});
const initialValues = {
     firstName: "",
     lastName: "",
     email: "",
     contact: "",
     address1: "",
     address2: "",
};

export default Form;