import FooterImage from '@/../public/FooterImage.svg'
import Image from 'next/image'

export default function Footer() {
    return (
        <div>
            <Image src={FooterImage} alt='this is the footer image' />
        </div>
    )
}
