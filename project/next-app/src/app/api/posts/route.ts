import { NextResponse } from "next/server";

let posts = [
  {
    id: "1",
    title: "Ride Smarter, Ride Safer",
    author: "Andre A.",
    date: "2025-06-25",
    content:
      "Explore motorcycle-friendly routes and safety tips to keep you protected on every ride.",
  },
  {
    id: "2",
    title: "Top 10 Scenic Motorcycle Roads",
    author: "Tyler L.",
    date: "2025-06-20",
    content:
      "Discover the best scenic routes around the world for unforgettable motorcycle adventures. https://greatmotorcycleroads.com/louisiana/",
  },
];

export async function GET() {
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const { title, author, content } = await request.json();
  if (!title || !author || !content) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  const newPost = {
    id: (posts.length + 1).toString(),
    title,
    author,
    content,
    date: new Date().toISOString(),
  };
  posts.push(newPost);
  return NextResponse.json(newPost, { status: 201 });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  posts = posts.filter((post) => post.id !== id);
  return NextResponse.json({ success: true });
}
