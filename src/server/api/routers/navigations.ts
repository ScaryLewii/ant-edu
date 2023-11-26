import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const navigations = [
  {
    id: 1,
    name: "Về chúng tôi",
    slug: "about"
  },
  {
    id: 2,
    name: "Chứng chỉ",
    slug: "certificate",
    children: [
      {
        id: 2.1,
        name: "Chứng chỉ IELTS",
        slug: "chung-chi-ielts"
      },
      {
        id: 2.2,
        name: "Chứng chỉ PTE",
        slug: "chung-chi-pte"
      },
      {
        id: 2.3,
        name: "Chứng chỉ CEFR",
        slug: "chung-chi-cefr"
      },
    ]
  },
  {
    id: 3,
    name: "Lịch thi",
    slug: "lich-thi",
    children: [
      {
        id: 2.1,
        name: "Lịch thi IELTS",
        slug: "lich-thi-ielts"
      },
      {
        id: 2.2,
        name: "Lịch thi PTE",
        slug: "lich-thi-pte"
      },
      {
        id: 2.3,
        name: "Lịch thi CEFR",
        slug: "lich-thi-cefr"
      },
    ]
  },
  {
    id: 4,
    name: "Tin tức",
    slug: "news"
  },
  {
    id: 5,
    name: "Cộng đồng",
    slug: "community",
    children: [
      {
        id: 5.1,
        name: "The Real IELTS",
        slug: "the-real-ielts"
      },
      {
        id: 5.2,
        name: "Lingo Speak",
        slug: "lingo-speak"
      },
      {
        id: 5.3,
        name: "IELTS on Video",
        slug: "ielts-on-video"
      },
      {
        id: 5.4,
        name: "PTE",
        slug: "pte"
      },
    ]
  },
  {
    id: 6,
    name: "Tài liệu",
    slug: "tai-lieu",
    children: [
      {
        id: 6.1,
        name: "IELTS",
        slug: "tai-lieu-ielts"
      },
      {
        id: 6.2,
        name: "PTE",
        slug: "tai-lieu-pte"
      },
      {
        id: 6.3,
        name: "CEFR",
        slug: "tai-lieu-cefr"
      }
    ]
  },
  {
    id: 7,
    name: "Tư vấn",
    slug: "tu-van"
  },
  {
    id: 8,
    name: "Đối tác",
    slug: "partner"
  },
  {
    id: 9,
    name: "Liên hệ",
    slug: "contact"
  },
];

export const navigationRouter = createTRPCRouter({
  getAll: publicProcedure.query(() => {
    return navigations;
  }),
});
