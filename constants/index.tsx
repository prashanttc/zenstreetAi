import { GraduationCap } from 'lucide-react';
import Image from "next/image";

interface Credential {
    icon: JSX.Element;
    desc: string;
}

export const Credentials: Credential[] = [
    {
        icon: <GraduationCap />,
        desc: "Ph.D. in Clinical Psychology - Harvard University"
    },
    {
        icon: <GraduationCap />,
        desc: "M.A. in Counseling - University of California, Berkeley"
    },
    {
        icon: (
            <Image
                src="/assets/license.png"
                alt="LPC License"
                width={24}
                height={24}
            />
        ),
        desc: "Licensed Professional Counselor (LPC) - State of DEF"
    },
    {
        icon: <Image
            src="/assets/certificate.png"
            alt="LPC License"
            width={24}
            height={24}
        />,
        desc: "Certified Cognitive Behavioral Therapist (CBT)"
    },
    {
        icon: <Image
            src="/assets/user.png"
            alt="LPC License"
            width={24}
            height={24}
        />,
        desc: "Member, American Psychological Association (APA)"
    },
    {
        icon: <Image
            src="/assets/bag.png"
            alt="LPC License"
            width={22}
            height={22}
        />,
        desc: "10+ years of experience in individual and group therapy"
    },
];


export const share = [
    {
        icon: (
            <Image
                src="/assets/fb.png"
                alt="fb"
                width={32}
                height={32}
            />
        ),
        desc: "Facebook"
    },
    {
        icon: <Image
            src="/assets/wp.png"
            alt="wp"
            width={32}
            height={32}
        />,
        desc: "Whatsapp"
    },

    {
        icon: <Image
            src="/assets/x.png"
            alt="x"
            width={32}
            height={32}
        />,
        desc: "Twitter"
    },
    {
        icon: <Image
            src="/assets/email.png"
            alt="email"
            width={32}
            height={32}
        />,
        desc: "Gmail"
    },

]