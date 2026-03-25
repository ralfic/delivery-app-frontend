import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { Form, FormField, FormItem, FormMessage } from '~/components/ui/form';
import { Label } from '~/components/ui/label';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
import { loginFormSchema, type LoginData } from './auth-schemas';

export default function LoginForm() {
  const form = useForm<LoginData>({
    resolver: zodResolver(loginFormSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginData) => {
    console.log('Login credentials:', data);
  };

  return (
    <Form {...form}>
      <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
        {/* Email Input */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <Label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </Label>
              <Input
                type="email"
                placeholder="Enter your email"
                icon={<Mail size={20} />}
                {...field}
              />
              <FormMessage className="text-[#FF6347]" />
            </FormItem>
          )}
        />

        {/* Password Input */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <Label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </Label>
              <Input
                type="password"
                placeholder="••••••••"
                icon={<Lock size={20} />}
                {...field}
              />
              <FormMessage className="text-[#FF6347]" />
            </FormItem>
          )}
        />

        {/* Sign In Button */}
        <Button type="submit" variant="brand" size="massive" className="gap-2">
          <span>Sign In</span>
          <ArrowRight size={20} />
        </Button>
      </form>
    </Form>
  );
}
