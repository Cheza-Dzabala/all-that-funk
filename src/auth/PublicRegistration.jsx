import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth, useFirestore } from "reactfire";
import "firebase/auth";
import "firebase/firestore";
import swal from "sweetalert";
import { FIRESTORE_COLLECTIONS } from "../config";
const PublicRegistration = () => {
  const [accepted, setAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const auth = useAuth();
  const userDetialsCollection = useFirestore().collection(
    FIRESTORE_COLLECTIONS.usersCollection
  );

  const {
    handleSubmit,
    register,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (!accepted) {
      swal(
        "Terms & Conditions",
        "Please accept our terms & conditions",
        "error"
      );
    } else if (data.password !== data.confirmPassword) {
      swal("Password Problem", "Your Passwords do not match", "error");
    } else {
      setIsLoading(!isLoading);
      auth
        .createUserWithEmailAndPassword(data.email, data.password)
        .then(({ user }) => {
          userDetialsCollection
            .doc(user.uid)
            .set({
              firstName: data.firstName,
              lastName: data.lastName,
              performerName: data.performerName,
              email: data.email,
              verified: false,
              superAdmin: false,
              isActivated: true,
            })
            .then((res) => {
              setIsLoading(!isLoading);
              swal(
                "Success",
                "Your account has been created, you will be notified once activated (Usually within 48 hours).",
                "success"
              );
            });
        })
        .catch((err) => {
          setIsLoading(!isLoading);
          console.log({ err });
          swal("Prooblem Registering Your Account", err.message, "error");
        });
    }
  };

  const onAccept = () => {
    setAccepted(!accepted);
  };

  return (
    <div className="split-screen">
      <div className="half-screen">
        <div className="auth-card">
          <p className="card-leading-text">Register</p>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              {...register("firstName", { required: true })}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              {...register("lastName", { required: true })}
            />
            <input
              type="text"
              name="performerName"
              placeholder="Performer Name"
              {...register("performerName", { required: true })}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="Email Address"
              {...register("email", { required: true })}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              {...register("confirmPassword", { required: true })}
            />
            <div className="checkbox">
              <input
                type="checkbox"
                name="terms-and-conditions"
                aria-label="Agree to terms and conditions"
                onClick={() => onAccept()}
              />
              <label
                className="text-black text-sm"
                htmlFor="terms-and-conditions"
              >
                I agree to all the{" "}
                <span className="text-gradient-start">
                  terms and condtions.
                </span>
              </label>
            </div>
            <button className="button" type="submit" disabled={isLoading}>
              Register
            </button>
          </form>
        </div>
      </div>
      <div className="half-screen">
        <p className="auth-screen-leading-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          possimus veritatis quidem officiis nulla ea ullam repudiandae, nihil
          adipisci dicta enim exercitationem, harum vel numquam vero magni!
          Quidem dolorum nam ipsa, repellat voluptate nesciunt error in, esse
          consequuntur pariatur dolor?
        </p>
      </div>
    </div>
  );
};

export default PublicRegistration;
