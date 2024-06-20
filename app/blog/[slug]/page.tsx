import { fullBlog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export const revalidate = 30 // revalidate at most every 30 seconds

async function getData(slug: string){
  const query = `*[_type == "blog" && slug.current == '${slug}']{
  'currentSlug': slug.current,
    title,
    content,
    titleImage,
}[0]`;

const data = await client.fetch(query);
return data;
}
export default async function BlogArticle({params}:{params: {slug: string}}) {
  const data: fullBlog = await getData(params.slug);
  console.log(data);
  
  return (
    <div className="mt-8">
      <h1>
      <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">Shreejai Raj - Blog</span>
      <span className="text-center block mt-2 text-3xl font-bold leading-8 tracking-tight sm:text-4xl">{data.title}</span>
      </h1>
      
      <Image src={urlFor(data.titleImage).url()} width={800} height={800} alt="Title image" priority className="mt-8 rounded-lg border"/>

      <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
        <PortableText value={data.content}/>
      </div>
    </div>
  )
}