import React, { useState } from 'react';
import img1 from "../../assets/Logo.png";
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Form from 'antd/es/form/Form';
import { Button, Input } from 'antd';
import toast from 'react-hot-toast';
import useAuth from '../../components/Hooks/UseAuth';

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const from = location?.state?.from?.pathname || "/";
  const { createUser, signInWithGoogle, updateUserProfile } = useAuth();

  const onFinish = async (values) => {
    event.preventDefault();
    try {
      if (values.newPassword !== values.confirmPassword) {
        toast.error("New password and confirm password do not match");
        return;
      }
      setIsLoading(true);
      const result = await createUser(values.email, values.newPassword);
      console.log("sign up", result);
      await updateUserProfile(
        values.firstName,
        values.profileImage,
        values.address,
        values.contact
      );
      setIsLoading(false);
      navigate("/");
      toast.success("Sign Up Successfully");
    } catch (err) {
      toast.error(err?.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      console.log("Login with Google", result);
      navigate(from, { replace: true });
      toast.success("Login Successfully");
    } catch (err) {
      toast.error(err?.message || "Google Sign-in failed");
    }
  };

  return (
    <div className="mx-4 md:mx-8 lg:mx-auto lg:max-w-3xl">
      {/* Image for larger screens */}
      <img src={img1} alt="Logo" className="hidden md:block mx-auto mb-4" />

      <h2 className="text-lg md:text-xl font-semibold text-center text-secondary mt-4">
        Great To Have You Back!
      </h2>

      <section className="mt-7">
        <Form
          name="signup"
          requiredMark={false}
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          className="w-full md:w-96 mx-auto"
        >
          {/* First Name */}
          <Form.Item
            name="firstName"
            label={<label className="text-lg font-semibold text-secondary">First Name</label>}
            rules={[
              { required: true, message: "Please enter your first name!" },
              { min: 3, message: "Name should be at least 3 characters long!" },
            ]}
          >
            <Input className="border-secondary w-full py-2" placeholder="First Name" />
          </Form.Item>

          {/* Last Name */}
          <Form.Item
            name="lastName"
            label={<label className="text-lg font-semibold text-secondary">Last Name</label>}
            rules={[{ min: 3, message: "Name should be at least 3 characters long!" }]}
          >
            <Input className="border-secondary w-full py-2" placeholder="Last Name" />
          </Form.Item>

          {/* Contact Number */}
          <Form.Item
            name="contact"
            label={<label className="text-lg font-semibold text-secondary">Contact Number</label>}
          >
            <Input className="border-secondary w-full py-2" placeholder="017********" />
          </Form.Item>

          {/* Email */}
          <Form.Item
            name="email"
            label={<label className="text-lg font-semibold text-secondary">Email</label>}
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email address" },
            ]}
          >
            <Input className="border-secondary w-full py-2" placeholder="@gmail.com" />
          </Form.Item>

          {/* New Password Field */}
          <Form.Item
            label={<label className="text-lg font-semibold text-secondary">New Password</label>}
            name="newPassword"
            rules={[
              { required: true, message: "Please input your new password!" },
              { min: 8, message: "Password must be at least 8 characters long" },
            ]}
          >
            <Input.Password className="border-secondary w-full py-2" placeholder="*******" />
          </Form.Item>

          {/* Confirm Password Field */}
          <Form.Item
            label={<label className="text-lg font-semibold text-secondary">Confirm Password</label>}
            name="confirmPassword"
            rules={[
              { required: true, message: "Please confirm your password!" },
              { min: 8, message: "Password must be at least 8 characters long" },
            ]}
          >
            <Input.Password className="border-secondary w-full py-2" placeholder="*******" />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item className="text-xl w-full">
            <Button
              style={{ background: "#334a55", color: "white" }}
              disabled={isLoading}
              htmlType="submit"
              className="p-5 w-full"
            >
              {isLoading ? "Signing up..." : "Sign Up"}
            </Button>
          </Form.Item>
        </Form>

        <div className="flex flex-col items-center justify-center mt-6">
          <h3 className="text-sm text-gray-500 mb-2">Or sign up with</h3>
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center px-6 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 focus:outline-none transition duration-200"
          >
            <FcGoogle className="text-2xl mr-3" />
            <span className="text-base font-medium text-gray-500">Sign up with Google</span>
          </button>
        </div>

        {/* Already have an account */}
        <p className="text-center text-gray-700 mt-6">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-blue-500 hover:underline">
            Log In
          </Link>
        </p>
      </section>
    </div>
  );
};

export default Register;
