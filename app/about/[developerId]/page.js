const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },

  { id: 2, name: "Vaibhav", role: "Backend Developer" },

  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

const developer = ({ params }) => {
  const matchedDeveloper = details.find(
    (item) => item.id === parseInt(params.developerId)
  );

  if (matchedDeveloper) {
    return (
      <div>
        <div>
          {matchedDeveloper.name}-{matchedDeveloper.role}
        </div>
      </div>
    );
  }

  return <div>No developer found with the provided id.</div>;
};

export default developer;
