export default {
    nav: {
        home: 'Home',
        projects: 'Projects',
        contact: 'Contact',
    },
    settings: {
        accent: 'Accent color',
        language: 'Language',
    },
    home: {
        title: 'Schathe',
        subtitle: 'IT specialist based in Switzerland.',
        cta: 'View projects',
        ctaSecondary: 'Contact me',
    },
    about: {
        title: 'About',
        p1: "Originally from the Jura region in St-Ursanne, I am currently pursuing a Bachelor's degree in Software Engineering at HE-Arc Neuchâtel, where I have been living for the past 3 years. Passionate about programming, I enjoy building small projects that help me expand my knowledge and explore new technologies.",
        p2: 'Alongside my studies, I have been very active in a wide variety of sports: running, mountain biking, swimming, snowboard, and all kinds of racket sports (ping-pong, tennis, squash), each done with family or friends rather than in a club. Unlike the other sports, I have been part of the FC Clos-du-Doubs football club for over 15 years. I am currently a player for the club and served as a junior referee for nearly 10 years. I was also a member of the Clos-du-Doubs youth association for 4 years, including 3 years on the committee.',
        p3: 'I am fluent in French, my mother tongue, and hold a C1 level in English through IELTS assessments. In my free time, I code small projects, some of which are public and featured on this site. I am also passionate about video games.',
    },
    parcours: {
        title: 'Education',
        items: [
            {
                place: 'St-Ursanne',
                level: 'Primary',
                period: '2008 - 2014',
                description: 'Primary school in St-Ursanne.',
            },
            {
                place: 'Collège Thurmann, Porrentruy',
                level: 'Secondary',
                period: '2014 - 2017',
                description: 'Secondary school at Collège Thurmann in Porrentruy.',
            },
            {
                place: 'EMT, Porrentruy',
                level: 'Apprenticeship',
                period: '2017 - 2021',
                description: 'Apprenticeship as IT specialist.',
            },
            {
                place: 'EMT, Porrentruy',
                level: 'Maturity',
                period: '2021 - 2022',
                description: 'Vocational Baccalaureate in Technology.',
            },
            {
                place: 'HE-Arc, Neuchâtel',
                level: 'Bachelor',
                period: '2022 - Present',
                description: 'Bachelor in Software Engineering.',
            },
        ],
    },
    experiences: {
        title: 'Experience',
        items: [
            {
                title: 'European Mathematics Competition',
                date: '2011',
                description: '4th place in the European finals in Paris.',
            },
            {
                title: 'Juramigrants',
                date: '2018',
                description:
                    'Created the Juramigrants website and its members area, a private social network.',
            },
            {
                title: 'Internship',
                date: '2020 - 2021',
                description: 'Internship in website development.',
            },
            {
                title: 'Manor, Delémont',
                date: 'Winter 2024',
                description: 'Store associate and cashier assistant during holiday seasons.',
            },
        ],
    },
    projects: {
        title: 'Projects',
        description: 'Here are some projects I have worked on.',
        items: [
            {
                title: 'Sports Predictions - Quotidien Jurassien',
                tech: 'Laravel',
                description:
                    'Bachelor project: building a sports predictions website for the Quotidien Jurassien. The site was launched during the final phase of the 2026 World Cup.',
                link: '',
                linkLabel: '',
            },
            {
                title: 'Juramigrants',
                tech: 'WordPress',
                description:
                    'My first website, built during my IT apprenticeship. The site has two sections: a showcase website and a private social network for members. The site has since been updated, the old logo was available on benevolat-jura.ch.',
                link: '',
                linkLabel: '',
            },
            {
                title: 'Temineur',
                tech: 'C++ / SFML',
                description:
                    "When I started my Bachelor's, I decided to build a minesweeper without any external help, using only official documentation. This project helped me get back into programming after a period without personal projects.",
                link: 'https://github.com/schathe/temineur',
                linkLabel: 'GitHub',
            },
            {
                title: 'Platformer Godot',
                tech: 'Godot',
                description:
                    'A metroidvania-inspired platformer created to explore the Godot engine. The project was put on hold due to Bachelor workload but will be picked up again in the future.',
                link: 'https://github.com/schathe/Platformer-Godot',
                linkLabel: 'GitHub',
            },
        ],
    },
    contact: {
        title: 'Contact me',
        description: 'Feel free to reach out through any of the means below.',
    },
    footer: {
        rights: 'All rights reserved.',
    },
}
