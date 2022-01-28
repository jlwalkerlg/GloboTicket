import { Event } from "../entities/event";

export interface EventRepository {
  getEvents(categoryId?: string): Promise<Event[]>;
  getEventById(eventId: string): Promise<Event | undefined>;
}
