// const SubsTable = ({email,date,deleteEmail,id}) => {
//      const newDate = new Date(date);


//   return (
//     <tr className="bg-white border-b text-left">
//         <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
//             {email?email:"No Email"}
//         </th>
//         <td className="px-6 py-4 hidden sm:block">{newDate.toDateString()}</td>
//         <td className="px-6 py-4 cursor-pointer" onClick={() => deleteEmail(id)}>X</td>
//     </tr>
//   );
// };

// export default SubsTable;

// const SubsTable = ({ email, date, deleteEmail, id }) => {
//   const newDate = new Date(date);

//   return (
//     <tr className="bg-white/5 hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 transition-colors duration-300 rounded-xl cursor-pointer">
//       <th className="px-6 py-4 font-medium text-white whitespace-nowrap">
//         {email ? email : "No Email"}
//       </th>
//       <td className="px-6 py-4 hidden sm:block text-white">{newDate.toDateString()}</td>
//       <td className="px-6 py-4">
//         <button
//           onClick={() => deleteEmail(id)}
//           className="px-3 py-1 bg-red-500 rounded-lg text-white font-semibold hover:bg-red-600 transition-colors"
//         >
//           Delete
//         </button>
//       </td>
//     </tr>
//   );
// };

// export default SubsTable;


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
