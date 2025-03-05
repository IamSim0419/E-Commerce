import { assets } from "../assets/frontend_assets/assets";
import { navLinks } from "./Header";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} alt="" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            repellendus nulla! Sapiente minus quas debitis consectetur quo
            laborum voluptas reiciendis voluptatibus, rem odio et, corrupti nam
            provident mollitia porro ab.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+63 968-728-3042</li>
            <li>mioimada@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright {new Date().getFullYear()}@ forever.com - All Right
          Reserved.
        </p>
      </div>
    </footer>
  );
}
