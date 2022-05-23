import {
    DateTime,
    DateTimeFormatOptions,
} from 'luxon';

const DATE_FORMAT_OPTIONS = {
    month: 'long',
    day: 'numeric',
    weekday: 'long'
} as DateTimeFormatOptions;

export type link = string | null;
type dueDate = string | null;

function formatDateString(dateString: string): string {
    return DateTime.fromISO(dateString).toLocaleString(DATE_FORMAT_OPTIONS);
}

export class CourseInformationStore {
    //
    // Home
    //

    // Link to course Canvas
    linkCanvas: link = 'https://canvas.uw.edu/courses/1545349';

    // Link to course GitHub
    linkGitHub: link = 'https://github.com/uwcse440/web-cse440-22sp';

    // Link to university syllabus policies and guidelines
    linkUniversitySyllabusGuidelines: link = 'https://registrar.washington.edu/staffandfaculty/syllabus-guidelines/';

    //
    // Readings
    //
    linkReadingPersonalInformatics: link = 'https://doi.org/10.1145/1753326.1753409';
    linkReadingQuantifiedSelf: link = 'https://archive.wired.com/medtech/health/magazine/17-07/lbnp_knowthyself';

    //
    // Assignment 0
    //
    dueDateAssignment0: dueDate =
        'Uploaded 11:59pm ' + formatDateString('2022-03-31') + '.';
    linkCanvasAssignment0: link = 'https://canvas.uw.edu/courses/1545349/assignments/7252282';

    //
    // Assignment 1
    //
    dueDateAssignment1a: dueDate =
        'Uploaded 11:59pm ' + formatDateString('2022-03-31') + '.';
    linkCanvasAssignment1a: link = "https://canvas.uw.edu/courses/1545349/assignments/7291898";

    dueDateAssignment1b: dueDate =
        'Uploaded 11:59pm ' + formatDateString('2022-04-06') + '.';
    linkCanvasAssignment1b: link = 'https://canvas.uw.edu/courses/1545349/assignments/7298139';
    linkCanvasAssignment1b_revised: link = 'https://canvas.uw.edu/courses/1545349/assignments/7281788';

    dueDateAssignment1c: dueDate =
        'Uploaded 11:59pm ' + formatDateString('2022-04-11') + '.';
    linkCanvasAssignment1c: link = 'https://canvas.uw.edu/courses/1545349/assignments/7281798';

    //
    // Assignment 2
    //
    dueDateAssignment2a: dueDate =
        'Uploaded 11:59pm ' + formatDateString('2022-04-12') + '.';
    linkCanvasAssignment2a: link = null;

    dueDateAssignment2b: dueDate =
        'Uploaded 11:59pm ' + formatDateString('2022-04-14') + '.';
    linkCanvasAssignment2b: link = 'https://canvas.uw.edu/courses/1545349/assignments/7322551';

    dueDateAssignment2c: dueDate =
        'Uploaded 11:59pm ' + formatDateString('2022-04-18') + '.';
    linkCanvasAssignment2c: link = 'https://canvas.uw.edu/courses/1545349/assignments/7322552';

    dueDateAssignment2d: dueDate =
        'Uploaded 11:59pm ' + formatDateString('2022-04-21') + '.';
    linkCanvasAssignment2d: link = 'https://canvas.uw.edu/courses/1545349/assignments/7322554';

    dueDateAssignment2e: dueDate =
        'Uploaded 11:59pm ' + formatDateString('2022-04-25') + '.';
    linkCanvasAssignment2e: link = 'https://canvas.uw.edu/courses/1545349/assignments/7322556';

    dueDateAssignment2f: dueDate =
        'Uploaded 11:59pm ' + formatDateString('2022-04-27') + '.';
    linkCanvasAssignment2f: link = 'https://canvas.uw.edu/courses/1545349/assignments/7322558';
    linkCanvasAssignment2f_revised: link = 'https://canvas.uw.edu/courses/1545349/assignments/7322560';

    dueDateAssignment2g: dueDate =
        'Uploaded 11:59pm ' + formatDateString('2022-05-02') + '.';
    linkCanvasAssignment2g: link = 'https://canvas.uw.edu/courses/1545349/assignments/7322562';

    dueDateAssignment2p: dueDate =
        'Uploaded 11:59pm ' + formatDateString('2022-05-04') + '.';
    linkCanvasAssignment2p: link = 'https://canvas.uw.edu/courses/1545349/assignments/7322564';

