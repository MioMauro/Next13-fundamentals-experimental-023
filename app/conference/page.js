import Link from "next/link"
import Image from "next/image"
import ConferencePic from "../../public/media-image-1.jpg"

export default function page() {
  return (
    <>
    <div className="-z-50 fixed top-0 left-0 right-0 w-screen h-screen overflow-hidden">
    <Image
    src={ConferencePic}
    alt="bg-image" 
    quality={100}
    placeholder="blur"
    sizes={"100vw"}
    fill
    style={{objectFit: "cover",}}
    />
    </div>
    <h1 className="p-1 text-yellow-50 text-center text-3xl font-bold">Welcome conference page</h1>
    <h2 className="text-yellow-50 text-center"><Link href="/conference/speakers">Speakers</Link></h2>
    <h2 className="text-yellow-50 text-center"><Link href="/conference/sessions">Sessions</Link></h2>
    </>
  )
}
