"use client";

import MeetupList from "@/components/meetups/MeetupList";
const DUMMY_MEETUP = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRry0ry_CmK1oRDQhvU1siSpeAXmE_gQ_qE6-H529oMiw&s",
    address: "Some Address 1",
    description: "a dummy meetup ",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ__gWPNIJI6if9d0bJUNpowkajy93ZMmD91osVjl6xd1zXOKb4j9aJpRW8lEHJcDqCUlA&usqp=CAU",
    address: "Some Address 2",
    description: "a dummy meetup ",
  },
  {
    id: "m3",
    title: "Third Meetup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Ciyh_YInleOdQPaGX_nU0xLazBplHl3h5GUwCBH--g&s",
    address: "Some Address 3",
    description: "a dummy meetup ",
  },
];

const index = () => {
  return (
    <div>
      <MeetupList meetups={DUMMY_MEETUP} />
    </div>
  );
};

export default index;
