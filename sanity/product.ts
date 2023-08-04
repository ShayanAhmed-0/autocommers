import { defineType, defineField  } from "sanity";
// import { category } from "./category";

export const product = {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "id",
      title: "id",
      type: "number",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "type",
      title: "Type",
      type: "string",
    },
    {
      name: "description",
      title: "product Description",
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
      title: "product Image",
      type: "image",
    },
    // {
    //   title: 'image',
    //   name: 'productImage',
    //   type: 'array',
    //   of: [{type: 'image'}]
    // },
    {
      title: 'carepoints',
      name: 'productcare',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      title: 'Sizes',
      name: 'Sizes',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      title: 'Colors',
      name: 'Colors',
      type: 'array',
      of: [{type: 'string'}]
    }

  ],
};
