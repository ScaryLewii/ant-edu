
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const navigations = [
  {
    id: 1,
    name: "Về chúng tôi",
    type: "inline",
    slug: "about"
  },
  {
    id: 2,
    name: "Chứng chỉ",
    type: "inline",
    slug: "certificate",
    children: [
      {
        id: 2.1,
        name: "Chứng chỉ IELTS",
        slug: "certificate/ielts"
      },
      {
        id: 2.2,
        name: "Chứng chỉ PTE",
        slug: "certificate/pte"
      },
      {
        id: 2.3,
        name: "Chứng chỉ CEFR",
        slug: "certificate/cefr"
      },
    ]
  },
  {
    id: 3,
    name: "Lịch thi thử",
    type: "inline",
    slug: "schedule",
    children: [
      {
        id: 2.1,
        name: "Lịch thi PTE",
        slug: "schedule/pte"
      }
    ]
  },
  {
    id: 4,
    type: "inline",
    name: "Tin tức",
    slug: "news"
  },
  {
    id: 9,
    name: "Liên hệ",
    slug: "test-register",
  },
];

export const navigationRouter = createTRPCRouter({
  getAll: publicProcedure.query(() => {
    return navigations;
  }),
});
