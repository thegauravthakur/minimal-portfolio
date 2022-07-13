import { ReactNode } from 'react';

interface AnchorIconButtonProps {
    children: ReactNode;
    href: string;
}
export function AnchorIconButton({ children, href }: AnchorIconButtonProps) {
    return (
        <a
            className='p-2 md:p-2.5 hover:bg-gray-200 rounded-full transition transition-colors transition-transform duration-300 active:scale-90'
            href={href}
            rel='noreferrer nofollow'
            target='_blank'
        >
            {children}
        </a>
    );
}
