import Header from "@/components/Header";
import Badge from "@/components/Badge";

async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export default async function BlogDetail({ params }: { params: { id: string } }) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    return (
      <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Post Not Found</h1>
        <a href="/" className="text-indigo-600 hover:underline">← Back to Blog</a>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto p-6 max-w-3xl">
        <a href="/" className="inline-block text-indigo-600 hover:text-indigo-800 hover:underline mb-6 font-medium transition">
          ← Back to Blog
        </a>
        <article className="bg-white p-8 rounded-2xl shadow-sm border">
          <div className="mb-4 flex items-center gap-3">
             <Badge label="Post" color="indigo" />
             <span className="text-sm text-gray-500">User #{post.userId}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="prose prose-indigo max-w-none text-gray-700 leading-relaxed text-lg">
            {post.body.split('\n').map((paragraph: string, i: number) => (
              <p key={i} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}