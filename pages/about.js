import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'

export default function About() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full" />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">Creator of Products</div>
            <div className="text-gray-500 dark:text-gray-400">Planet Earth</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              <SocialIcon kind="github" href={siteMetadata.github} />
              <SocialIcon kind="facebook" href={siteMetadata.facebook} />
              <SocialIcon kind="youtube" href={siteMetadata.youtube} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              Parker Rex is a product manager by profession. He started as a college kid with a copy of photoshop,
              quickly learning how to design flyers and print materials. Parker joined a startup at age 21 called Delivery Dudes.
              Soon after joining he started to teach himself UX design and was responsible for putting out the driver app.
            </p>
            <p>
              After 2 years of self taught product design, and 3 production app releases later, Parker took on the role
              of product manager, while still handling all product design. Over the next 5 years, Parker would rise to the ranks
              of VP of Product where he would help scale the company from 1 to 84 cities served. Delivery Dudes was acquired by WAITR in April
              of 2021. Parker resigned from Delivery Dudes in June of 2021 after recognizing the work no longer interested him.
            </p>
            <p>
              Parker now spends his time learning next.js, front end web development, and flutter mobile app development.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
