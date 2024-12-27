import { CollectionConfig } from "payload/dist/exports/types";

export const Users: CollectionConfig = {
  slug: "users",
  auth: {
    verify: {
      generateEmailHTML({ token }) {
        return `<a href='${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}'>Verify Email</a>`;
      },
    },
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: "role",
      type: "select",
      defaultValue: "user",
      required: true,
      // Verifica se no dashboard deve ou nao aparecer para editar esse campo e qual a condição para aparecer. Nesse caso a opção de editar a role pela interface acontece só se o usuário é admin
      //   admin: {
      //     condition: ({req}) => req.user?.role === "admin",
      //   },
      options: [
        {
          label: "Admin",
          value: "admin",
        },
        {
          label: "User",
          value: "user",
        },
      ],
    },
  ],
};
