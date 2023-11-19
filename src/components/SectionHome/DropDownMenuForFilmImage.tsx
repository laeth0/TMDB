import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineUnorderedList, AiTwotoneStar } from "react-icons/ai";
import { MdOutlineFavorite } from "react-icons/md";
import { BsFillBookmarkFill } from "react-icons/bs";


export default function DropDownMenuForFilmImage() {

    return (
        <DropdownMenu.Root  >
            {/*//! this is the icon  */}
            <DropdownMenu.Trigger asChild>
                <button className="absolute top-2 right-2 rounded-full w-[20px] h-[20px] inline-flex items-center justify-center outline-none bg-white opacity-75 hover:bg-blue-300 hover:opacity-100" aria-label="Customise options" >
                    <BsThreeDots />
                </button>
            </DropdownMenu.Trigger>

            {/*//! this is the hidden content  */}
            <DropdownMenu.Portal>
                <DropdownMenu.Content sideOffset={5} className="w-[130px] bg-white rounded-md p-1 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade" >
                    <DropdownMenu.Item className="text-[13px] px-3 flex gap-1 justify-start items-center leading-none h-[25px] select-none outline-none  ">
                        <AiOutlineUnorderedList /> <span>Add to list</span>
                    </DropdownMenu.Item>

                    <DropdownMenu.Separator className="h-[.7px] bg-tmdbDarkBlue opacity-30" />

                    <DropdownMenu.Item className="text-[13px] px-3 flex gap-1 justify-start items-center leading-none h-[25px]  select-none outline-none  ">
                        <MdOutlineFavorite /> <span>Favorite</span>
                    </DropdownMenu.Item>

                    <DropdownMenu.Separator className="h-[.7px] bg-tmdbDarkBlue opacity-30" />

                    <DropdownMenu.Item className=" text-[13px] px-3 flex gap-1 justify-start items-center leading-none h-[25px] select-none outline-none">
                        <BsFillBookmarkFill />  <span>WatchList</span>
                    </DropdownMenu.Item>

                    <DropdownMenu.Separator className="h-[.7px] bg-tmdbDarkBlue opacity-30" />

                    <DropdownMenu.Item className=" text-[13px] px-3 flex gap-1 justify-start items-center leading-none h-[25px] select-none outline-none">
                        <AiTwotoneStar />  <span>Your Rating</span>
                    </DropdownMenu.Item>

                    <DropdownMenu.Arrow className="fill-white" />  {/*//! this is very important "dont remove it" */}

                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};
