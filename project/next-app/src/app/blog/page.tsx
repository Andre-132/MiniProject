"use client";

import { Button } from "@/app/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PostWithMessages from "../components/PostMessages";
import ModeToggle from "@/app/components/ui/mode-toggle";

interface Post {
  id: string;
  title: string;
  author: string;
  date: string;
  content: string;
}

export default function blog() {
  const router = useRouter();

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [posting, setPosting] = useState(false);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  async function handleNewPost(e: React.FormEvent) {
    e.preventDefault();
    setPosting(true);
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, author, content }),
    });
    const newPost = await res.json();
    setPosts((prev) => [...prev, newPost]);
    setTitle("");
    setAuthor("");
    setContent("");
    setPosting(false);
  }

  async function handleDeletePost(id: string) {
    await fetch("/api/posts", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setPosts((prev) => prev.filter((post) => post.id !== id));
  }

  if (loading) return <p className="p-4">Loading blog posts...</p>;

  return (
    <main>
      <div className="text-center space-y-4">
        <div className="flex justify-end p-4">
          <ModeToggle />
        </div>
        <div className="max-w-3xl mx-auto p-6 space-y-12">
          <h1 className="text-4xl font-bold text-center">
            Motorcycle Blog Center
          </h1>

          <div className="flex items-center justify-center">
            <Button
              variant="outline"
              type="button"
              onClick={() => router.push("/home")}
            >
              Return Home
            </Button>
          </div>

          <section className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">
              Create a New Blog Post
            </h2>
            <form onSubmit={handleNewPost} className="space-y-2">
              <input
                type="text"
                placeholder="Post Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border px-3 py-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="Your Name"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full border px-3 py-2 rounded"
                required
              />
              <textarea
                placeholder="Write your blog post..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full border px-3 py-2 rounded"
                rows={4}
                required
              ></textarea>
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
                disabled={posting}
              >
                {posting ? "Posting..." : "Submit Post"}
              </button>
            </form>
          </section>

          {posts.map((post) => (
            <PostWithMessages
              key={post.id}
              post={post}
              onDelete={() => handleDeletePost(post.id)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
