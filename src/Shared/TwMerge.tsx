import { twMerge as twMergeOriginal } from 'tailwind-merge'
import { clsx, ClassValue } from 'clsx';

const twMerge = (...inputs: ClassValue[]) => twMergeOriginal(clsx(inputs));

export default twMerge