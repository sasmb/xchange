"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { submitContactForm } from "@/app/actions"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

type FormData = z.infer<typeof formSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      await submitContactForm(data)
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      })
      reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input {...register("name")} placeholder="Your Name" aria-label="Your Name" />
        {errors.name?.message && <p className="text-sm text-red-500 mt-1">{errors.name.message as string}</p>}
      </div>
      <div>
        <Input {...register("email")} type="email" placeholder="Your Email" aria-label="Your Email" />
        {errors.email?.message && <p className="text-sm text-red-500 mt-1">{errors.email.message as string}</p>}
      </div>
      <div>
        <Textarea {...register("message")} placeholder="Your Message" aria-label="Your Message" />
        {errors.message?.message && <p className="text-sm text-red-500 mt-1">{errors.message.message as string}</p>}
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}