    //
    // Assignment 3
    //
    dueDateAssignment3a: dueDate = 'Uploaded 11:59pm ' + formatDateString('2022-05-09') + '.';
    linkCanvasAssignment3a: link = 'https://canvas.uw.edu/courses/1545349/assignments/7332242';

    dueDateAssignment3b: dueDate = 'Uploaded 11:59pm ' + formatDateString('2022-05-10') + '.';

    dueDateAssignment3c: dueDate = 'Uploaded 11:59pm ' + formatDateString('2022-05-12') + '.';
    linkCanvasAssignment3c: link = 'https://canvas.uw.edu/courses/1545349/assignments/7332246';

    dueDateAssignment3d: dueDate = 'Uploaded 11:59pm ' + formatDateString('2022-05-19') + '.';
    linkCanvasAssignment3d: link = 'https://canvas.uw.edu/courses/1545349/assignments/7332247';

    dueDateAssignment3e: dueDate = 'Uploaded 11:59pm ' + formatDateString('2022-05-23') + '.';
    linkCanvasAssignment3e: link = 'https://canvas.uw.edu/courses/1545349/assignments/7332249';

    dueDateAssignment3p: dueDate = 'Uploaded 11:59pm ' + formatDateString('2022-05-25') + '.';
    linkCanvasAssignment3p: link = 'https://canvas.uw.edu/courses/1545349/assignments/7332250';

    //
    // Assignment 4
    //
    dueDateAssignment4web: dueDate = 'Uploaded 11:59pm ' + formatDateString('2022-05-30') + '.';
    linkCanvasAssignment4web: link = null;

    dueDateAssignment4web_final: dueDate = 'Uploaded 11:59pm ' + formatDateString('2022-05-31') + '.';
    linkCanvasAssignment4web_final: link = null;

    dueDateAssignment4poster: dueDate = 'Uploaded 11:59pm ' + formatDateString('2022-06-01') + '.';
    linkCanvasAssignment4poster: link = null;

    dueDateAssignment4poster_final: dueDate = 'Uploaded 11:59pm ' + formatDateString('2022-06-02') + '.';
    linkCanvasAssignment4poster_final: link = null;

    dueDateAssignment4poster_session: dueDate = '11:00 - 12:00 ' + formatDateString('2022-06-06') + ' in CSE Atrium.';

