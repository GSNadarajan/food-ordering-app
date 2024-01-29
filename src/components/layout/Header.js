import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link className="text-2xl font-extrabold text-primary" href="">
        ST PIZZA
      </Link>
      <nav className="flex gap-8 text-gray-400 font-semibold items-center">
        <Link href={""}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contacts</Link>
        <Link
          href={""}
          className="bg-primary rounded-full text-white px-6 py-2"
        >
          Login
        </Link>
      </nav>
      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        <Link href="">Login</Link>
      <Link
          href={""}
          className="bg-primary rounded-full text-white px-6 py-2"
        >
          Register
        </Link>

      </nav>
    </header>
  );
}
