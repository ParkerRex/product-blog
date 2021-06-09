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
            About this Guy
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
              Hey, I'm a product manager with 7 years of product experience. I started with a copy of photoshop,
              trying to design flyers and print materials. I joined a startup at 20 called Delivery Dudes.
              We needed apps so I figured out how to design them. My first apps sucked. In fact the first app I helped design is still in production used by thousands of delivery drivers.
            </p>
            <p>
              2 years and a few more production apps later, I was dubbed the almighty role of PM. I would still design all the products.
              Eventually the CTO of Delivery Dudes resigned and I took the helm as VP of Product. I held that position for 3 years until I resigned. 
              Delivery Dudes was acquired by WAITR in April of 2021. I stuck around for a ~3 months helping build a team of 10 engineers to merge WAITR, Bytesquad, and Delivery Dudes.
            </p>
            <p>
              As of writing, I'm spending time traveling, coding, and making YouTube videos. 
              I have 2 startups I'll be hacking on over the summer. Excited for their launch :).
              <p>
                -Parker
              </p>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
