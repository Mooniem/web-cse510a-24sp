import { link } from 'src/stores/CourseInformationStore';
import { useAppStore } from 'src/stores/AppStoreProvider';

import { DateTime } from 'luxon';

type TimeAndLocation = string;

const LECTURE_TIME_AND_LOCATION: TimeAndLocation = '06:30 - 09:20 | CSE2 G10';
// const SECTION_TIME_AND_LOCATIONS: TimeAndLocation[] = [
//     '10:30 - 11:20 | MGH 058',
//     '11:30 - 12:20 | MGH 058',
//     '12:30 - 1:20 | MGH 058',
//     '1:30 - 2:20 | MGH 058',
// ]
const SECTION_TIME_AND_LOCATIONS_WITHOUT_D: TimeAndLocation[] = [
    '10:30 - 11:20 | MGH 058',
    '11:30 - 12:20 | MGH 058',
    '12:30 - 1:20 | MGH 058',
]
// const SECTION_TIME_AND_LOCATIONS_RESEARCH_SYMPOSIUM: TimeAndLocation[] = [
//     '10:30 - 11:20 | MGH 058',
//     '11:30 - 12:20 | MGH 058',
//     '12:30 - 1:20 | DEN 111',
//     '1:30 - 2:20 | DEN 110',
// ]
// const EXAM_REVIEW_TIME_AND_LOCATION: TimeAndLocation = '6:00 - 6:50 | Zoom';
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
        start: DateTime.fromFormat('Mon 2024-03-25', 'EEE yyyy-MM-dd'),  // Should be a Monday
        end:   DateTime.fromFormat('Fri 2024-05-24', 'EEE yyyy-MM-dd')   // Should be a Friday
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
                    date => ['Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat','Sun'].includes(date.weekdayShort)
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
            date: DateTime.fromISO('2024-03-28'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'Introduction and Overview',
            slides: 'NA',
            video: 'NA',
        },
        {
            type: 'lecture',
            date: DateTime.fromISO('2024-04-04'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'Framing the problem',
            slides: 'NA',
            video: 'NA',
        },
        {
            type: 'lecture',
            date: DateTime.fromISO('2024-04-11'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'Exploring the solution space',
            slides: 'NA',
            video: 'NA',
        },
        {
            type: 'lecture',
            date: DateTime.fromISO('2024-04-18'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'Finding a good solution',
            slides: 'https://canvas.uw.edu/files/90865835/',
            video: 'https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=aacc0966-8de9-4e87-99ca-ae750145f644',
        },
        {
            type: 'lecture',
            date: DateTime.fromISO('2024-04-25'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'Finding a good solution',
            slides: 'NA',
            video: 'NA',
        },
        {
            type: 'lecture',
            date: DateTime.fromISO('2024-05-02'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'Refining the solution',
            slides: 'NA',
            video: 'NA',
        },
        {
            type: 'lecture',
            date: DateTime.fromISO('2024-05-09'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'Refining the solution',
            slides: 'NA',
            video: 'NA',
        },
        {
            type: 'lecture',
            date: DateTime.fromISO('2024-05-16'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'Refining the solution',
            slides: 'NA',
            video: 'NA',
        },
        {
            type: 'lecture',
            date: DateTime.fromISO('2024-05-23'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
            title: 'Evaluating the solution',
            slides: 'NA',
            video: 'NA',
        },
        //
        // Group Assignments Calendar Items (mark studie as group assignment)
        //
        // {
        //     type: 'studio',
        //     date: DateTime.fromISO('2024-04-04'),
        //     timeAndLocation: LECTURE_TIME_AND_LOCATION,
        //     title: 'Introduction to Critique',
        //     slides: 'https://canvas.uw.edu/files/90565435/',
        //     video: 'https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=8cb846a3-0342-49be-a159-ae71001d75be',
        // },
        // {
        //     type: 'studio',
        //     date: DateTime.fromISO('2024-04-11'),
        //     timeAndLocation: LECTURE_TIME_AND_LOCATION,
        //     title: 'Studio',
        //     video: 'https://uw.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=7f5351c4-0251-442c-abbb-ae8b00f135e0',
        // },
        // // {
        //     type: 'studio',
        //     dates: [
        //         DateTime.fromISO('2024-04-04'),
        //         DateTime.fromISO('2024-04-11'),
        //         DateTime.fromISO('2024-04-18'),
        //         DateTime.fromISO('2024-04-25'),
        //         DateTime.fromISO('2024-05-02'),
        //         DateTime.fromISO('2024-05-09'),
        //         DateTime.fromISO('2024-05-16'),
        //         DateTime.fromISO('2024-05-23'),
        //     ],
        //     timeAndLocations: SECTION_TIME_AND_LOCATIONS,
        //     title: 'Studio',
        // },
        // {
        //     type: 'studio',
        //     dates: [
        //         DateTime.fromISO('2024-05-20'),
        //     ],
        //     timeAndLocations: SECTION_TIME_AND_LOCATIONS_RESEARCH_SYMPOSIUM,
        //     title: 'Studio',
        // },
        // {
        //     type: 'studio',
        //     dates: [
        //         DateTime.fromISO('2024-05-31'),
        //         DateTime.fromISO('2024-06-02'),
        //     ],
        //     timeAndLocation: LECTURE_TIME_AND_LOCATION,
        //     title: 'Studio',
        // },

        //
        // Exam Review Calendar Items
        //
        // {
        //     type: 'studio',
        //     dates: [
        //         DateTime.fromISO('2024-05-16'),
        //     ],
        //     timeAndLocation: EXAM_REVIEW_TIME_AND_LOCATION,
        //     title: 'Exam Q&A',
        //     slides: 'https://canvas.uw.edu/files/92053501/',
        // },

        //
        // Assignment Calendar Items
        //
        {
            type: 'assignment',
            date: DateTime.fromISO('2024-04-08'),
            title: 'GA1 - Project proposal ',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2024-04-15'),
            title: 'GA2 - Sketches',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2024-04-22'),
            title: 'GA3 - Personas and updated project proposal',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2024-04-29'),
            title: 'GA4 - Unintended consequences',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2024-05-06'),
            title: 'GA5 - Bad design hunt',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2024-05-13'),
            title: 'GA6 - Paper prototype and evaluation ',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2024-05-20'),
            title: 'GA7 - Initial high-fidelity prototype',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2024-05-27'),
            title: 'GA8 - Final high-fidelity prototype',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2024-03-31'),
            title: 'IA1 - Intro and motivation ',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2024-04-24'),
            title: 'IA2 - Design process',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2024-05-15'),
            title: 'IA3 - Design critique',
        },
        {
            type: 'assignment',
            date: DateTime.fromISO('2024-05-29'),
            title: 'IA4 - Testing',
        },

        //
        // Office Hour Calendar Items
        //
        // {
        //     type: 'officehour',
        //     dates: [
        //         DateTime.fromISO('2024-03-31'),
        //         DateTime.fromISO('2024-04-07'),
        //         DateTime.fromISO('2024-04-14'),
        //         DateTime.fromISO('2024-04-21'),
        //         DateTime.fromISO('2024-04-28'),
        //         DateTime.fromISO('2024-05-12'),
        //         DateTime.fromISO('2024-05-19'),
        //         DateTime.fromISO('2024-05-26'),
        //     ],
        //     title: 'Office Hour - Qisheng',
        //     timeAndLocation: OFFICE_HOUR_QISHENG_TIME_AND_LOCATION,
        // },
        // {
        //     type: 'officehour',
        //     dates: [
        //         DateTime.fromISO('2024-03-30'),
        //         DateTime.fromISO('2024-04-06'),
        //         DateTime.fromISO('2024-04-13'),
        //         DateTime.fromISO('2024-04-20'),
        //         DateTime.fromISO('2024-04-27'),
        //         DateTime.fromISO('2024-05-11'),
        //         DateTime.fromISO('2024-05-18'),
        //         DateTime.fromISO('2024-05-25'),
        //         DateTime.fromISO('2024-06-01'),
        //     ],
        //     title: 'Office Hour - Jesse',
        //     timeAndLocation: OFFICE_HOUR_JESSE_TIME_AND_LOCATION,
        // },

        //
        // Away Calendar Items
        //
        // {
        //     type: 'away',
        //     dates: [
        //         DateTime.fromISO('2024-04-27'),
        //         DateTime.fromISO('2024-04-28'),
        //         DateTime.fromISO('2024-04-29'),
        //     ],
        //     title: 'James Away',
        // },
        // {
        //     type: 'away',
        //     dates: [
        //         DateTime.fromISO('2024-05-02'),
        //         DateTime.fromISO('2024-05-03'),
        //         DateTime.fromISO('2024-05-04'),
        //         DateTime.fromISO('2024-05-05'),
        //         DateTime.fromISO('2024-05-06'),
        //         DateTime.fromISO('2024-05-31'),
        //     ],
        //     title: 'Jesse Away',
        // },
        // {
        //     type: 'away',
        //     dates: [
        //         DateTime.fromISO('2024-05-02'),
        //         DateTime.fromISO('2024-05-03'),
        //         DateTime.fromISO('2024-05-04'),
        //         DateTime.fromISO('2024-05-05'),
        //         DateTime.fromISO('2024-06-02'),
        //         DateTime.fromISO('2024-06-03'),
        //     ],
        //     title: 'Qisheng Away',
        // },
        // {
        //     type: 'away',
        //     dates: [
        //         DateTime.fromISO('2024-05-02'),
        //         DateTime.fromISO('2024-05-03'),
        //         DateTime.fromISO('2024-05-04'),
        //         DateTime.fromISO('2024-05-27'),
        //     ],
        //     title: 'Anant Away',
        // },

        //
        // Holiday Calendar Items
        //
        {
            type: 'holiday',
            title: 'Memorial Day',
            date: DateTime.fromISO('2023-05-27')
        },

        //
        // Event Calendar Items
        //
        {
            type: 'event',
            title: 'Presentations',
            date: DateTime.fromISO('2023-05-05'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
        },
        {
            type: 'event',
            title: 'Presentations',
            date: DateTime.fromISO('2023-05-06'),
            timeAndLocations: SECTION_TIME_AND_LOCATIONS_WITHOUT_D,
        },
        {
            type: 'event',
            title: 'Presentations',
            date: DateTime.fromISO('2023-05-26'),
            timeAndLocation: LECTURE_TIME_AND_LOCATION,
        },
        {
            type: 'event',
            title: 'Presentations',
            date: DateTime.fromISO('2023-05-27'),
            timeAndLocations: SECTION_TIME_AND_LOCATIONS_WITHOUT_D,
        },
        // {
        //     type: 'event',
        //     title: 'Exam',
        //     date: DateTime.fromISO('2024-05-17'),
        //     timeAndLocation: LECTURE_TIME_AND_LOCATION,
        // },
        {
            type: 'event',
            title: 'Poster Session',
            date: DateTime.fromISO('2023-06-06'),
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
