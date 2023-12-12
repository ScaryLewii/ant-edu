import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const data = [
  {
    title: "IELTS",
    schedule: [
      {
        date: '08-11-2023',
        state: 'full',
        location: ['TP.Hà Nội', 'TP.Đà Nẵng']
      },
      {
        date: '09-11-2023',
        state: 'full',
        location: ['TP.Hà Nội', 'TP.Đà Nẵng']
      },
      {
        date: '16-11-2023',
        state: 'offline',
        location: ['TP.Hà Nội', 'TP.Đà Nẵng']
      },
      {
        date: '22-11-2023',
        state: 'offline',
        location: ['TP.Hà Nội', 'TP.Đà Nẵng']
      },
      {
        date: '29-11-2023',
        state: 'offline',
        location: ['TP.Hà Nội', 'TP.Đà Nẵng']
      }
    ]
  },
  {
    title: "PTE",
    schedule: [
      {
        date: '08-11-2023',
        state: 'full',
        location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
      },
      {
        date: '09-11-2023',
        state: 'full',
        location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
      },
      {
        date: '15-11-2023',
        state: 'offline',
        location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
      },
      {
        date: '16-11-2023',
        state: 'offline',
        location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
      },
      {
        date: '22-11-2023',
        state: 'offline',
        location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
      },
      {
        date: '23-11-2023',
        state: 'offline',
        location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
      },
      {
        date: '29-11-2023',
        state: 'offline',
        location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
      },
      {
        date: '30-11-2023',
        state: 'offline',
        location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
      }
    ]
  },
  {
    title: "CEFR",
    schedule: [
      {
        date: '08-11-2023',
        state: 'full',
        location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
      },
      {
        date: '09-11-2023',
        state: 'full',
        location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
      },
      {
        date: '15-11-2023',
        state: 'online',
        location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
      },
      {
        date: '16-11-2023',
        state: 'offline',
        location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
      },
      {
        date: '22-11-2023',
        state: 'offline',
        location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
      },
      {
        date: '23-11-2023',
        state: 'online',
        location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
      },
      {
        date: '29-11-2023',
        state: 'offline',
        location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
      },
      {
        date: '30-11-2023',
        state: 'online',
        location: ['TP.Hà Nội', 'TP.Đà Nẵng', 'TP.Hồ Chí Minh']
      }
    ]
  }
]

export const certRouter = createTRPCRouter({
  getCertData: publicProcedure.query(({input}) => {
    return data.find(d => d.title === input);
  }),
});
