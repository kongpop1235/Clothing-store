import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="grid grid-cols-3 justify-center navbar border-b-2">
        <div className="flex">
          <button className="rounded-full py-3.5 px-5 mr-2.5 align-middle border border-F1F1F3 button-yellow">
            Home
          </button>
          <button className="rounded-full py-3.5 px-5 align-middle border border-F1F1F3 button-yellow">
            Products
          </button>
        </div>
        <div className="grid content-center justify-center">
          <Image

            src="/navbar/logo.svg"
            alt="logo" width={60} height={60}
          />
        </div>
        <div className="grid justify-items-end">
          <div className="flex">
            <div className="rounded-full bg-FFD400 p-3.5 mr-3.5 cart-button grid content-center justify-center">
              <Image
                src="/navbar/shopping_cart_icon.svg"
                alt="cart icon" width={24} height={24}
              />
            </div>
            <button className="rounded-full py-3.5 px-5 align-middle border border-F1F1F3 button-yellow">
              Contact Support
            </button>
          </div>
        </div>
      </div>
      <div>
      </div>
    </main>
  );
}