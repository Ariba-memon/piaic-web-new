'use client'
export default function Card() {
  return (
    <section className="overflow-hidden text-neutral-700">
      <h2 className="text-4xl font-bold text-green-700 text-center m-4 p-4 font-sans md:font-serif underline decoration-green-900">
        Grand Entry Test
      </h2>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                src="https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364727/wit/50458348_10156517507336281_6817312210671370240_n.jpg"
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                src="https://i.ytimg.com/vi/Bg6wSBuhj2k/maxresdefault.jpg"
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                src="https://i.ytimg.com/vi/x44gyKEHjFI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDpIRA9iW2hpz6NT3W4GoGDdFVUKw"
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                src="https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364725/wit/50448704_10156517507676281_1689263323880620032_n.jpg"
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                src="https://i.ytimg.com/vi/MJyAEYOAMbE/maxresdefault.jpg"
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                src="https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364719/wit/50306287_10156517508116281_971157191560003584_n.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
