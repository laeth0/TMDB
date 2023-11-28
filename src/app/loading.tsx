import Image from "next/image";

export default function Loading() {
  return (
      <div className="flex items-center justify-center w-full h-full">
          <Image height="300" width="300" className="my-32" src="/lottiefiles.gif" alt="this is a loading image"  />
      </div>
  )
}
