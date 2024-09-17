import useAuth from '../../components/Hooks/UseAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Button, Form, Input } from 'antd';
import { FcGoogle } from 'react-icons/fc';
import img1 from "../../assets/Logo.png";
import { useState } from 'react';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { signIn, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState(""); // Error state
  const from = location?.state?.from?.pathname || "/";

  const onFinish = async (values) => {
    setIsLoading(true);
    setError("");

    try {
      // User login
      const result = await signIn(values.email, values.password);
      console.log("login with credential", result);

      // Navigate user to the intended route
      navigate(from, { replace: true });
      toast.success("Login Successfully");
    } catch (err) {
      setError(err?.message || "An error occurred");
      toast.error(err?.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  // Google sign-in handler
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();

      // Navigate user to the intended route
      navigate(from, { replace: true });
      toast.success("Login Successfully");
    } catch (err) {
      toast.error(err?.message || "Google Sign-in failed");
    }
  };

  return (
    <div className="mx-4 md:mx-8 lg:mx-auto lg:max-w-4xl">
      {/* Image for larger screens */}
      <img src={img1} alt="Logo" className="hidden md:block mx-auto mb-4" />

      <h2 className="text-lg md:text-xl font-semibold text-center text-secondary mt-4">
        Great To Have You Back!
      </h2>

      <section className="mt-7">
        <Form
          name="login"
          requiredMark={false}
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          {/* Username Field */}
          <Form.Item
            name="email"
            label={<label className="text-lg font-semibold text-secondary">Email</label>}
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input className="border-secondary w-full md:w-96 py-2" placeholder="Email" />
          </Form.Item>

          {/* Password Field */}
          <Form.Item
            label={
              <label className="text-lg font-semibold text-secondary">
                <div className="flex items-center justify-between">
                  <span>Password</span>
                  <Link to="/forgot-password" className="underline text-blue-500">Forgot</Link>
                </div>
              </label>
            }
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              className="border-secondary w-full md:w-96 py-2"
              placeholder="Password"
            />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item className="text-xl w-full md:w-96">
            <Button
              style={{ background: "#334a55", color: "white" }}
              disabled={isLoading}
              htmlType="submit"
              className="login-form-button p-5 w-full"
            >
              {isLoading ? "Logging in..." : "SIGN IN"}
            </Button>
          </Form.Item>
        </Form>

        <div className="flex flex-col items-center justify-center mt-6">
          <h3 className="text-sm text-gray-500 mb-2">Or Log in with</h3>
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center px-6 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 focus:outline-none transition duration-200"
          >
            <FcGoogle className="text-2xl mr-3" />
            <span className="text-base font-medium text-gray-500">Log in with Google</span>
          </button>
        </div>

        {/* Don't have an account */}
        <p className="text-center text-gray-700 mt-6">
          Don&apos;t have an account?{" "}
          <Link to='/auth/reg' className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </section>
    </div>
  );
};

export default Login;
