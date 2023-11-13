"use client"
import * as Select from '@radix-ui/react-select';
import { HiOutlineChevronDown } from 'react-icons/hi';


export default function SelectMenu({ dataSelect, setSelected }: { dataSelect: Array<String>; setSelected : React.Dispatch<React.SetStateAction<string>>}){

    return (
        <Select.Root onValueChange={(value) => setSelected(value)}>

            <Select.Trigger className="inline-flex items-center justify-center text-white relative  rounded-full px-6 text-sm leading-none bg-tmdbDarkBlue h-[35px] gap-1 data-[placeholder]:text-white data-[placeholder]:text-base" aria-label="Type of movies">
                <Select.Value placeholder={dataSelect[0]}  />
                <Select.Icon className=" text-white">
                    <HiOutlineChevronDown />
                </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
                <Select.Content className="bg-LighterGreen-to-Green overflow-hidden rounded-md w-full py-2">

                    <Select.Viewport >
                        <Select.Group> 
                            {dataSelect.map((item, index) => 
                                <Select.Item key={index} value={`${item}`} className='w-full py-1 px-6 text-tmdbDarkBlue font-semibold  cursor-pointer relative text-base data-[highlighted]:outline-none '>
                                    <Select.ItemText>{item}</Select.ItemText>
                                </Select.Item>    
                            )}
                        </Select.Group>
                    </Select.Viewport>

                </Select.Content>
            </Select.Portal>

        </Select.Root>
    );
}

