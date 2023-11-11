"use client"
import * as Separator from '@radix-ui/react-separator';
import * as Accordion from '@radix-ui/react-accordion';
import { ReactNode, Ref, forwardRef } from 'react';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { twMerge } from 'tailwind-merge'
interface forwardRefItemProp extends Accordion.AccordionItemProps {
    children: ReactNode;
    className?: string;
}
interface forwardRefTriggerProp extends Accordion.AccordionTriggerProps {
    children: ReactNode;
    className?: string;
}

interface forwardRefContentProp extends Accordion.AccordionContentProps {
    children: ReactNode;
    className?: string;
}

export default function SideBar({ openSideBar, handleOpenSideBar }: { openSideBar: boolean, handleOpenSideBar: () => void }) {
    // eslint-disable-next-line react/display-name
    const AccordionItem = forwardRef(({ children, className, ...props }: forwardRefItemProp, forwardedRef: Ref<any>) => (
        <Accordion.Item  {...props} ref={forwardedRef}
            className={twMerge(
                'focus-within:shadow-mauve12 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]',
                className)}  >
            {children}
        </Accordion.Item>
    ));

    // eslint-disable-next-line react/display-name
    const AccordionTrigger = forwardRef(({ children, className, ...props }: forwardRefTriggerProp, forwardedRef: Ref<any>) => (
        <Accordion.Header className="flex">
            <Accordion.Trigger {...props} ref={forwardedRef}
                className={twMerge('group flex h-[45px] flex-1 items-center justify-between outline-none px-5',
                    className)}  >
                {children}
                <HiOutlineChevronDown className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
        </Accordion.Header>
    ));

    // eslint-disable-next-line react/display-name
    const AccordionContent = forwardRef(({ children, className, ...props }: forwardRefContentProp, forwardedRef: Ref<any>) => (
        <Accordion.Content {...props} ref={forwardedRef}
            className={twMerge('data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden',
                className)} >
            <div className="py-[15px] px-5">{children}</div>
        </Accordion.Content>
    ));

    return (
        <aside className={`text-white fixed ${openSideBar ? "left-0":"-left-[70%]" } top-0 bottom-0 w-[70%] bg-tmdbDarkBlue z-[999] p-9 ease-[ease] duration-300`}>
            <div className='mb-8 flex justify-end'>
                <AiOutlineClose onClick={handleOpenSideBar} className="cursor-pointer" />
            </div>
            {/* <Separator.Root className="bg-violet6 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px]" /> */}
            <Accordion.Root className="" type="single" defaultValue="item-4" collapsible  >
                <AccordionItem value="item-1">
                    <AccordionTrigger>Movies</AccordionTrigger>
                    <AccordionContent>
                        <ul className='text-[rgba(255,255,255,.6)] font-semibold gap-2 flex flex-col'>
                            <li className='cursor-pointer'>Popular</li>
                            <li className='cursor-pointer'>Top Rated</li>
                            <li className='cursor-pointer'>Upcoming</li>
                            <li className='cursor-pointer'>Now Playing</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger>TV Shows</AccordionTrigger>
                    <AccordionContent>
                        <ul className='text-[rgba(255,255,255,.6)] font-semibold gap-2 flex flex-col'>
                            <li className='cursor-pointer'>Popular</li>
                            <li className='cursor-pointer'>Top Rated</li>
                            <li className='cursor-pointer'>On TV</li>
                            <li className='cursor-pointer'>Airing Today</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger>People</AccordionTrigger>
                    <AccordionContent>
                        <ul className='text-[rgba(255,255,255,.6)] font-semibold gap-2 flex flex-col'>
                            <li className='cursor-pointer'>Popular People</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger>More</AccordionTrigger>
                    <AccordionContent>
                        <ul className='text-[rgba(255,255,255,.6)] font-semibold gap-2 flex flex-col'>
                            <li className='cursor-pointer'>Contribution Bible</li>
                            <li className='cursor-pointer'>Discussions</li>
                            <li className='cursor-pointer'>Leaderboard</li>
                            <li className='cursor-pointer'>API</li>
                            <li className='cursor-pointer'>Support</li>
                            <li className='cursor-pointer'>About</li>
                            <li className='cursor-pointer'>Login</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion.Root>
        </aside>
    )
}
