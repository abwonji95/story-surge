export default async function Scroll(){

    const response =await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");
    const posts= await response.json();
    
    return(
<div>
    <h1>Scroll</h1>
    <div>
        {posts.map((post:any)=>(
            <li key={posts.id}>
                {post.title}
            </li>

        ))}
    </div>
</div>
    )
    
}