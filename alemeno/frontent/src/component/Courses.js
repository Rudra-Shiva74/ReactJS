// courseData.js
export const Courses = [
    {
        id: 1,
        name: "Introduction to React Native",
        instructor: "John Doe",
        description: "Learn the basics of React Native development and build your first mobile app.",
        enrollmentStatus: "Open",
        thumbnail: "reactnative.jpg",
        duration: "8 weeks",
        schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
        location: "Online",
        prerequisites: [
            "Basic JavaScript knowledge",
            "Familiarity with React"
        ],
        syllabus: [
            {
                week: 1,
                topic: "Introduction to React Native",
                content: "Overview of React Native, setting up your development environment."
            },
            {
                week: 2,
                topic: "Building Your First App",
                content: "Creating a simple mobile app using React Native components."
            }, {
                week: 3,
                topic: "Building Your First App",
                content: "Creating a simple mobile app using React Native components."
            }
        ]
    },
    {
        id: 2,
        name: "Advanced React Native",
        instructor: "Jane Smith",
        description: "Take your React Native skills to the next level with advanced concepts.",
        enrollmentStatus: "Closed",
        thumbnail: "advancereactnative.jpg",
        duration: "6 weeks",
        schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
        location: "Online",
        prerequisites: [
            "Introduction to React Native",
            "Intermediate JavaScript knowledge"
        ],
        syllabus: [
            {
                week: 1,
                topic: "Advanced Components",
                content: "Learn about advanced components and state management."
            },
            {
                week: 2,
                topic: "Performance Optimization",
                content: "Techniques to optimize performance in React Native apps."
            }
        ]
    },
    {
        id: 3,
        name: "React Native in Practice",
        instructor: "Emily Davis",
        description: "Apply your React Native knowledge in real-world projects.",
        enrollmentStatus: "In Progress",
        thumbnail: "NativeinPractice.png",
        duration: "10 weeks",
        schedule: "Fridays, 5:00 PM - 7:00 PM",
        location: "Online",
        prerequisites: [
            "Advanced React Native",
            "Experience with React Native projects"
        ],
        syllabus: [
            {
                week: 1,
                topic: "Project Setup",
                content: "Setting up the project and development environment."
            },
            {
                week: 2,
                topic: "Building Features",
                content: "Developing features based on project requirements."
            }
        ]
    },
    {
        id: 4,
        name: "React Native for Beginners",
        instructor: "Alice Johnson",
        description: "Start your journey with React Native and build simple apps.",
        enrollmentStatus: "Open",
        thumbnail: "ReactNativeBeginners.jpg",
        duration: "5 weeks",
        schedule: "Wednesdays and Fridays, 7:00 PM - 8:30 PM",
        location: "Online",
        prerequisites: [
            "Basic JavaScript knowledge"
        ],
        syllabus: [
            {
                week: 1,
                topic: "Getting Started",
                content: "Introduction to React Native and setup."
            },
            {
                week: 2,
                topic: "Basic Components",
                content: "Using basic React Native components."
            }
        ]
    },
    {
        id: 5,
        name: "Mastering React Native",
        instructor: "Robert Brown",
        description: "Become a master at React Native by diving deep into its core concepts.",
        enrollmentStatus: "Open",
        thumbnail: "MasteringReactNative.jpg",
        duration: "12 weeks",
        schedule: "Mondays and Thursdays, 6:30 PM - 8:30 PM",
        location: "Online",
        prerequisites: [
            "Advanced React Native",
            "Intermediate JavaScript knowledge"
        ],
        syllabus: [
            {
                week: 1,
                topic: "Advanced Setup",
                content: "Setting up a robust development environment."
            },
            {
                week: 2,
                topic: "State Management",
                content: "Managing state efficiently in large applications."
            }
        ]
    },
    {
        id: 6,
        name: "React Native UI/UX Design",
        instructor: "Laura White",
        description: "Learn how to design beautiful and user-friendly interfaces in React Native.",
        enrollmentStatus: "Closed",
        thumbnail: "ReactNativeUIUXDesign.jpg",
        duration: "8 weeks",
        schedule: "Tuesdays and Fridays, 5:00 PM - 7:00 PM",
        location: "Online",
        prerequisites: [
            "Basic React Native knowledge",
            "Basic design principles"
        ],
        syllabus: [
            {
                week: 1,
                topic: "Introduction to UI/UX",
                content: "Basic principles of UI/UX design."
            },
            {
                week: 2,
                topic: "Designing with React Native",
                content: "Tools and techniques for designing React Native apps."
            }
        ]
    },
    {
        id: 7,
        name: "React Native with Redux",
        instructor: "Daniel Green",
        description: "Integrate Redux for state management in your React Native apps.",
        enrollmentStatus: "Open",
        thumbnail: "ReactNativewithRedux.png",
        duration: "6 weeks",
        schedule: "Wednesdays and Saturdays, 6:00 PM - 8:00 PM",
        location: "Online",
        prerequisites: [
            "Intermediate React Native knowledge",
            "Basic Redux knowledge"
        ],
        syllabus: [
            {
                week: 1,
                topic: "Introduction to Redux",
                content: "Setting up Redux in a React Native project."
            },
            {
                week: 2,
                topic: "Advanced Redux",
                content: "Advanced state management techniques."
            }
        ]
    },
    {
        id: 8,
        name: "React Native with TypeScript",
        instructor: "Sophia Hall",
        description: "Enhance your React Native development with TypeScript.",
        enrollmentStatus: "Closed",
        thumbnail: "ReactNativewithTypeScript.png",
        duration: "7 weeks",
        schedule: "Mondays and Thursdays, 7:00 PM - 8:30 PM",
        location: "Online",
        prerequisites: [
            "Basic React Native knowledge",
            "Basic TypeScript knowledge"
        ],
        syllabus: [
            {
                week: 1,
                topic: "TypeScript Basics",
                content: "Introduction to TypeScript and its benefits."
            },
            {
                week: 2,
                topic: "Using TypeScript with React Native",
                content: "Setting up and using TypeScript in a React Native project."
            }
        ]
    },
    {
        id: 9,
        name: "Testing React Native Apps",
        instructor: "James Wilson",
        description: "Learn how to test your React Native applications effectively.",
        enrollmentStatus: "Open",
        thumbnail: "TestingReactNativeApps.png",
        duration: "5 weeks",
        schedule: "Fridays, 6:00 PM - 8:00 PM",
        location: "Online",
        prerequisites: [
            "Basic React Native knowledge",
            "Basic testing knowledge"
        ],
        syllabus: [
            {
                week: 1,
                topic: "Introduction to Testing",
                content: "Overview of testing and tools."
            },
            {
                week: 2,
                topic: "Unit Testing",
                content: "Writing and running unit tests."
            }
        ]
    },
    {
        id: 10,
        name: "React Native Animations",
        instructor: "Emma Martinez",
        description: "Create smooth and engaging animations in React Native.",
        enrollmentStatus: "Open",
        thumbnail: "ReactNativeAnimations.jpg",
        duration: "4 weeks",
        schedule: "Tuesdays, 7:00 PM - 9:00 PM",
        location: "Online",
        prerequisites: [
            "Basic React Native knowledge",
            "Basic animation principles"
        ],
        syllabus: [
            {
                week: 1,
                topic: "Introduction to Animations",
                content: "Basics of animations in React Native."
            },
            {
                week: 2,
                topic: "Advanced Animations",
                content: "Creating complex animations."
            }
        ]
    },
    {
        id: 11,
        name: "React Native Navigation",
        instructor: "William Moore",
        description: "Master navigation in React Native applications.",
        enrollmentStatus: "In Progress",
        thumbnail: "ReactNativeNavigation.png",
        duration: "6 weeks",
        schedule: "Thursdays and Sundays, 5:00 PM - 7:00 PM",
        location: "Online",
        prerequisites: [
            "Basic React Native knowledge",
            "Basic navigation principles"
        ],
        syllabus: [
            {
                week: 1,
                topic: "Introduction to Navigation",
                content: "Setting up navigation in React Native."
            },
            {
                week: 2,
                topic: "Advanced Navigation",
                content: "Implementing complex navigation flows."
            }
        ]
    },
    {
        id: 12,
        name: "PHP for Beginners",
        instructor: "Michael Johnson",
        description: "Learn the basics of PHP programming language.",
        enrollmentStatus: "Open",
        thumbnail: "php.image.here",
        duration: "6 weeks",
        schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
        location: "Online",
        prerequisites: [
            "Basic programming knowledge"
        ],
        syllabus: [
            {
                week: 1,
                topic: "Introduction to PHP",
                content: "Overview of PHP and setting up the environment."
            },
            {
                week: 2,
                topic: "Basic Syntax and Variables",
                content: "Understanding PHP syntax and variables."
            }
        ]
    },
    {
        id: 13,
        name: "Java Programming Fundamentals",
        instructor: "Jennifer Lee",
        description: "Learn the fundamentals of Java programming language.",
        enrollmentStatus: "Open",
        thumbnail: "java.image.here",
        duration: "8 weeks",
        schedule: "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
        location: "Online",
        prerequisites: [
            "Basic programming knowledge"
        ],
        syllabus: [
            {
                week: 1,
                topic: "Introduction to Java",
                content: "Overview of Java and setting up the environment."
            },
            {
                week: 2,
                topic: "Variables and Data Types",
                content: "Understanding variables, data types, and operators in Java."
            }
        ]
    },
    {
        id: 14,
        name: "C Programming",
        instructor: "Robert Johnson",
        description: "Learn the C programming language from scratch.",
        enrollmentStatus: "Open",
        thumbnail: "c.image.here",
        duration: "10 weeks",
        schedule: "Wednesdays and Fridays, 6:00 PM - 8:00 PM",
        location: "Online",
        prerequisites: [
            "Basic programming knowledge"
        ],
        syllabus: [
            {
                week: 1,
                topic: "Introduction to C",
                content: "Overview of C and setting up the development environment."
            },
            {
                week: 2,
                topic: "Basic Syntax and Data Types",
                content: "Understanding basic syntax and data types in C."
            }
        ]
    },
    {
        id: 15,
        name: "C++ Programming",
        instructor: "Emily Brown",
        description: "Learn the C++ programming language and object-oriented programming concepts.",
        enrollmentStatus: "Closed",
        thumbnail: "cppprograming.png",
        duration: "12 weeks",
        schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
        location: "Online",
        prerequisites: [
            "Basic programming knowledge"
        ],
        syllabus: [
            {
                week: 1,
                topic: "Introduction to C++",
                content: "Overview of C++ and setting up the development environment."
            },
            {
                week: 2,
                topic: "Object-Oriented Programming",
                content: "Understanding classes, objects, and inheritance."
            }
        ]
    },
    {
        id: 16,
        name: "JavaScript Fundamentals",
        instructor: "David Wilson",
        description: "Learn the fundamentals of JavaScript programming language.",
        enrollmentStatus: "In Progress",
        thumbnail: "javascript.image.here",
        duration: "8 weeks",
        schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
        location: "Online",
        prerequisites: [
            "Basic programming knowledge"
        ],
        syllabus: [
            {
                week: 1,
                topic: "Introduction to JavaScript",
                content: "Overview of JavaScript and setting up the environment."
            },
            {
                week: 2,
                topic: "Variables, Operators, and Control Structures",
                content: "Understanding variables, operators, and control structures in JavaScript."
            }
        ]
    },
    {
        id: 17,
        name: "Node.js Essentials",
        instructor: "Sarah Clark",
        description: "Learn the basics of Node.js and server-side JavaScript development.",
        enrollmentStatus: "Open",
        thumbnail: "nodejs.image.here",
        duration: "6 weeks",
        schedule: "Thursdays and Saturdays, 17:00 PM - 9:00 PM",
        location: "Online",
        prerequisites: [
            "Basic JavaScript knowledge"
        ],
        syllabus: [
            {
                week: 1,
                topic: "Introduction to Node.js",
                content: "Overview of Node.js and setting up the environment."
            },
            {
                week: 2,
                topic: "Creating Servers with Node.js",
                content: "Building HTTP servers and handling requests."
            }
        ]
    },
    {
        id: 18,
        name: "Python Programming",
        instructor: "Sophia Brown",
        description: "Learn Python programming language and its applications.",
        enrollmentStatus: "Open",
        thumbnail: "PythonProgramming.png",
        duration: "10 weeks",
        schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
        location: "Closed",
        prerequisites: [
            "Basic programming knowledge"
        ],
        syllabus: [
            {
                week: 1,
                topic: "Introduction to Python",
                content: "Overview of Python and setting up the environment."
            },
            {
                week: 2,
                topic: "Data Structures and Control Flow",
                content: "Understanding data structures and control flow in Python."
            }
        ]
    },
    {
        id: 19,
        name: "Web Development with Django",
        instructor: "Michael Davis",
        description: "Learn web development using Django, a Python web framework.",
        enrollmentStatus: "Closed",
        thumbnail: "WebDevelopmentwithDjango.jpg",
        duration: "8 weeks",
        schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
        location: "Online",
        prerequisites: [
            "Python Programming"
        ],
        syllabus: [
            {
                week: 1,
                topic: "Introduction to Django",
                content: "Overview of Django and setting up a project."
            },
            {
                week: 2,
                topic: "Building Web Applications",
                content: "Creating web applications using Django."
            }
        ]
    }
];
