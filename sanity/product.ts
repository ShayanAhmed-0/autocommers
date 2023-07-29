import { defineType, defineField  } from "sanity";
// import { category } from "./category";

export const product = {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "id",
      titel: "id",
      type: "number",
    },
    {
      name: "title",
      titel: "Title",
      type: "string",
    },
    {
      name: "type",
      titel: "Type",
      type: "string",
    },
    {
      name: "description",
      titel: "product Description",
      type: "string",
    },
    {
      name: "price",
      title: "Product Price",
      type: "number",
    },
    {
      name: "category",
      title: "Product Category",
      type: "reference",
      to: [
        {
          type: "category",
        },
      ],
    },
    {
      name: "image",
      titel: "product Image",
      type: "image",
    },
    {
      title: 'image',
      name: 'productImage',
      type: 'array',
      of: [{type: 'image'}]
    },
    {
      title: 'carepoints',
      name: 'productcare',
      type: 'array',
      of: [{type: 'string'}]
    }
  ],
};
