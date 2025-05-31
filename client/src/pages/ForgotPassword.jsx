import { useForm } from "react-hook-form";
import { useForgotPasswordMutation } from "../redux/slices/api/authApiSlice"; // You'll create this
import { toast } from "sonner";
import { Button, Textbox } from "../components";

const ForgotPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

  const onSubmit = async (data) => {
    try {
      await forgotPassword(data).unwrap();
      toast.success("Password reset link sent to your email.");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='form-container max-w-md mx-auto mt-20 p-6 bg-white dark:bg-slate-900 shadow-lg rounded-xl flex flex-col gap-6'
    >
      <h2 className='text-2xl font-bold text-center text-blue-600'>
        Forgot Password
      </h2>
      <Textbox
        placeholder='you@example.com'
        type='email'
        name='email'
        label='Email Address'
        className='w-full'
        register={register("email", {
          required: "Email Address is required!",
        })}
        error={errors.email ? errors.email.message : ""}
      />
      <Button
        type='submit'
        label={isLoading ? "Sending..." : "Send Reset Link"}
        className='bg-blue-700 text-white rounded-full'
      />
    </form>
  );
};

export default ForgotPassword;
