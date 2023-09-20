import { z } from "zod";

export const quizCreationSchema = z.object({
    topic: z
        .string()
        .min(4, {
            message: "Topic is required"
        })
        .max(50, {
            message: "Topic is too long"
        }),
    type: z.enum(["mcq", "open_ended"]),
    amount: z.number().min(1, { message: "Amount is required" }).max(50),
});
