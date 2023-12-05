import { Breadcrumbs } from "@material-tailwind/react";

export default function BreadcrumbsComponent({ links }) {
  return (
    <Breadcrumbs fullWidth className="bg-tranparent">
      {links.map((link, index) => (
        <a key={index} href={link.href} className="opacity-60 flex items-center text-blue-gray-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-primary1">
          {link.label}
        </a>
      ))}
    </Breadcrumbs>
  );
}
