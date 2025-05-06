"use client";
import { z } from "zod";
import React from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { login } from "@/actions/auth.action";
import { PasswordSchema } from "./login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import SubmitButton from "@/components/ui/submit-button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

export const LoginForm = () => {
  const form = useForm<z.infer<typeof PasswordSchema>>({
    resolver: zodResolver(PasswordSchema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit: () => void = form.handleSubmit(
    async ({ password }: z.infer<typeof PasswordSchema>) => {
      const response = await login(password);
      if (response?.error) toast.error(response.error);
    }
  );

  return (
    <Form {...form}>
      <form action={onSubmit} className="w-full flex justify-center">
        <Card className="w-full max-w-[500px] mb-10">
          <CardHeader>
            <CardTitle className="text-2xl text-left font-semibold">
              Enter gallery password
            </CardTitle>
            <CardDescription className="text-left">
              Enter your group&apos;s gallery password to view photos
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-5">
            <div className="flex flex-col sm:flex-row gap-4 w-full items-start sm:items-end">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-full sm:flex-1">
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password"
                        className="w-full"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <SubmitButton
                className="w-full sm:w-auto sm:min-w-[120px]"
                text="Submit"
                loadingMessage="Loading..."
              />
            </div>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
};
