import Login from "@/components/auth/Login";
import LoginForm from "@/components/auth/login-form";
import Image from "next/image";


const LoginPage = async ({
  searchParams,
}: {
  searchParams?: Promise<{ redirect?: string }>;
}) => {
  const params = (await searchParams) || {};
  // console.log(params.redirect)
  return (
    <>
      <Login redirect={params.redirect} />
    </>
  );
};

export default LoginPage;
