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
  CardFooter,
  CardHeader,
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
      <form action={onSubmit} className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">
              Enter password to view photos:
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-end gap-3">
            <SubmitButton
              className="max-w-[150px] w-full"
              text={"Login"}
              loadingMessage="Login..."
            />
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};
