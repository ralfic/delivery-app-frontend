import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router';
import { User, Mail, Phone, Lock, ArrowRight, Check } from 'lucide-react';
import { Form, FormField, FormItem, FormMessage } from '~/components/ui/form';
import { Label } from '~/components/ui/label';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
import { signUpFormSchema, type SignUpData } from './auth-schemas';
import { Checkbox } from '../ui/checkbox';

export default function SignupForm() {
  const form = useForm<SignUpData>({
    resolver: zodResolver(signUpFormSchema),
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
  });

  const onSubmit = async (data: SignUpData) => {
    console.log('Registration details:', data);
  };

  return (
    <Form {...form}>
      <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
        {/* Full Name Input */}
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <Label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </Label>
              <Input
                placeholder="Enter your full name"
                icon={<User size={20} />}
                {...field}
              />
              <FormMessage className="text-[#FF6347]" />
            </FormItem>
          )}
        />

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

        {/* Phone Number Input */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <Label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </Label>
              <Input
                type="tel"
                placeholder="+1 (555) 000-0000"
                icon={<Phone size={20} />}
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

        {/* Confirm Password Input */}
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <Label className="block text-sm font-semibold text-gray-700 mb-2">
                Confirm Password
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

        {/* Terms Agreement */}
        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="flex flex-col space-y-1">
              <div className="flex items-center space-x-3">
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
                <Label
                  htmlFor="terms"
                  className="text-sm text-gray-600 leading-tight font-normal "
                >
                  I agree to the{' '}
                  <span className="text-[#FF6347] hover:text-[#FF4500] font-semibold transition-colors">
                    Terms of Service
                  </span>{' '}
                  and{' '}
                  <span className="text-[#FF6347] hover:text-[#FF4500] font-semibold transition-colors">
                    Privacy Policy
                  </span>
                </Label>
              </div>
              <FormMessage className="text-[#FF6347]" />
            </FormItem>
          )}
        />

        {/* Sign Up Button */}
        <Button
          type="submit"
          variant="brand"
          size="massive"
          className="gap-2 mt-2"
        >
          <span>Create Account</span>
          <ArrowRight size={20} />
        </Button>
      </form>
    </Form>
  );
}
