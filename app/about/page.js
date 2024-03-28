import Link from "next/link";

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },

  { id: 2, name: "Vaibhav", role: "Backend Developer" },

  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

const about = () => {
  return (
    <ul>
      <h1 className="text-xl ml-96">Our Developers</h1>
      {details.map((item) => (
        <Link href={`/about/${item.id}`}>
          <li className="mt-10 ml-96">{item.name}</li>
        </Link>
      ))}
    </ul>
  );
};

export default about;
