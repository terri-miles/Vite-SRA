import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Forms = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    zipcode: Yup.string()
      .matches(/^\d{5}$/, "Zipcode must be exactly 5 digits")
      .required("Zipcode is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    problemDescription: Yup.string().required("Please describe your problem"),
  });

  // Initial form values
  const initialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    zipcode: "",
    email: "",
    problemDescription: "",
  };

  // Form submission handler
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await fetch(actionUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSubmitting(false);
    }
  };
  
  return (
    <div className="bg-[#212c43] w-full sm:px-[24px] sm:py-[24px] md:px-[32px] md:py-[32px] flex flex-col">
      <h1 className="sm:text-[32px] md:text-[48px] font-light leading-tight mb-8">
        Get Help <span className="text-red-400 ">Now!</span> <br /> Report
        Incident
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <div className="flex w-full gap-10">
                <Field
                  name="firstName"
                  type="text"
                  placeholder="First Name*"
                  className="w-1/2 sm:px-[10px] sm:py-[16px] md:px-[10px] md:py-[18px] rounded-md border-none outline-none text-[18px] text-[#494949]"
                ></Field>
                <Field
                  name="lastName"
                  type="text"
                  placeholder="Last Name*"
                  className="w-1/2 px-[10px] py-[18px] rounded-md border-none outline-none text-[18px] text-[#494949]"
                ></Field>
              </div>
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500 text-sm"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="mb-4">
              <div className="flex w-full gap-10">
                <Field
                  name="phone"
                  type="number"
                  placeholder="Phone Number*"
                  className="w-1/2 px-[10px] py-[18px] rounded-md border-none outline-none text-[18px] text-[#494949]"
                ></Field>
                <Field
                  name="zipcode"
                  type="text"
                  placeholder="Zip Code*"
                  className="w-1/2 px-[10px] py-[18px] rounded-md border-none outline-none text-[18px] text-[#494949]"
                ></Field>
              </div>
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 text-sm"
              />
              <ErrorMessage
                name="zipcode"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="mb-4">
              <Field
                name="email"
                type="email"
                className="w-full px-[10px] py-[18px] rounded-md border-none outline-none text-[18px] text-[#494949]"
                placeholder="Email*"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="mb-6">
              <Field
                name="problemDescription"
                as="textarea"
                rows="2"
                placeholder="Tell us about your problem"
                className="w-full px-[10px] py-[18px] rounded-md border-none outline-none text-[18px] text-[#494949]"
              />
              <ErrorMessage
                name="problemDescription"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-[10px] py-[18px] bg-red-500 text-white font-semibold rounded hover:bg-red-600"
                disabled={isSubmitting}
              >
                Request Help
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Forms;
