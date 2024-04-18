import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      {/* navbar */}
      <div className="flex justify-between navbar border-b-2">
        <div className="flex">
          <Link href="/">
            <button className="rounded-full py-3.5 px-5 mr-2.5 align-middle border border-F1F1F3 button-yellow">
              Home
            </button>
          </Link>
          <Link href="/products">
            <button className="rounded-full py-3.5 px-5 align-middle border border-F1F1F3 button-yellow">
              Products
            </button>
          </Link>
        </div>
        <div className="grid content-center justify-center">
          <Image src="/navbar/logo.svg" alt="logo" width={60} height={60} />
        </div>
        <div className="grid justify-items-end">
          <div className="flex">
            <div className="rounded-full bg-FFD400 p-3.5 mr-3.5 cart-button grid content-center justify-center">
              <Image
                src="/navbar/shopping_cart_icon.svg"
                alt="cart icon"
                width={24}
                height={24}
              />
            </div>
            <Link href="/contact">
              <button className="rounded-full py-3.5 px-5 align-middle border border-F1F1F3 text-nowrap">
                Contact Support
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Link href="/home"></Link>
    </main>
  );
}
