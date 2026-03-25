import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormField, FormItem, FormMessage } from '~/components/ui/form';
import { Label } from '~/components/ui/label';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
import { orderFormSchema, type OrderData } from './order-form-schemas';

export default function OrderForm() {
  const form = useForm<OrderData>({
    resolver: zodResolver(orderFormSchema),
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      promoCode: '',
    },
  });

  const onSubmit = async (data: OrderData) => {
    console.log('Order Details:', data);
  };

  const customInputClasses =
    'w-full px-4 py-3.5 bg-gray-100 border-transparent rounded-xl focus:bg-white focus:border-[#FF6347] focus:ring-2 focus:ring-[#FF6347]/20 transition-all duration-300 outline-none';

  return (
    <div className="lg:col-span-2">
      <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Delivery Information
        </h2>

        <Form {...form}>
          <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
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
                    className={customInputClasses}
                    {...field}
                  />
                  <FormMessage className="text-[#FF6347]" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <Label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </Label>
                  <Input
                    placeholder="Enter your email"
                    type="email"
                    className={customInputClasses}
                    {...field}
                  />
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
                    Phone
                  </Label>
                  <Input
                    placeholder="+1 (555) 000-0000"
                    type="tel"
                    className={customInputClasses}
                    {...field}
                  />
                  <FormMessage className="text-[#FF6347]" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <Label className="block text-sm font-semibold text-gray-700 mb-2">
                    Delivery Address
                  </Label>
                  <textarea
                    placeholder="123 Main St, Apt 4B, New York, NY 10001"
                    className={`${customInputClasses} resize-none`}
                    rows={3}
                    {...field}
                  />
                  <FormMessage className="text-[#FF6347]" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="promoCode"
              render={({ field }) => (
                <FormItem>
                  <Label className="block text-sm font-semibold text-gray-700 mb-2">
                    Promo Code
                  </Label>
                  <div className="flex gap-3">
                    <Input
                      placeholder="Enter promo code"
                      className={customInputClasses}
                      {...field}
                    />
                    <Button type="button" size="xl" variant="brand">
                      Apply
                    </Button>
                  </div>
                  <FormMessage className="text-[#FF6347]" />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </div>
  );
}
