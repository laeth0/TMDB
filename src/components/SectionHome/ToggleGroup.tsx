import React from 'react';
import { Root, Item } from '@radix-ui/react-toggle-group';

export default function ToggleGroup({ dataSelect, setSelected }: { dataSelect: Array<String>; setSelected: React.Dispatch<React.SetStateAction<string>> }) {
    return (
        <Root
            className="inline-flex border border-solid border-tmdbDarkBlue items-center rounded-full"
            type="single"
            defaultValue={`${dataSelect[0]}`}
            aria-label="Type of movies"
            onValueChange={(value) => setSelected(value)}
        >
            {dataSelect.map((item, index) =>
                <Item key={index} value={`${item}`} aria-label={`${item}`} className="group data-[state=on]:bg-tmdbDarkBlue flex h-8 w-28 items-center justify-center text-sm font-semibold rounded-full " >
                    <span className='group-data-[state=on]:bg-LighterGreen-to-Green group-data-[state=on]:bg-clip-text group-data-[state=on]:text-transparent'>{item}</span>
                </Item>
            )}
        </Root>
    )
}
