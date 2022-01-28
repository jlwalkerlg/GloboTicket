import { Event } from "../entities/event";
import { EventRepository } from "./eventRepository";

const events: Record<string, Event> = {
  "ee272f8b-6096-4cb6-8625-bb4bb2d89e8b": {
    eventId: "ee272f8b-6096-4cb6-8625-bb4bb2d89e8b",
    artist: "John Egbert",
    categoryId: "b0788d2f-8003-43c1-92a4-edc76a7c5dde",
    date: new Date(2021, 3, 9, 17, 47, 1, 36),
    description:
      "Join John for his farwell tour across 15 continents. John really needs no introduction since he has already mesmerized the world with his banjo.",
    imageUrl:
      "https://gillcleerenpluralsight.blob.core.windows.net/files/GloboTicket/banjo.jpg",
    name: "John Egbert Live",
    price: 65,
  },
  "3448d5a4-0f72-4dd7-bf15-c14a46b26c00": {
    eventId: "3448d5a4-0f72-4dd7-bf15-c14a46b26c00",
    artist: "Michael Johnson",
    categoryId: "b0788d2f-8003-43c1-92a4-edc76a7c5dde",
    date: new Date(2021, 6, 9, 17, 47, 1, 40),
    description:
      "Michael Johnson doesn't need an introduction. His 25 concert across the globe last year were seen by thousands. Can we add you to the list?",
    imageUrl:
      "https://gillcleerenpluralsight.blob.core.windows.net/files/GloboTicket/michael.jpg",
    name: "The State of Affairs: Michael Live!",
    price: 85,
  },
  "b419a7ca-3321-4f38-be8e-4d7b6a529319": {
    eventId: "b419a7ca-3321-4f38-be8e-4d7b6a529319",
    artist: "DJ 'The Mike'",
    categoryId: "b0788d2f-8003-43c1-92a4-edc76a7c5dde",
    date: new Date(2021, 1, 9, 17, 47, 1, 40),
    description:
      "DJs from all over the world will compete in this epic battle for eternal fame.",
    imageUrl:
      "https://gillcleerenpluralsight.blob.core.windows.net/files/GloboTicket/dj.jpg",
    name: "Clash of the DJs",
    price: 85,
  },
  "62787623-4c52-43fe-b0c9-b7044fb5929b": {
    eventId: "62787623-4c52-43fe-b0c9-b7044fb5929b",
    artist: "Manuel Santinonisi",
    categoryId: "b0788d2f-8003-43c1-92a4-edc76a7c5dde",
    date: new Date(2021, 1, 9, 17, 47, 1, 40),
    description: "Get on the hype of Spanish Guitar concerts with Manuel.",
    imageUrl:
      "https://gillcleerenpluralsight.blob.core.windows.net/files/GloboTicket/guitar.jpg",
    name: "Spanish guitar hits with Manuel",
    price: 25,
  },
  "adc42c09-08c1-4d2c-9f96-2d15bb1af299": {
    eventId: "adc42c09-08c1-4d2c-9f96-2d15bb1af299",
    artist: "Nick Sailor",
    categoryId: "6313179f-7837-473a-a4d5-a5571b43e6a6",
    date: new Date(2021, 5, 9, 17, 47, 1, 40),
    description:
      "The critics are over the moon and so will you after you've watched this sing and dance extravaganza written by Nick Sailor, the man from 'My dad and sister'.",
    imageUrl:
      "https://gillcleerenpluralsight.blob.core.windows.net/files/GloboTicket/musical.jpg",
    name: "To the Moon and Back",
    price: 135,
  },
  "1babd057-e980-4cb3-9cd2-7fdd9e525668": {
    eventId: "1babd057-e980-4cb3-9cd2-7fdd9e525668",
    artist: "Many",
    categoryId: "fe98f549-e790-4e9f-aa16-18c2292a2ee9",
    date: new Date(2021, 7, 9, 17, 47, 1, 40),
    description: "The best tech conference in the world",
    imageUrl:
      "https://gillcleerenpluralsight.blob.core.windows.net/files/GloboTicket/conf.jpg",
    name: "Techorama 2021",
    price: 400,
  },
};

export class InMemoryEventRepository implements EventRepository {
  async getEvents(categoryId?: string): Promise<Event[]> {
    return categoryId === undefined
      ? Object.values(events)
      : Object.values(events).filter((e) => e.categoryId === categoryId);
  }

  async getEventById(eventId: string): Promise<Event | undefined> {
    return events[eventId];
  }
}
