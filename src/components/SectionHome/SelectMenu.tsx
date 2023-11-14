"use client"
import * as Select from '@radix-ui/react-select';
import { HiOutlineChevronDown } from 'react-icons/hi';

export default function SelectMenu({ dataSelect, setSelected }: { dataSelect: Array<String>; setSelected : React.Dispatch<React.SetStateAction<string>>}){

    return (
        <Select.Root onValueChange={(value) => setSelected(value)}>

            <Select.Trigger className="inline-flex items-center justify-center rounded-full px-6 bg-tmdbDarkBlue h-[35px] text-base text-white" aria-label="Type of movies">
                <Select.Value placeholder={dataSelect[0]} />
                <Select.Icon>
                    <HiOutlineChevronDown />
                </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
                <Select.Content className="bg-tmdbDarkBlue rounded-md w-full py-2">
                    <Select.Viewport >
                        <Select.Group> 
                            {dataSelect.map((item, index) => 
                                <Select.Item key={index} value={`${item}`} className='w-full py-1 px-6 font-semibold cursor-pointer text-base data-[highlighted]:outline-none '>
                                    <Select.ItemText asChild> 
                                        <span className='bg-LighterGreen-to-Green bg-clip-text text-transparent'>{item}</span>
                                    </Select.ItemText>
                                </Select.Item>    
                            )}
                        </Select.Group>
                    </Select.Viewport>
                </Select.Content>
            </Select.Portal>

        </Select.Root>
    );
}

