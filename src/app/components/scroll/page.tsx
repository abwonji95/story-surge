import { url } from "inspector";
import Link from "next/link";
import { title } from "process";

export interface Scroll{
    title:string,
    url:string,


}

export default async function Scroll(scroll:Scroll){

    const response =await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");
    const posts= await response.json();
    
    return(
<div className="">
    <div className="flex-col">
    <div className="float-left">
    <h1 className="text-black font-semibold text-lg p-2">{scroll.title}</h1>
    </div>
    <div className="float-right">
    <Link href={scroll.url} className="text-black font-semibold text-lg p-2">See All</Link>
    </div>
    
    
    </div>

    <div className="flex">
        {posts.map((post:any)=>(
            <ul key={posts.id}>
                <li> {post.title}</li>
                
            </ul>

        ))}
    </div>
</div>
    )
    
}