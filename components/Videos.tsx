'use client'
export default function Videos() {
  return (
    <>
      <div className="grid grid-cols-4 items-center gap-4 m-3">
        <div className="mb-4">
          <img
            src="https://pbs.twimg.com/profile_images/1478630664190795778/xuBHOC65_400x400.jpg"
            className="h-auto w-full rounded-full shadow-md shadow-black/20 dark:shadow-white/20"
            alt="Hollywood Sign on The Hill"
          />
          <br />
          <figcaption className="text-center text-neutral-600 dark:text-neutral-400">
            Sir Zia Khan
          </figcaption>
        </div>
        <div className="mb-4">
          <img
            src="https://media.licdn.com/dms/image/C4D03AQFuhdYPmkC0sA/profile-displayphoto-shrink_800_800/0/1562700934047?e=2147483647&v=beta&t=Bwruo2OggLTrCos4804rppZq0UbhmXmPlr5LxDobq74"
            className="h-auto w-full rounded-full shadow-md shadow-black/20 dark:shadow-white/20"
            alt="Five Lands National Park"
          />
          <br />
          <figcaption className="text-center text-neutral-600 dark:text-neutral-400">
            Miss Hira Khan
          </figcaption>
        </div>
        <div className="mb-4">
          <img
            src="https://avatars.githubusercontent.com/u/62209503?v=4"
            className="h-auto w-full rounded-full shadow-md shadow-black/20 dark:shadow-white/20"
            alt="Los Angeles Skyscrapers"
          />
          <br />
          <figcaption className="text-center text-neutral-600 dark:text-neutral-400">
            Sir Adil Altaf
          </figcaption>
        </div>
        <div className="mb-4">
          <img
            src="https://panaverse-dao-complete-syllabus.vercel.app/_next/image?url=%2Fassets%2Finstructors%2Fsir-daniyal.jpg&w=384&q=75"
            className="h-auto w-full rounded-full shadow-md shadow-black/20 dark:shadow-white/20"
            alt="  Sir Daniyal Nagori"
          />
          <br />
          <figcaption className="text-center text-neutral-600 dark:text-neutral-400">
            Sir Daniyal Nagori
          </figcaption>
        </div>
      </div>
    </>
  )
}
