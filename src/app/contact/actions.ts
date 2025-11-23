"use server";

import { z } from 'zod';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
});

export async function sendContactMessage(formData: z.infer<typeof formSchema>) {
  try {
    const validatedData = formSchema.parse(formData);
    
    // In a real application, you would send an email, save to a database, etc.
    // For this example, we'll just log the data to the console.
    console.log("New contact message received:");
    console.log(validatedData);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true };
  } catch (error) {
    console.error("Error processing contact form:", error);
    return { success: false };
  }
}
