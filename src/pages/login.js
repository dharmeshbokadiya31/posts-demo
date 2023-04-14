import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../components/Common/Buttons";
import { Input } from "../components/Input";
import { useLoginHook } from "../hooks/auth";
import { routes } from "../routes/Routes";
import LayoutWrapper from "../components/Common/LayoutWrapper";

const Login = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const { setUser, isLogin, loading } = useLoginHook();
  useEffect(() => {
    if (isLogin) {
      return navigate(routes.home);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin]);

  const handleSignIn = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };

  return (
    <>
      <LayoutWrapper />
      <div>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 custom-height-auth">
          <div className="w-full max-w-md space-y-8">
            <div>
              <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSignIn}>
              <div className="-space-y-px rounded-md shadow-sm">
                <div className="mb-3">
                  <Input
                    label="Username"
                    type="text"
                    name="userName"
                    autoComplete="userName"
                    required={true}
                    placeholder="Username"
                    value={userName}
                    labelClass='sr-only'
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div>
                  <Input
                    label="Password"
                    type="password"
                    name="password"
                    autoComplete="password"
                    required={true}
                    placeholder="Password"
                    value={password}
                    labelClass='sr-only'
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <PrimaryButton className='w-full group relative flex justify-center items-center gap-2' type="submit" title="Sign In" disabled={loading} loading={loading} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
