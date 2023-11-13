"use client"
import * as Accordion from '@radix-ui/react-accordion';
import { Ref, forwardRef } from 'react';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import cn from '../../Shared/TwMerge'

interface forwardRefItemProp extends Accordion.AccordionItemProps {
    children: React.ReactNode;
    className?: string;
}
interface forwardRefTriggerProp extends Accordion.AccordionTriggerProps {
    children: React.ReactNode;
    className?: string;
}

interface forwardRefContentProp extends Accordion.AccordionContentProps {
    children: React.ReactNode;
    className?: string;
}

export default function SideBar({ openSideBar, handleOpenSideBar }: { openSideBar: boolean, handleOpenSideBar: Function }) {
    // eslint-disable-next-line react/display-name
    const AccordionItem = forwardRef(({ children, className, ...props }: forwardRefItemProp, forwardedRef: Ref<any>) => (
        <Accordion.Item  {...props} ref={forwardedRef}
            className={cn('overflow-hidden focus-within:relative focus-within:z-10', className)} >
            {children}
        </Accordion.Item>
    ));

    // eslint-disable-next-line react/display-name
    const AccordionTrigger = forwardRef(({ children, className, ...props }: forwardRefTriggerProp, forwardedRef: Ref<any>) => (
        <Accordion.Header className="flex">
            <Accordion.Trigger {...props} ref={forwardedRef} className={cn('group flex h-[45px] flex-1 items-center justify-between px-5', className)}  >
                {children}
                <HiOutlineChevronDown className="ease-[cubic-bezier(0.87,_0,_0.13,_1)] duration-500 transition-transform group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
        </Accordion.Header>
    ));

    // eslint-disable-next-line react/display-name
    const AccordionContent = forwardRef(({ children, className, ...props }: forwardRefContentProp, forwardedRef: Ref<any>) => (
        <Accordion.Content {...props} ref={forwardedRef}
            className={cn('data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp', className)} >
            <div className="py-[15px] px-5">{children}</div>
        </Accordion.Content>
    ));

    return (
        <nav className={`text-white fixed ${openSideBar ? "left-0" : "-left-[70%]"} top-0 bottom-0 w-[70%] bg-tmdbDarkBlue z-[999] p-9 ease-[ease] duration-300`}>
            <div className='mb-8 flex justify-end'>
                <AiOutlineClose onClick={handleOpenSideBar} className="cursor-pointer" alt="Close sidebar" />
            </div>

            <Accordion.Root type="single" defaultValue="item-4" collapsible  >
                <AccordionItem value="item-1">
                    <AccordionTrigger aria-label="Movies"> {/* //? aria-label -> his job is to tell the screen reader what the button does when it is clicked on by a user with a screen reader enabled.  */}
                        Movies
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className='text-[rgba(255,255,255,.6)] font-semibold gap-2 flex flex-col'>
                            <li>
                                <a href="#" title="Popular movies">Popular</a>
                            </li>
                            <li>
                                <a href="#" title="Top rated movies">Top Rated</a>
                            </li>
                            <li>
                                <a href="#" title="Upcoming movies">Upcoming</a>
                            </li>
                            <li>
                                <a href="#" title="Now playing movies">Now Playing</a>
                            </li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger aria-label="TV Shows">
                        TV Shows
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className='text-[rgba(255,255,255,.6)] font-semibold gap-2 flex flex-col'>
                            <li>
                                <a href="#" title="Popular TV shows">Popular</a>
                            </li>
                            <li>
                                <a href="#" title="Top rated TV shows">Top Rated</a>
                            </li>
                            <li>
                                <a href="#" title="TV shows currently on air">On TV</a>
                            </li>
                            <li>
                                <a href="#" title="TV shows airing today">Airing Today</a>
                            </li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger aria-label="People">
                        People
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className='text-[rgba(255,255,255,.6)] font-semibold gap-2 flex flex-col'>
                            <li>
                                <a href="#" title="Popular people">Popular People</a>
                            </li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger aria-label="More">
                        More
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className='text-[rgba(255,255,255,.6)] font-semibold gap-2 flex flex-col'>
                            <li>
                                <a href="#" title="Contribution Bible">Contribution Bible</a>
                            </li>
                            <li>
                                <a href="#" title="Discussions">Discussions</a>
                            </li>
                            <li>
                                <a href="#" title="Leaderboard">Leaderboard</a>
                            </li>
                            <li>
                                <a href="#" title="API">API</a>
                            </li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion.Root>
        </nav>
    )
}
