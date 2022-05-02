import { link } from 'src/stores/CourseInformationStore';
import { useAppStore } from 'src/stores/AppStoreProvider';

import { DateTime } from 'luxon';

type TimeAndLocation = string;

const LECTURE_TIME_AND_LOCATION: TimeAndLocation = '10:00 - 11:20 | NAN 181';
const SECTION_TIME_AND_LOCATIONS: TimeAndLocation[] = [
    '10:30 - 11:20 | MGH 058',
    '11:30 - 12:20 | MGH 058',
    '12:30 - 1:20 | MGH 058',
    '1:30 - 2:20 | MGH 058'
]
const POSTER_SESSION_TIME_AND_LOCATION: TimeAndLocation = '11:00 - 12:00 | CSE Atrium';

const OFFICE_HOUR_QISHENG_TIME_AND_LOCATION: TimeAndLocation = '11:30 - 12:30 | CSE 3rd Floor Breakout';
const OFFICE_HOUR_JESSE_TIME_AND_LOCATION: TimeAndLocation = '4:00 - 5:00 | Zoom';

export type CalendarDate = {
    date: DateTime
}

export type CalendarWeek = {
    days: CalendarDate[]
}

/**
 * A calendar item has either a date or a list of dates.
 */
type BaseCalendarItemDates = {
    date: DateTime
} | {
    dates: DateTime[]
}

/**
 * A calendar item location may be one or more locations.
 */
export type BaseCalendarItemTimeAndLocation = {
    timeAndLocation: TimeAndLocation
} | {
    timeAndLocations: TimeAndLocation[]
}

export type AssignmentCalendarItem = {
    type: 'assignment',
    title: string,
} & BaseCalendarItemDates;

export type AwayCalendarItem = {
    type: 'away',
    title: string,
} & BaseCalendarItemDates;

export type EventCalendarItem = {
    type: 'event',
    title: string,
} & BaseCalendarItemDates & BaseCalendarItemTimeAndLocation;

export type HolidayCalendarItem = {
    type: 'holiday',
    title: string,
} & BaseCalendarItemDates;

export type LectureCalendarItem = {
    type: 'lecture',
    title: string,
    slides?: link,
    video?: link,
} & BaseCalendarItemDates & BaseCalendarItemTimeAndLocation;

export type OfficeHourCalendarItem = {
    type: 'officehour',
    title: string,
} & BaseCalendarItemDates & BaseCalendarItemTimeAndLocation;

export type StudioCalendarItem = {
    type: 'studio',
    title: string,
    slides?: link,
    video?: link,
} & BaseCalendarItemDates & BaseCalendarItemTimeAndLocation;

export type CalendarItem =
    AssignmentCalendarItem |
    AwayCalendarItem |
    EventCalendarItem |
    HolidayCalendarItem |
    LectureCalendarItem |
    OfficeHourCalendarItem |
    StudioCalendarItem;

export class CourseCalendarStore {
    /**
     * Start and end dates for the course.
     */
    datesOfInstruction = {
        start: DateTime.fromFormat('Mon 2022-03-28', 'EEE yyyy-MM-dd'),  // Should be a Monday
        end:   DateTime.fromFormat('Fri 2022-06-10', 'EEE yyyy-MM-dd')   // Should be a Friday
    };

    /**
     * Use start and end dates to calculate a list of CalendarWeek objects.
     */
    get calendarWeeks(): CalendarWeek[] {
        return (
            // Obtain an interval for the dates of instruction
            this.datesOfInstruction.start.until(
                this.datesOfInstruction.end.plus({days: 1})
            )
            // Split the interval into weeks
            .splitBy({weeks: 1})
            // Convert each week interval into a list of dates
            .map(
                weekIntervalCurrent => weekIntervalCurrent.splitBy({days: 1}).map(
                    interval => interval.start
                )
                // Keep only weekdays
                .filter(
                    date => ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(date.weekdayShort)
                )
            )
            // Convert each list of dates into a CalendarWeek
            .map(
                weekListDatesCurrent => ({
                    // Convert each date into a CalendarDate
                    days: weekListDatesCurrent.map(
                        dayCurrent => ({
                            date: dayCurrent
                        }) as CalendarDate
                    )
                }) as CalendarWeek
            )
        )
    }

