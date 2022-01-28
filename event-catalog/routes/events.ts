import { Request, Response } from "express";
import { EventDto } from "../dtos/eventDto";
import { CategoryRepository } from "../repositories/categoryRepository";
import { EventRepository } from "../repositories/eventRepository";

interface GetEventsQuery {
  categoryId?: string;
}

type GetEventsRequest = Request<{}, any, any, GetEventsQuery>;

export const getEvents = function (
  eventRepository: EventRepository,
  categoryRepository: CategoryRepository
) {
  return async (req: GetEventsRequest, res: Response<EventDto[]>) => {
    const events = await eventRepository.getEvents(req.query.categoryId);
    const categories = await categoryRepository.getAllCategories();

    const categoryToNameMap: Record<string, string> = {};
    categories.forEach((c) => (categoryToNameMap[c.categoryId] = c.name));

    const eventDtos: EventDto[] = events.map((e) => ({
      eventId: e.eventId,
      name: e.name,
      price: e.price,
      artist: e.artist,
      date: e.date,
      description: e.description,
      imageUrl: e.imageUrl,
      categoryId: e.categoryId,
      categoryName: categoryToNameMap[e.categoryId],
    }));

    res.json(eventDtos);
  };
};

interface GetEventByIdParams {
  eventId: string;
}

type GetEventByIdRequest = Request<GetEventByIdParams>;

type GetEventByIdResponse = Response<{ message: string } | EventDto>;

export const getEventById = function (
  eventRepository: EventRepository,
  categoryRepository: CategoryRepository
) {
  return async (req: GetEventByIdRequest, res: GetEventByIdResponse) => {
    const event = await eventRepository.getEventById(req.params.eventId);

    if (!event) {
      res.status(400).json({ message: "Event not found." });
      return;
    }

    const category = await categoryRepository.getCategoryById(event.categoryId);

    if (!category) {
      res.status(400).json({ message: "Category not found." });
      return;
    }

    const eventDto: EventDto = {
      eventId: event.eventId,
      name: event.name,
      price: event.price,
      artist: event.artist,
      date: event.date,
      description: event.description,
      imageUrl: event.imageUrl,
      categoryId: event.categoryId,
      categoryName: category.name,
    };

    res.json(eventDto);
  };
};
