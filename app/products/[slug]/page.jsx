import ProductDetail from "./main";
import { Products } from "@/components/datas/products";
import slugify from "react-slugify";
import { FlexibleBreadcrumb } from "@/components/reusables/bread-crumbs";
import { FileText, Folder } from "lucide-react";
export default function Page({ params }) {
  const { slug } = params;

  const product = Products.find((p) => slugify(p.title) === slug);

  const breadcrumbItems = [
    {
      label: "Home",
      href: "/",
      icon: <Folder className="h-4 w-4" />,
    },
    {
      label: "Shop",
      href: "/shop",
      icon: <Folder className="h-4 w-4" />,
    },
    {
      label: slug,
      href: `/shop/${slug}`,
      icon: <FileText className="h-4 w-4" />,
    },
  ];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex flex-col my-12 mb-32 w-full items-center">
      <div className="flex w-full flex-col max-w-6xl">
        <FlexibleBreadcrumb items={breadcrumbItems} />
        <ProductDetail product={product} />
      </div>
    </div>
  );
}
