import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../components/Common/Buttons";
import { Input } from "../components/Input";
import { useLoginHook } from "../hooks/auth";
import { routes } from "../routes/Routes";
import LayoutWrapper from "../components/Common/LayoutWrapper";
const { snackbar } = require("tailwind-toast");

const Register = () => {
  const navigate = useNavigate();
  const { setRegistrationData, isRegistered, loading, registrationData, handleSignUp } = useLoginHook();
  useEffect(() => {
    if (isRegistered) {
      snackbar()
      .success("", "User Registered Successfully")
      .with({
        color: "bg-green-600",
        positionX: "end",
        positionY: "bottom",
        fontColor: "blue",
      })
      .show()
      return navigate(routes.login)
    }
  }, [isRegistered]);

  const handleOnchange = (e, key, value) => {
    e.preventDefault()
    setRegistrationData({
        ...registrationData,
        [key]: value,
    });
  };

  return (
    <>
      <LayoutWrapper />
      <div>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 custom-height-auth">
          <div className="w-full max-w-md space-y-8">
            <div>
              <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
                Sign up to your account
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSignUp}>
              <div className="grid gap-3 rounded-md shadow-sm">
                <div>
                  <Input
                    label="Username"
                    type="text"
                    name="userName"
                    autoComplete="userName"
                    required={true}
                    placeholder="Username"
                    value={registrationData?.userName}
                    labelClass='sr-only'
                    onChange={(e) =>
                        handleOnchange(e, "userName", e.target.value)
                      }
                  />
                </div>
                <div >
                  <Input
                    label="Password"
                    type="password"
                    name="password"
                    autoComplete="password"
                    required={true}
                    placeholder="Password"
                    value={registrationData?.password}
                    labelClass='sr-only'
                    onChange={(e) =>
                        handleOnchange(e, "password", e.target.value)
                      }
                  />
                </div>
                <div>
                  <Input
                    label="Email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required={true}
                    placeholder="Email"
                    value={registrationData?.email}
                    labelClass='sr-only'
                    onChange={(e) =>
                        handleOnchange(e, "email", e.target.value)
                      }
                  />
                </div>
                <div>
                  <Input
                    label="Phone Number"
                    type="text"
                    name="phoneNumber"
                    autoComplete="phoneNumber"
                    required={true}
                    placeholder="Phone Number"
                    value={registrationData?.phoneNumber}
                    labelClass='sr-only'
                    onChange={(e) =>
                        handleOnchange(e, "phoneNumber", e.target.value.replace(/[^\d\/]|^[\/]*$/g, ""))
                      }
                  />
                </div>
              </div>
              <div>
                <PrimaryButton className='w-full group relative flex justify-center items-center gap-2' type="submit" title="Sign Up" disabled={loading} loading={loading} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
