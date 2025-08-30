import { useQuery } from '@tanstack/react-query'

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!response.ok) throw new Error('Network response was not ok')
  return response.json()
}

export default function PostsComponent() {
  const { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 5000, // cache data for 5s
    gcTime: 1000 * 60 * 5, // keep data for 5 mins before garbage collection (renamed from cacheTime in v5)
    refetchOnWindowFocus: false, // prevent refetch when switching tabs
    keepPreviousData: true // keep previous data while fetching new data
  })

  if (isLoading) return <p>Loading posts...</p>
  if (isError) return <p>Error: {error.message}</p>

  return (
    <div>
      <h2 className="text-xl font-bold">Posts</h2>
      <button
        className="p-2 bg-blue-500 text-white rounded my-2"
        onClick={() => refetch()}
      >
        Refetch Posts
      </button>

      <ul className="space-y-2">
        {data.slice(0, 10).map(post => (
          <li key={post.id} className="p-2 border rounded">
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