    calendarItems: CalendarItem[] = [
        //
        // Lecture Calendar Items
        //
        {
            type: 'lecture',
            date: DateTime.fromISO('2022-03-29'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'Introduction and Overview',
            slides: 'https://canvas.uw.edu/files/90269755/',
            video: 'https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=73caeacf-f221-4959-bc78-ae68011874d7',
        },
        {
            type: 'lecture',
            date: DateTime.fromISO('2022-03-31'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'Design Diamond',
            slides: 'https://canvas.uw.edu/files/90287283/',
            video: 'https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=5d87db58-194d-40c9-a9e4-ae69015c8bba',
        },
        {
            type: 'lecture',
            date: DateTime.fromISO('2022-04-05'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'Design Research',
            slides: 'https://canvas.uw.edu/files/90477964/',
            video: 'https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=31bef616-e417-4038-96ec-ae6e01472a01',
        },
        {
            type: 'lecture',
            date: DateTime.fromISO('2022-04-12'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'Design of Everyday Things',
            slides: 'https://canvas.uw.edu/files/90865835/',
            video: 'https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=aacc0966-8de9-4e87-99ca-ae750145f644',
        },
        {
            type: 'lecture',
            date: DateTime.fromISO('2022-04-14'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'Design of Everyday Things',
            slides: 'https://canvas.uw.edu/files/90865835/',
            video: 'https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=98048542-47fc-47bb-af48-ae770141c8d5',
        },
        {
            type: 'lecture',
            date: DateTime.fromISO('2022-04-19'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'Task Analysis',
            slides: 'https://canvas.uw.edu/files/91098921/',
            video: 'https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=218aab5f-7e6c-48e7-bb73-ae7d012cc673',
        },
        {
            type: 'lecture',
            date: DateTime.fromISO('2022-04-21'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'Models and Human Performance',
            slides: 'https://canvas.uw.edu/files/91192666/',
            video: 'https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=8a2421f5-305e-4789-8129-ae7e01437b20',
        },
        {
            type: 'lecture',
            date: DateTime.fromISO('2022-04-26'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'Storyboarding, Paper Prototyping, and Testing',
            slides: 'https://canvas.uw.edu/files/91400789/',
            video: 'https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=fb1d746a-a127-453a-9a57-ae6600d820ba',
        },
        {
            type: 'lecture',
            date: DateTime.fromISO('2022-05-03'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'Effective Presentations',
        },
        {
            type: 'lecture',
            date: DateTime.fromISO('2022-05-10'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'Inspection',
        },
        {
            type: 'lecture',
            date: DateTime.fromISO('2022-05-12'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'Interface Implementation',
        },
        {
            type: 'lecture',
            date: DateTime.fromISO('2022-05-19'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'Designing for Diverse Needs',
        },
        {
            type: 'lecture',
            date: DateTime.fromISO('2022-05-24'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'History',
        },

        //
        // Studio Calendar Items
        //
        {
            type: 'studio',
            date: DateTime.fromISO('2022-04-07'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'Introduction to Critique',
            slides: 'https://canvas.uw.edu/files/90565435/',
            video: 'https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=8cb846a3-0342-49be-a159-ae71001d75be',
        },
        {
            type: 'studio',
            dates: [
                DateTime.fromISO('2022-04-01'),
                DateTime.fromISO('2022-04-08'),
                DateTime.fromISO('2022-04-15'),
                DateTime.fromISO('2022-04-22'),
                DateTime.fromISO('2022-04-29'),
                DateTime.fromISO('2022-05-13'),
                DateTime.fromISO('2022-05-20'),
                DateTime.fromISO('2022-06-03'),
            ],
            timeAndLocations: SECTION_TIME_AND_LOCATIONS,
            title: 'Studio',
        },
        {
            type: 'studio',
            dates: [
                DateTime.fromISO('2022-04-28'),
                DateTime.fromISO('2022-05-31'),
                DateTime.fromISO('2022-06-02'),
            ],
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'Studio',
        },

        //
        // Assignment Calendar Items
        //
        {
            type: 'assignment',
            date: DateTime.fromISO('2022-03-31'),
            title: '0 - Introduction Slide',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2022-03-31'),
            title: '1a - Individual Brainstorm',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2022-04-06'),
            title: '1b - Group Proposals',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2022-04-07'),
            title: '1b_rev - Group Proposals',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2022-04-11'),
            title: '1c - Finalized Proposal',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2022-04-12'),
            title: '2a - Project Ideation',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2022-04-14'),
            title: '2b - Design Research Plan',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2022-04-18'),
            title: '2c - Design Research Check-In',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2022-04-21'),
            title: '2d - Design Research Review',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2022-04-25'),
            title: '2e - Task Review',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2022-04-27'),
            title: '2f - Design Check-In',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2022-04-28'),
            title: '2f_rev - Design Check-In',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2022-05-02'),
            title: '2g - Design Review',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2022-05-04'),
            title: '2p - Presentation',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2022-05-30'),
            title: '2web - Getting the Right Design',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2022-05-09'),
            title: '3a - Paper Prototype',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2022-05-10'),
            title: '3b - Heuristic Evaluation',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2022-05-12'),
            title: '3c - Usability Testing Check-In',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2022-05-20'),
            title: '3d - Usability Testing Review',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2022-05-23'),
            title: '3e - Digital Mockup',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2022-05-25'),
            title: '3p - Presentation',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2022-05-30'),
            title: '3web - Getting the Design Right',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2022-06-01'),
            title: '4a - Initial Poster and Pitch',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2022-06-03'),
            title: '4b - Final Poster and Pitch',
        },

        //
        // Office Hour Calendar Items
        //
        {
            type: 'officehour',
            dates: [
                DateTime.fromISO('2022-03-31'),
                DateTime.fromISO('2022-04-07'),
                DateTime.fromISO('2022-04-14'),
                DateTime.fromISO('2022-04-21'),
                DateTime.fromISO('2022-04-28'),
                DateTime.fromISO('2022-05-12'),
                DateTime.fromISO('2022-05-19'),
                DateTime.fromISO('2022-05-26'),
            ],
            title: 'Office Hour - Qisheng',
            timeAndLocation: OFFICE_HOUR_QISHENG_TIME_AND_LOCATION,
        },
        {
            type: 'officehour',
            dates: [
                DateTime.fromISO('2022-03-30'),
                DateTime.fromISO('2022-04-06'),
                DateTime.fromISO('2022-04-13'),
                DateTime.fromISO('2022-04-20'),
                DateTime.fromISO('2022-04-27'),
                DateTime.fromISO('2022-05-11'),
                DateTime.fromISO('2022-05-18'),
                DateTime.fromISO('2022-05-25'),
                DateTime.fromISO('2022-06-01'),
            ],
            title: 'Office Hour - Jesse',
            timeAndLocation: OFFICE_HOUR_JESSE_TIME_AND_LOCATION,
        },

        //
        // Away Calendar Items
        //
        {
            type: 'away',
            dates: [
                DateTime.fromISO('2022-04-27'),
                DateTime.fromISO('2022-04-28'),
                DateTime.fromISO('2022-04-29'),
            ],
            title: 'James Away',
        },
        {
            type: 'away',
            dates: [
                DateTime.fromISO('2022-05-02'),
                DateTime.fromISO('2022-05-03'),
                DateTime.fromISO('2022-05-04'),
                DateTime.fromISO('2022-05-05'),
                DateTime.fromISO('2022-05-06'),
            ],
            title: 'Jesse Away',
        },
        {
            type: 'away',
            dates: [
                DateTime.fromISO('2022-05-02'),
                DateTime.fromISO('2022-05-03'),
                DateTime.fromISO('2022-05-04'),
                DateTime.fromISO('2022-05-05'),
                DateTime.fromISO('2022-06-02'),
                DateTime.fromISO('2022-06-03'),
            ],
            title: 'Qisheng Away',
        },
        {
            type: 'away',
            dates: [
                DateTime.fromISO('2022-05-02'),
                DateTime.fromISO('2022-05-03'),
                DateTime.fromISO('2022-05-04'),
                DateTime.fromISO('2022-05-05'),
                DateTime.fromISO('2022-05-06'),
                DateTime.fromISO('2022-05-27'),
            ],
            title: 'Anant Away',
        },

        //
        // Holiday Calendar Items
        //
        {
            type: 'holiday',
            title: 'Memorial Day',
            date: DateTime.fromISO('2022-05-30')
        },

        //
        // Event Calendar Items
        //
        {
            type: 'event',
            title: 'Presentations',
            date: DateTime.fromISO('2022-05-05'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
        },
        {
            type: 'event',
            title: 'Presentations',
            date: DateTime.fromISO('2022-05-06'),
            timeAndLocations: SECTION_TIME_AND_LOCATIONS,
        },
        {
            type: 'event',
            title: 'Presentations',
            date: DateTime.fromISO('2022-05-26'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
        },
        {
            type: 'event',
            title: 'Presentations',
            date: DateTime.fromISO('2022-05-27'),
            timeAndLocations: SECTION_TIME_AND_LOCATIONS,
        },
        {
            type: 'event',
            title: 'Exam',
            date: DateTime.fromISO('2022-05-17'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
        },
        {
            type: 'event',
            title: 'Poster Session',
            date: DateTime.fromISO('2022-06-06'),
            timeAndLocation: POSTER_SESSION_TIME_AND_LOCATION,
        },

        //
    ];

    getCalendarItems(calendarDate: CalendarDate, itemType: string): CalendarItem[] {
        const store = useAppStore();

        return store.courseCalendar.calendarItems.filter(
            function(calendarItem) {
                if ('date' in calendarItem) {
                    if (!calendarItem.date.equals(calendarDate.date)) {
                        return false;
                    }
                } else {  // dates in calendarItem
                    if (!calendarItem.dates.some(itemDateCurrent => itemDateCurrent.equals(calendarDate.date))) {
                        return false;
                    }
                }

                return calendarItem.type == itemType;
            }
        )
    }
}
