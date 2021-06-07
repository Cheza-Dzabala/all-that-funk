import React, { useState } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const PublicLogin = () => {
  const [accepted, setAccepted] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (!accepted) {
      swal(
        "Terms & Conditions",
        "Please accept our terms & conditions",
        "error"
      );
    } else {
      console.log(data);
    }
  };
  const onAccept = () => {
    setAccepted(!accepted);
  };

  return (
    <div className="split-screen">
      <div className="half-screen">
        <div className="auth-card">
          <p className="card-leading-text">LOGIN</p>
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
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
            <button className="button" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="half-screen">
        <p className="auth-screen-leading-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          aliquid quibusdam dolores molestias ducimus, debitis autem temporibus
          exercitationem nisi a iusto, vitae officia voluptatum assumenda
          dolorem, quam consequuntur ut fugit cum labore quidem inventore?
          Dignissimos esse architecto perspiciatis fugit nisi?
        </p>
      </div>
    </div>
  );
};

export default PublicLogin;
