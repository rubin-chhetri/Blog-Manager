
const SubsTable = ({ email, date, deleteEmail, id }) => {
  const newDate = new Date(date);
  return (
    <tr className="bg-white hover:bg-white/50 transition-colors duration-200">
      <td className="px-6 py-4 text-gray-700">{email || "No Email"}</td>
      <td className="px-6 py-4 hidden sm:block text-gray-700">{newDate.toDateString()}</td>
      <td className="px-6 py-4">
        <button onClick={() => deleteEmail(id)} className="px-3 py-1 bg-red-200 text-red-700 rounded-lg hover:bg-red-300 transition-colors">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default SubsTable;
