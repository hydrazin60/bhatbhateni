import CommonForm from "@/components/Common/Form";
import { RegisterFormControls } from "@/Config";
import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = React.useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center ">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create new account
        </h1>
        <p className="mt-2">Already have an account ?</p>
        <Link
          className="font-medium  ml-2 text-primary hover:underline text-blue-500"
          to="/auth/login"
        >
          Login
        </Link>
      </div>
      <CommonForm
        formControls={RegisterFormControls}
        buttonText={"Register"}
        formdata={formData}
        setFormData={setFormData}
      />
    </div>
  );
}
