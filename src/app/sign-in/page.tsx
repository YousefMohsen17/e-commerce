"use client";
import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { LoginSchema, LoginSchemaType } from "../../register/login.schama";
import { signIn } from "next-auth/react";
import { FaSpinner } from "react-icons/fa";

export default function Login() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
  });
  async function handleLogin(values: LoginSchemaType) {
    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
      callbackUrl: "/",
    });
    if (res?.ok === true) {
      toast.success("Account Logged In", {
        richColors: true,
        closeButton: true,
        duration: 3000,
      });
      window.location.href = "/";
    }
    if (res?.ok === false) {
      toast.error(res.error, {
        richColors: true,
        closeButton: true,
      });
    }
  }
  return (
    <Form {...form}>
      <form
        className="mt-20 flex flex-col gap-5 w-[80%] mx-auto"
        onSubmit={form.handleSubmit(handleLogin)}
      >
        <h1 className="text-2xl font-bold text-center">Log In</h1>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email:</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password:</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className="ms-auto bg-green-500 hover:bg-green-600 cursor-pointer"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            <>
              <FaSpinner className="animate-spin" /> Logging In ...
            </>
          ) : (
            "Login"
          )}
        </Button>
      </form>
    </Form>
  );
}