    //
    // Samples
    //
    projectSamples = [
        {
            name: 'BackTrack',
            link: 'https://courses.cs.washington.edu/courses/cse440/17au/projects/backtrack/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/90572599',
                '1c': 'https://canvas.uw.edu/files/90491667',
                '2b': 'https://canvas.uw.edu/files/90572601',
                '2c': 'https://canvas.uw.edu/files/90572602',
                '2d': 'https://canvas.uw.edu/files/90572603',
                '2e': 'https://canvas.uw.edu/files/90572605',
                '2f': 'https://canvas.uw.edu/files/90572607',
                '2g': 'https://canvas.uw.edu/files/90572609',
                '2h': 'https://canvas.uw.edu/files/90572615',
                '2p': 'https://canvas.uw.edu/files/90572616',
                '3a': 'https://canvas.uw.edu/files/90572617',
                '3b': 'https://canvas.uw.edu/files/90572618',
                '3c': 'https://canvas.uw.edu/files/90572620',
                '3d': 'https://canvas.uw.edu/files/90572623',
                '3e': 'https://canvas.uw.edu/files/90572627',
                '3p': 'https://canvas.uw.edu/files/90572631',
                '4poster': 'https://canvas.uw.edu/files/90572673'
            }
        },
        {
            name: 'BookWurm',
            link: 'https://courses.cs.washington.edu/courses/cse440/17wi/projects/bookwurm/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/90573012',
                '1c': 'https://canvas.uw.edu/files/90491675',
                '2b': 'https://canvas.uw.edu/files/90573013',
                '2c': 'https://canvas.uw.edu/files/90573014',
                '2d': 'https://canvas.uw.edu/files/90573015',
                '2e': 'https://canvas.uw.edu/files/90573016',
                '2f': 'https://canvas.uw.edu/files/90573020',
                '2g': 'https://canvas.uw.edu/files/90573021',
                '2h': 'https://canvas.uw.edu/files/90573023',
                '2p': 'https://canvas.uw.edu/files/90573026',
                '3a': 'https://canvas.uw.edu/files/90573027',
                '3c': 'https://canvas.uw.edu/files/90573028',
                '3d': 'https://canvas.uw.edu/files/90573030',
                '3e': 'https://canvas.uw.edu/files/90573032',
                '3p': 'https://canvas.uw.edu/files/90573035',
                '4poster': 'https://canvas.uw.edu/files/90573097'
            }
        },
        {
            name: 'Dash',
            link: 'https://courses.cs.washington.edu/courses/cse440/17wi/projects/dash/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/90573268',
                '1c': 'https://canvas.uw.edu/files/90491685',
                '2b': 'https://canvas.uw.edu/files/90573270',
                '2c': 'https://canvas.uw.edu/files/90573271',
                '2d': 'https://canvas.uw.edu/files/90573272',
                '2e': 'https://canvas.uw.edu/files/90573273',
                '2f': 'https://canvas.uw.edu/files/90573274',
                '2g': 'https://canvas.uw.edu/files/90573276',
                '2h': 'https://canvas.uw.edu/files/90573277',
                '2p': 'https://canvas.uw.edu/files/90573280',
                '3a': 'https://canvas.uw.edu/files/90573284',
                '3c': 'https://canvas.uw.edu/files/90573285',
                '3d': 'https://canvas.uw.edu/files/90573287',
                '3e': 'https://canvas.uw.edu/files/90573289',
                '3p': 'https://canvas.uw.edu/files/90573291',
                '4poster': 'https://canvas.uw.edu/files/90573299'
            }
        },
        {
            name: 'Hermes',
            link: 'https://courses.cs.washington.edu/courses/cse440/17au/projects/hermes/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/90573383',
                '1c': 'https://canvas.uw.edu/files/90491690',
                '2b': 'https://canvas.uw.edu/files/90573384',
                '2c': 'https://canvas.uw.edu/files/90573387',
                '2d': 'https://canvas.uw.edu/files/90573388',
                '2e': 'https://canvas.uw.edu/files/90573390',
                '2f': 'https://canvas.uw.edu/files/90573394',
                '2g': 'https://canvas.uw.edu/files/90573406',
                '2h': 'https://canvas.uw.edu/files/90573416',
                '2p': 'https://canvas.uw.edu/files/90573422',
                '3a': 'https://canvas.uw.edu/files/90573424',
                '3b': 'https://canvas.uw.edu/files/90573425',
                '3c': 'https://canvas.uw.edu/files/90573426',
                '3d': 'https://canvas.uw.edu/files/90573428',
                '3e': 'https://canvas.uw.edu/files/90573433',
                '3p': 'https://canvas.uw.edu/files/90573435',
                '4poster': 'https://canvas.uw.edu/files/90573441'
            }
        },
        {
            name: 'Jasper',
            link: 'https://courses.cs.washington.edu/courses/cse440/17wi/projects/jasper/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/90573513',
                '1c': 'https://canvas.uw.edu/files/90491701',
                '2b': 'https://canvas.uw.edu/files/90573515',
                '2c': 'https://canvas.uw.edu/files/90573516',
                '2d': 'https://canvas.uw.edu/files/90573518',
                '2e': 'https://canvas.uw.edu/files/90573520',
                '2f': 'https://canvas.uw.edu/files/90573529',
                '2g': 'https://canvas.uw.edu/files/90573531',
                '2h': 'https://canvas.uw.edu/files/90573532',
                '2p': 'https://canvas.uw.edu/files/90573534',
                '3a': 'https://canvas.uw.edu/files/90573535',
                '3c': 'https://canvas.uw.edu/files/90573536',
                '3d': 'https://canvas.uw.edu/files/90573537',
                '3e': 'https://canvas.uw.edu/files/90573540',
                '3p': 'https://canvas.uw.edu/files/90573544',
                '4poster': 'https://canvas.uw.edu/files/90573549'
            }
        },
        {
            name: 'Laundr',
            link: 'https://courses.cs.washington.edu/courses/cse440/19wi/assets/projects/laundr/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/90578149',
                '1c': 'https://canvas.uw.edu/files/90491707',
                '2b': 'https://canvas.uw.edu/files/90578151',
                '2c': 'https://canvas.uw.edu/files/90578154',
                '2d': 'https://canvas.uw.edu/files/90578155',
                '2e': 'https://canvas.uw.edu/files/90578157',
                '2f': 'https://canvas.uw.edu/files/90578161',
                '2g': 'https://canvas.uw.edu/files/90578164',
                '2h': 'https://canvas.uw.edu/files/90578171',
                '2p': 'https://canvas.uw.edu/files/90578177',
                '3a': 'https://canvas.uw.edu/files/90577984',
                '3c': 'https://canvas.uw.edu/files/90578197',
                '3d': 'https://canvas.uw.edu/files/90578199',
                '3e': 'https://canvas.uw.edu/files/90578140',
                '3p': 'https://canvas.uw.edu/files/90578141',
                '4poster': 'https://canvas.uw.edu/files/90578147'
            }
        },
        {
            name: 'notE',
            link: 'https://courses.cs.washington.edu/courses/cse440/19wi/assets/projects/note/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/90578221',
                '1c': 'https://canvas.uw.edu/files/90491732',
                '2b': 'https://canvas.uw.edu/files/90578222',
                '2c': 'https://canvas.uw.edu/files/90578223',
                '2d': 'https://canvas.uw.edu/files/90578224',
                '2e': 'https://canvas.uw.edu/files/90578225',
                '2f': 'https://canvas.uw.edu/files/90578226',
                '2g': 'https://canvas.uw.edu/files/90578228',
                '2h': 'https://canvas.uw.edu/files/90578230',
                '2p': 'https://canvas.uw.edu/files/90578237',
                '3a': 'https://canvas.uw.edu/files/90578243',
                '3c': 'https://canvas.uw.edu/files/90578246',
                '3d': 'https://canvas.uw.edu/files/90578250',
                '3e': 'https://canvas.uw.edu/files/90578252',
                '3p': 'https://canvas.uw.edu/files/90578255',
            }
        },
        {
            name: 'Pawsitive',
            link: 'https://courses.cs.washington.edu/courses/cse440/19wi/assets/projects/pawsitive/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/90578444',
                '1c': 'https://canvas.uw.edu/files/90491738',
                '2b': 'https://canvas.uw.edu/files/90578445',
                '2c': 'https://canvas.uw.edu/files/90578446',
                '2d': 'https://canvas.uw.edu/files/90578447',
                '2e': 'https://canvas.uw.edu/files/90578448',
                '2f': 'https://canvas.uw.edu/files/90578452',
                '2g': 'https://canvas.uw.edu/files/90578453',
                '2h': 'https://canvas.uw.edu/files/90578650',
                '2p': 'https://canvas.uw.edu/files/90578722',
                '3a': 'https://canvas.uw.edu/files/90578512',
                '3c': 'https://canvas.uw.edu/files/90578682',
                '3d': 'https://canvas.uw.edu/files/90578561',
                '3e': 'https://canvas.uw.edu/files/90578570',
                '3p': 'https://canvas.uw.edu/files/90578781',
                '4poster': 'https://canvas.uw.edu/files/90578620'
            }
        },
        {
            name: 'Pilltender',
            link: 'https://courses.cs.washington.edu/courses/cse440/17au/projects/pilltender/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/90578817',
                '1c': 'https://canvas.uw.edu/files/90491745',
                '2b': 'https://canvas.uw.edu/files/90578818',
                '2c': 'https://canvas.uw.edu/files/90578819',
                '2d': 'https://canvas.uw.edu/files/90578823',
                '2e': 'https://canvas.uw.edu/files/90578826',
                '2f': 'https://canvas.uw.edu/files/90578864',
                '2g': 'https://canvas.uw.edu/files/90578844',
                '2h': 'https://canvas.uw.edu/files/90578846',
                '2p': 'https://canvas.uw.edu/files/90578848',
                '3a': 'https://canvas.uw.edu/files/90578849',
                '3b': 'https://canvas.uw.edu/files/90578850',
                '3c': 'https://canvas.uw.edu/files/90579291',
                '3d': 'https://canvas.uw.edu/files/90578872',
                '3e': 'https://canvas.uw.edu/files/90578873',
                '3p': 'https://canvas.uw.edu/files/90578874',
                '4poster': 'https://canvas.uw.edu/files/90578909'
            }
        },
        {
            name: 'SEEK',
            link: 'https://courses.cs.washington.edu/courses/cse440/19wi/assets/projects/seek/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/90579301',
                '1c': 'https://canvas.uw.edu/files/90491755',
                '2b': 'https://canvas.uw.edu/files/90579302',
                '2c': 'https://canvas.uw.edu/files/90579303',
                '2d': 'https://canvas.uw.edu/files/90579305',
                '2e': 'https://canvas.uw.edu/files/90579306',
                '2f': 'https://canvas.uw.edu/files/90579308',
                '2g': 'https://canvas.uw.edu/files/90579309',
                '2h': 'https://canvas.uw.edu/files/90579310',
                '2p': 'https://canvas.uw.edu/files/90579311',
                '3a': 'https://canvas.uw.edu/files/90579314',
                '3c': 'https://canvas.uw.edu/files/90579315',
                '3d': 'https://canvas.uw.edu/files/90579320',
                '3e': 'https://canvas.uw.edu/files/90579321',
                '3p': 'https://canvas.uw.edu/files/90579323',
                '4poster': 'https://canvas.uw.edu/files/90579326'
            }
        },
        {
            name: 'SimPark',
            link: 'https://courses.cs.washington.edu/courses/cse440/17au/projects/simpark/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/90579344',
                '1c': 'https://canvas.uw.edu/files/90491761',
                '2b': 'https://canvas.uw.edu/files/90579345',
                '2c': 'https://canvas.uw.edu/files/90579347',
                '2d': 'https://canvas.uw.edu/files/90579348',
                '2e': 'https://canvas.uw.edu/files/90579349',
                '2f': 'https://canvas.uw.edu/files/90579354',
                '2g': 'https://canvas.uw.edu/files/90579355',
                '2h': 'https://canvas.uw.edu/files/90579358',
                '2p': 'https://canvas.uw.edu/files/90579360',
                '3a': 'https://canvas.uw.edu/files/90579361',
                '3b': 'https://canvas.uw.edu/files/90579363',
                '3c': 'https://canvas.uw.edu/files/90579365',
                '3d': 'https://canvas.uw.edu/files/90579371',
                '3e': 'https://canvas.uw.edu/files/90579372',
                '3p': 'https://canvas.uw.edu/files/90579377',
                '4poster': 'https://canvas.uw.edu/files/90579394'
            }
        },
        {
            name: 'Wishing Well',
            link: 'https://courses.cs.washington.edu/courses/cse440/17wi/projects/wishingwell/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/90579417',
                '1c': 'https://canvas.uw.edu/files/90491772',
                '2b': 'https://canvas.uw.edu/files/90579418',
                '2c': 'https://canvas.uw.edu/files/90579421',
                '2d': 'https://canvas.uw.edu/files/90579422',
                '2e': 'https://canvas.uw.edu/files/90579423',
                '2f': 'https://canvas.uw.edu/files/90579425',
                '2g': 'https://canvas.uw.edu/files/90579427',
                '2h': 'https://canvas.uw.edu/files/90579428',
                '2p': 'https://canvas.uw.edu/files/90579430',
                '3a': 'https://canvas.uw.edu/files/90579432',
                '3c': 'https://canvas.uw.edu/files/90579433',
                '3d': 'https://canvas.uw.edu/files/90579436',
                '3e': 'https://canvas.uw.edu/files/90579437',
                '3p': 'https://canvas.uw.edu/files/90579441',
                '4poster': 'https://canvas.uw.edu/files/90579444'
            }
        }
    ]

    // // Link regarding accessible presentations
    // // linkAccessiblePresentations: link = 'https://interactions.acm.org/archive/view/july-august-2017/making-your-presentation-accessible'
    //
    // //
    // // Readings
    // //
    //
    // // Link to the Canvas discussion forum
    // linkDiscussion: link = "https://canvas.uw.edu/courses/1519807/discussion_topics";
    //
    // // Links for the Visions of HCI discussion
    // linkVisionsOrganization: link = "https://docs.google.com/document/d/1p0jUK0ONrz8OuhXGqjHzEg-cte4vCDH4pxCIKSu9rek/edit?usp=sharing";
    // linkVisionsSlides: link = "https://docs.google.com/presentation/d/1q8U1QfW_n5XaKPjEyquUElOgNUD-RSyGVTWZgLT5YeE/edit?usp=sharing";
    //
    // //
    // // Project
    // //
    //
    // assignmentDateProjectInClassProposalFinalization: assignmentDate =
    //     DateTime.fromISO('2022-01-20').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);
    // assignmentDateDueProjectProposal: assignmentDate =
    //     '11:59pm ' + DateTime.fromISO('2022-01-23').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);
    // assignmentDateDueProjectMilestone1: assignmentDate =
    //     '11:59pm ' + DateTime.fromISO('2022-02-07').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT) +
    //     ' for in-class presentations ' + DateTime.fromISO('2022-02-08').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT) +
    //     ' and ' + DateTime.fromISO('2022-02-10').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);
    // assignmentDateDueProjectMilestone2: assignmentDate =
    //     '11:59pm ' + DateTime.fromISO('2022-02-28').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT) +
    //     ' for in-class presentations ' + DateTime.fromISO('2022-03-01').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT) +
    //     ' and ' + DateTime.fromISO('2022-03-03').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);
    // assignmentDateDueProjectReport: assignmentDate =
    //     '11:59pm ' + DateTime.fromISO('2022-03-17').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);
    //
    // // Link to a Canvas thread of potential project proposal ideas
    // linkProjectProposalIdeas: link = "https://canvas.uw.edu/courses/1519807/discussion_topics/6939656";
    // // Link to a Canvas folder of prior project proposals
    // linkProjectProposalSamples: link = "https://canvas.uw.edu/courses/1519807/files/folder/project%20samples";
    // // Link to the current CHI format to use for report submission
    // linkProjectCHIFormat: link = "https://chi2022.acm.org/for-authors/presenting/papers/chi-publication-formats/";
    //
    // // Link to shared document for project proposals
    // linkProjectProposalGoogleDoc: link = "https://docs.google.com/document/d/1OB4rPy4x7OAfy1HT2tnXLqplIEsZQ2Odx_DZPlME0Tk/edit?usp=sharing";
    //
    // // Links to submit project components
    // linkSubmitProjectProposal: link = "https://canvas.uw.edu/courses/1519807/assignments/7075561";
    // linkSubmitProjectMilestone1Document: link = "https://canvas.uw.edu/courses/1519807/assignments/7099160";
    // linkSubmitProjectMilestone1Slides: link = "https://canvas.uw.edu/courses/1519807/assignments/7103427";
    // linkSignupProjectMilestone1Presentation: link = "https://docs.google.com/document/d/1QK6ZglvPnWBGY5pCbLLHOEhxt19sx2CF-TTGXxn_v3c/edit?usp=sharing";
    // linkSubmitProjectMilestone2: link = "https://canvas.uw.edu/courses/1519807/assignments/7099249";
    // linkSignupProjectMilestone2Presentation: link = "https://docs.google.com/document/d/1LPryCVy4vjscDFb6WM6yJUX0kHjOm9TkvsPQ8Q3917s/edit?usp=sharing";
    // linkSubmitProjectReport: link = "https://canvas.uw.edu/courses/1519807/assignments/7170960";
    //
    // // Reading on paper writing
    // readingWobbrockPaperWriting: Reading = {
    //     authorText: 'Jacob O. Wobbrock',
    //     title: 'Catchy Titles are Good: But Avoid Being Cute',
    //     publicationText: '2015',
    //     link: 'https://faculty.washington.edu/wobbrock/pubs/Wobbrock-2015.pdf'
    // };
    //
    // //
    // // Statistics Lab
    // //
    //
    // assignmentDateAvailableStatisticsLab: assignmentDate =
    //     '11:59pm ' + DateTime.fromISO('2022-02-17').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);
    // assignmentDateDueStatisticsLab: assignmentDate =
    //     '11:59pm ' + DateTime.fromISO('2022-03-06').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);
    //
    // linkStatisticsLab: link = 'https://canvas.uw.edu/files/88095585/download?download_frd=1';
    // linkSubmitStatisticsLab: link = 'https://canvas.uw.edu/courses/1519807/assignments/7128609';
    //
    // //
    // // Exam
    // //
    //
    // assignmentDateAvailableExam: link =
    //     'by 11:59pm ' + DateTime.fromISO('2022-03-10').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);
    // assignmentDateDueExam: link =
    //     'by 11:59pm ' + DateTime.fromISO('2022-03-14').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);
    //
    // linkSubmitExam: link = "https://canvas.uw.edu/courses/1519807/assignments/7170957"
}
