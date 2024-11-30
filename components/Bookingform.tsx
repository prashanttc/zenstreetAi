"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { Checkbox } from "./ui/checkbox"
import { useRouter } from "next/navigation"

const formSchema = z.object({
    email: z.string().min(2).max(50),
    firstname: z.string().min(2).max(50),
    lastname: z.string().min(2).max(50),
    phone: z.string().min(10).max(50),
})

const Bookingform = () => {
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            firstname: "",
            lastname: "",
            phone: "",
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        router.push("/confirm-page")
        console.log(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className='w-[624px] h-[564px] mt-[51px] flex flex-col gap-[26px]'>
                    <div className="flex gap-10 w-full">
                        <FormField
                            control={form.control}
                            name="firstname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input className='w-[330px] h-[56px] outline-none border-offwhite' placeholder='First Name' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input className='w-[255px] h-[56px] outline-none border-offwhite' placeholder='Last Name' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input className='flex-1 h-[56px] outline-none border-offwhite' placeholder='Email' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className='w-full h-[56px] border-[1px] gap-5 rounded-lg px-5 flex items-center border-offwhite'>
                        <div className='flex gap-2 items-center justify-center'>
                            <Image src='/assets/flag.png' height={10} width={20} alt='flag' />
                            <ChevronDown />
                        </div>
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder='+91 00000000000' className='outline-none border-none w-full h-full placeholder:text-black focus:ring-0 focus:outline-none focus:border-none' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        </div>
                        <h1 className='font-inter text-offwhite text-[14px] 1mt-3'>i. You will receive booking details on WhatsApp</h1>
                        <div className='flex flex-col gap-6 w-full h-fit mb-10'>
                            <h1 className='font-inter text-[20px] font-[500]'>Have you been referred by your employer ?</h1>
                            <div className='flex gap-10 items-center'>
                                <div  className='w-[270px] justify-center items-center rounded-xl h-[66px] bg-brand text-white flex gap-2'>
                                    <Checkbox />
                                    <h1 className='font-inter font-medium text-[13px] text-white flex-wrap'>Yes, I am employed under <br /> a partnering company</h1>
                                </div>
                                <div className='flex gap-4'>
                                    <Input className='w-[188px] h-[56px] boder-[1px]  outline-none border-brand placeholder:text-wrap placeholder:text-center' placeholder='“Partnering Company Name" or "Company ID' />
                                    <div className=' flex items-center justify-center w-[125px] h-[50px] bg-brand text-white rounded-[12px] px-[22px] py-[14px] font-inter text-[20px]'>Verify</div>
                                </div>
                            </div>
                    </div>
                    <Button className='h-[60px] bg-brand py-[18px] text-white text-[22px] font-inter rounded-[12px]'>Book session</Button>
                </div>
            </form>
        </Form>
    )
}

export default Bookingform
