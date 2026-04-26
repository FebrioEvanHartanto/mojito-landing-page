export type StoreInfo = {
    heading: string;
    address: string;
    contact: {
        phone: string;
        email: string;
    };
};

export type OpeningHour = {
    day: string;
    time: string;
};

export type Social = {
    name: string;
    icon: string;
    url: string;
};

const storeInfo: StoreInfo = {
    heading: "Where to Find Us",
    address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
    contact: {
        phone: "(555) 987-6543",
        email: "hello@jsmcocktail.com",
    },
};

const openingHours: OpeningHour[] = [
    { day: "Mon–Thu", time: "11:00am – 12am" },
    { day: "Fri", time: "11:00am – 2am" },
    { day: "Sat", time: "9:00am – 2am" },
    { day: "Sun", time: "9:00am – 1am" },
];

const socials: Social[] = [
    { name: "Instagram", icon: "/images/insta.png", url: "#" },
    { name: "X (Twitter)", icon: "/images/x.png", url: "#" },
    { name: "Facebook", icon: "/images/fb.png", url: "#" },
];

export {storeInfo, openingHours, socials};