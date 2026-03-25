import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormField, FormItem, FormMessage } from '~/components/ui/form';
import { Label } from '~/components/ui/label';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
import { MapPin, Phone, Save } from 'lucide-react';

export const deliveryDetailsSchema = z.object({
  address: z.string().min(10, { message: 'Address is too short' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
});

export type DeliveryDetailsData = z.infer<typeof deliveryDetailsSchema>;

export default function DeliveryDetailsForm() {
  const form = useForm<DeliveryDetailsData>({
    resolver: zodResolver(deliveryDetailsSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: DeliveryDetailsData) => {
    console.log('Saved Delivery Details:', data);
  };

  const textareaClasses =
    'w-full py-3.5 bg-gray-100 border-transparent rounded-xl focus:bg-white focus:border-[#FF6347] focus:ring-2 focus:ring-[#FF6347]/20 transition-all duration-300 outline-none resize-none';

  return (
    <Form {...form}>
      <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <Label className="block text-sm font-semibold text-gray-700 mb-2">
                Default Delivery Address
              </Label>
              <div className="relative">
                <MapPin
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />
                <textarea
                  placeholder="123 Main St, New York, NY 10001"
                  className={`${textareaClasses} pl-12 pr-4`}
                  rows={3}
                  {...field}
                />
              </div>
              <FormMessage className="text-[#FF6347]" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <Label className="block text-sm font-semibold text-gray-700 mb-2">
                Contact Phone Number
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

        <Button type="submit" variant="brand" size="massive">
          <Save size={20} />
          <span>Save Changes</span>
        </Button>
      </form>
    </Form>
  );
}
