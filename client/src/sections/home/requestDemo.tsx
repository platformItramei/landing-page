import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Controller } from 'react-hook-form';
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Send } from 'lucide-react';
import { apiRequest } from '@/lib/queryClient';
import cryptos from "../../lib/security";
import { useToast } from '@/hooks/use-toast';


interface RequestDemoSectionProps {
  onDemoSubmit: (data: any) => void;
}

const emailSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

const fullFormSchema = emailSchema.extend({
  fullName: z.string().min(1, 'Full name is required'),
  contactNumber: z.string()
  .regex(/^\+\d{1,4}\s\d{6,14}$/, {
    message: 'Please enter a valid mobile number in the format +353 8XXXXXXXX',
  }),
  jobTitle: z.string().min(1, 'Job title is required'),
  company: z.string().min(1, 'Company is required'),
  comments: z.string().optional(),
  constent: z.literal(true, {
    errorMap: () => ({ message: 'Please accept the terms and conditions' }),
  }),
});

type EmailFormData = z.infer<typeof emailSchema>;
type FullFormData = z.infer<typeof fullFormSchema>;

const RequestDemoSection = ({ onDemoSubmit }: RequestDemoSectionProps) => {
  const [showFullForm, setShowFullForm] = useState(false);
  const { toast } = useToast();

  const emailForm = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  });

  const fullForm = useForm<FullFormData>({
    resolver: zodResolver(fullFormSchema),
  });

  const demoRequestMutation = useMutation({
    mutationFn: async (data: FullFormData) => {
      // Step 1: Fetch auth token

      console.log(import.meta.env.VITE_BACKEND_BASE_URL);
      const auth = await apiRequest(
        'POST', 
        `https://itramei-backend-prod-162888271972.europe-north1.run.app/api/v1/user/auth/token`,
        {
          email:"itrameifrontend@gmail.com",
          password: "yourPassword123"
        }
      );
  
      const authJson = await auth.json();
      const token = authJson?.data?.token;
  
      // Step 2: Prepare payload
      const payload = {
        type: "business",
        comments: data.comments,
        company: data.company,
        consent: true,
        contactNumber: data.contactNumber.split(' ')[1],
        countryCode: data.contactNumber.split(' ')[0],
        email: data.email,
        model:"b2b",
        firstName: data.fullName.split(' ')[0] || "",
        lastName: data.fullName.split(' ')[1] || "",
        title: data.jobTitle,
      };
  
      const backendPublicKey = await cryptos.importPublicKeyFromPem(
        "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA1D4KYrgm8UupDsATbeWX3J5jx6PijN+w6/9yWREzufXXUwSk1M7Otvz8xR20CttPJjDnh6Jku5TeQJEZEatKHI6+5FVKBy1HNUMmYeS9phbAIRn9pahcGu06x+ETOdwOQWtseuw0KSiqIj2lQY3cZBuALkHcB0EKNYm9S2Ux5fXetHudgWYeJeDT/4oVznmD0psjdP8YFlfgn+QX9xifpsYwXVGlrNtYqsx5KaQaEoJ/8JL5Al8UhdbdJy3v9evMdOSPpUHjBrnhUh/P9X16Vd8F/b/0DGy9nHiJRbbncQrDKenmPuIT53MGyP+txu9lcIvHXpH9P6WxqaYdxBlZwwIDAQAB"
      );

      const epayload = await cryptos.encrypt(payload, backendPublicKey);


      // Step 3: Make authorized request with token

      
      const response = await apiRequest(
        'POST',
        'https://itramei-backend-prod-162888271972.europe-north1.run.app/api/v1/user/auth/register',
        epayload,
        token
      );

  
      return response.json(); // Ensure the mutation resolves a usable JSON value
    },
  
    onSuccess: (data) => {
      toast({
        title: "Demo Request Submitted!",
        description: "Thank you! for your interest, one of our team members will reach out to you soon.",
      });
      onDemoSubmit(data);
    },
  
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit demo request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleEmailContinue = (data: EmailFormData) => {
    fullForm.setValue('email', data.email);
    setShowFullForm(true);
  };

  const handleFullFormSubmit = (data: FullFormData) => {
    demoRequestMutation.mutate(data);
  };

  return (
    <section id="request-demo-form" className="relative mt-22
     py-16 sm:py-20 md:py-24 bg-gray-950">
      <br /><br /> <br />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Sales Team?
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base md:text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Don't let your team settle for average when excellence is within reach.
          </motion.p>
        </div>

        {/* Progressive Form */}
        <motion.div
          className="glassmorphism p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <AnimatePresence mode="wait">
            {!showFullForm ? (
              <motion.form
                key="email-form"
                onSubmit={emailForm.handleSubmit(handleEmailContinue)}
                className="space-y-4 sm:space-y-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="form-field">
                  <Label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-2 sm:mb-3">Work Email</Label>
                  <Input
                    {...emailForm.register('email')}
                    type="email"
                    placeholder="Enter your work email"
                    className="bg-transparent border-border text-base sm:text-lg h-10 sm:h-12"
                  />
                  {emailForm.formState.errors.email && (
                    <p className="text-destructive text-xs sm:text-sm mt-1 sm:mt-2">
                      {emailForm.formState.errors.email.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full  h-10 sm:h-12 text-sm rounded-xl sm:text-base md:text-lg font-semibold"
                  disabled={emailForm.formState.isSubmitting}
                  style={{ background: " linear-gradient(125deg, rgba(35,195,255,1), rgba(0,128,255,0.6))" }}
                >
                  Continue <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </motion.form>
            ) : (
              <motion.form
                key="full-form"
                onSubmit={fullForm.handleSubmit(handleFullFormSubmit)}
                className="space-y-4 sm:space-y-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="form-field">
                    <Label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-2 sm:mb-3">Full Name</Label>
                    <Input
                      {...fullForm.register('fullName')}
                      placeholder="John Doe"
                      className="bg-transparent border-border text-sm sm:text-base"
                    />
                    {fullForm.formState.errors.fullName && (
                      <p className="text-destructive text-xs sm:text-sm mt-1 sm:mt-2">
                        {fullForm.formState.errors.fullName.message}
                      </p>
                    )}
                  </div>
                  <div className="form-field">
                    <Label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-2 sm:mb-3">Contact Number</Label>
                    <Input
                      {...fullForm.register('contactNumber')}
                      type="tel"
                      placeholder="+353 8XXXXXXXX"
                      className="bg-transparent border-border text-sm sm:text-base"
                    />
                    {fullForm.formState.errors.contactNumber && (
                      <p className="text-destructive text-xs sm:text-sm mt-1 sm:mt-2">
                        {fullForm.formState.errors.contactNumber.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="form-field">
                    <Label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-2 sm:mb-3">Job Title</Label>
                    <Input
                      {...fullForm.register('jobTitle')}
                      placeholder="Type.."
                      className="bg-transparent border-border text-sm sm:text-base"
                    />
                    {fullForm.formState.errors.jobTitle && (
                      <p className="text-destructive text-xs sm:text-sm mt-1 sm:mt-2">
                        {fullForm.formState.errors.jobTitle.message}
                      </p>
                    )}
                  </div>
                  <div className="form-field">
                    <Label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-2 sm:mb-3">Company</Label>
                    <Input
                      {...fullForm.register('company')}
                      placeholder="Type.."
                      className="bg-transparent border-border text-sm sm:text-base"
                    />
                    {fullForm.formState.errors.company && (
                      <p className="text-destructive text-xs sm:text-sm mt-1 sm:mt-2">
                        {fullForm.formState.errors.company.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="form-field">
                  <Label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-2 sm:mb-3">Comments (Optional)</Label>
                  <Textarea
                    {...fullForm.register('comments')}
                    rows={3}
                    placeholder="Tell us about your sales training needs..."
                    className="bg-transparent border-border resize-none text-sm sm:text-base"
                  />
                </div>
                <div className="form-field">
                  <label className="flex items-start space-x-2 text-xs sm:text-sm font-medium text-muted-foreground">
                    <Controller
                      control={fullForm.control}
                      name="constent"
                      render={({ field }) => (
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="mt-0.5 sm:mt-1"
                        />
                      )}
                    />
                    <span>
                      <a
                        href="https://app.termly.io/policy-viewer/policy.html?policyUUID=6ce288ef-d8d6-4a7e-bb9c-bcfe35c9aa13"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-primary transition-colors"
                      >
                        <strong>I agree to receive communication from Itramei and accept the privacy policy.
                        </strong>
                      </a>
                    </span>
                  </label>

                  {fullForm.formState.errors.constent && (
                    <p className="text-destructive text-xs sm:text-sm mt-1 sm:mt-2">
                      {fullForm.formState.errors.constent.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full h-10 sm:h-12 text-sm sm:text-base md:text-lg font-semibold"
                  style={{ background: "linear-gradient(125deg, rgba(35,195,255,1), rgba(0,128,255,0.6))" }}
                  disabled={demoRequestMutation.isPending}
                >
                  {demoRequestMutation.isPending ? 'Submitting...' : 'Submit'}
                  <Send className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      <br /><br /><br /> <br /><br /><br /> <br /><br /><br />
    </section>
  );
};

export default RequestDemoSection;