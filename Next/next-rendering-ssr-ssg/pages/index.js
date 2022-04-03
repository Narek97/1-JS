import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Link href={"/users"}>
        <a> Users</a>
      </Link>
      <Link href={"/posts"}>
        <a>Posts</a>
      </Link>
    </div>
  );
}
