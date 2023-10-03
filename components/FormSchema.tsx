"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "./ui/textarea";
import { BiMailSend } from "react-icons/bi";
import { useRef, useState } from "react";

const formSchema = z.object({
	name: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}),
	email: z
		.string()
		.email({
			message: "Invalid email address.",
		})
		.min(2, {
			message: "Email must be at least 2 characters.",
		}),
	message: z.string().min(2, {
		message: "Message must be at least 2 characters.",
	}),
});

export default function ProfileForm() {
	const formRef = useRef<HTMLFormElement>(null);
	const [isSending, setIsSending] = useState<boolean>(false);
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			setIsSending(true);
			const result = emailjs.sendForm(
				"service_mpju219",
				"template_rzr2anb",
				formRef.current!,
				"uQolgLvCE6JjFRtok"
			);
			const res = await toast.promise(result, {
				loading: "Sending Email To MBA",
				success: "Email Sent",
				error: "Something Went Wrong!",
			});
			if (res.status === 200) {
				setIsSending(false);
			}
		} catch (error: any) {
			setIsSending(false);
			console.log(error.text);
		}
	}

	return (
		<Form {...form}>
			<form
				ref={formRef}
				onSubmit={form.handleSubmit(onSubmit)}
				className="p-10 mt-10 space-y-8 border rounded-lg bg-card"
			>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-2xl font-extrabold">
								Your Name
							</FormLabel>
							<FormControl>
								<Input
									placeholder="Mahmoud"
									className="text-2xl font-extrabold border-secondary"
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-2xl font-extrabold">
								Your Email
							</FormLabel>
							<FormControl>
								<Input
									className="text-2xl font-extrabold"
									placeholder="gg@gmail.com"
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem className="flex flex-col">
							<FormLabel className="text-lg font-extrabold">
								Your Message
							</FormLabel>
							<FormControl>
								<Textarea
									className="text-lg font-extrabold min-h-[200px]"
									placeholder="Your message"
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					disabled={isSending}
					type="submit"
					className="flex items-center justify-center gap-2 text-2xl font-bold"
				>
					<span>Send</span>
					<BiMailSend />
				</Button>
			</form>
		</Form>
	);
}
