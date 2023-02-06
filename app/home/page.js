import Image from "next/image"
import OurStoryPic from "../../public/home-image-1.jpg"


export default function page() {
  return (
    <>
    <div className="-z-50 fixed top-0 left-0 right-0 w-screen h-screen overflow-hidden">
    <Image
    src={OurStoryPic}
    alt="bg-image" 
    quality={100}
    placeholder="blur"
    sizes={"100vw"}
    style={{objectFit: "cover",}}
    />
    </div>
      <h1 className="p-1 text-center text-3xl font-bold">WELCOME TO HOMEPAGE</h1>
      <p className="text-center text-xl font-bold italic">
      How we became the farmers of the future, 
      tilling the technology of tomorrow today.
      </p>
    </>
  )
}
