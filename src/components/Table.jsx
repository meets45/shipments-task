import React, { useState } from "react";
// import axios from "axios";

const Table = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      age: 28,
      role: "Engineer",
      hireDate: "2022-01-15",
      isActive: true,
      salary: 85000,
      department: "Development",
      projectsCompleted: 5,
      lastLogin: "2024-07-28T14:48:00.000Z",
      accessLevel: "Admin",
    },
    {
      id: 2,
      name: "Bob Smith",
      age: 34,
      role: "Manager",
      hireDate: "2020-06-30",
      isActive: false,
      salary: 95000,
      department: "Operations",
      projectsCompleted: 10,
      lastLogin: "2024-07-30T09:21:00.000Z",
      accessLevel: "User",
    },
    {
      id: 3,
      name: "Charlie Rose",
      age: 22,
      role: "Intern",
      hireDate: "2023-03-01",
      isActive: true,
      salary: 45000,
      department: "Development",
      projectsCompleted: 1,
      lastLogin: "2024-07-29T17:03:00.000Z",
      accessLevel: "User",
    },
    {
      id: 4,
      name: "David Green",
      age: 40,
      role: "Director",
      hireDate: "2018-11-20",
      isActive: true,
      salary: 120000,
      department: "Management",
      projectsCompleted: 20,
      lastLogin: "2024-07-27T12:35:00.000Z",
      accessLevel: "Admin",
    },
    {
      id: 5,
      name: "Eva White",
      age: 30,
      role: "Designer",
      hireDate: "2021-05-15",
      isActive: true,
      salary: 70000,
      department: "Design",
      projectsCompleted: 8,
      lastLogin: "2024-07-31T10:15:00.000Z",
      accessLevel: "User",
    },
    {
      id: 6,
      name: "Frank Black",
      age: 29,
      role: "Engineer",
      hireDate: "2019-09-17",
      isActive: true,
      salary: 80000,
      department: "Development",
      projectsCompleted: 6,
      lastLogin: "2024-07-25T11:45:00.000Z",
      accessLevel: "User",
    },
    {
      id: 7,
      name: "Grace Brown",
      age: 26,
      role: "Engineer",
      hireDate: "2021-04-10",
      isActive: false,
      salary: 78000,
      department: "Development",
      projectsCompleted: 4,
      lastLogin: "2024-07-20T09:00:00.000Z",
      accessLevel: "User",
    },
    {
      id: 8,
      name: "Hank Green",
      age: 45,
      role: "Senior Manager",
      hireDate: "2017-03-25",
      isActive: true,
      salary: 110000,
      department: "Operations",
      projectsCompleted: 15,
      lastLogin: "2024-07-29T13:22:00.000Z",
      accessLevel: "Admin",
    },
    {
      id: 9,
      name: "Ivy Blue",
      age: 31,
      role: "Designer",
      hireDate: "2019-08-05",
      isActive: true,
      salary: 72000,
      department: "Design",
      projectsCompleted: 7,
      lastLogin: "2024-07-28T08:48:00.000Z",
      accessLevel: "User",
    },
    {
      id: 10,
      name: "Jack White",
      age: 37,
      role: "Product Manager",
      hireDate: "2020-02-20",
      isActive: false,
      salary: 95000,
      department: "Product",
      projectsCompleted: 12,
      lastLogin: "2024-07-26T15:18:00.000Z",
      accessLevel: "Admin",
    },
    {
      id: 11,
      name: "Kara Black",
      age: 33,
      role: "Engineer",
      hireDate: "2018-12-12",
      isActive: true,
      salary: 85000,
      department: "Development",
      projectsCompleted: 9,
      lastLogin: "2024-07-29T12:00:00.000Z",
      accessLevel: "User",
    },
    {
      id: 12,
      name: "Leo Green",
      age: 27,
      role: "Designer",
      hireDate: "2021-01-30",
      isActive: true,
      salary: 68000,
      department: "Design",
      projectsCompleted: 3,
      lastLogin: "2024-07-28T16:15:00.000Z",
      accessLevel: "User",
    },
    {
      id: 13,
      name: "Mona Blue",
      age: 36,
      role: "Engineer",
      hireDate: "2019-11-18",
      isActive: true,
      salary: 87000,
      department: "Development",
      projectsCompleted: 11,
      lastLogin: "2024-07-30T14:50:00.000Z",
      accessLevel: "User",
    },
    {
      id: 14,
      name: "Nina Brown",
      age: 25,
      role: "Intern",
      hireDate: "2023-04-14",
      isActive: true,
      salary: 42000,
      department: "Development",
      projectsCompleted: 2,
      lastLogin: "2024-07-31T11:00:00.000Z",
      accessLevel: "User",
    },
    {
      id: 15,
      name: "Oscar White",
      age: 42,
      role: "Director",
      hireDate: "2016-05-11",
      isActive: true,
      salary: 125000,
      department: "Management",
      projectsCompleted: 22,
      lastLogin: "2024-07-29T09:33:00.000Z",
      accessLevel: "Admin",
    },
  ]);
  //   useEffect(() => {
  //     // axios
  //     //   .get("https://run.mocky.io/v3/69f60a58-3a36-48c5-a9cf-b100b015950c")
  //     //   .then((response) => {
  //     //     const cleanedData = response.data.replace("const mockData = [", "");
  //     //     const cleanedData2 = cleanedData.replace("];", "");
  //     //     const cleanData3 = cleanedData2.replace("/s/g", "");
  //     //     console.log(cleanData3);
  //     //     const jsonData = JSON.parse(cleanData3);
  //     //     setData(jsonData);
  //     //   });
  //   }, []);
  const [tpdata, setTpdata] = useState("");
  const [filterCondition, setFilterCondition] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [rangeStart, setRangeStart] = useState("");
  const [rangeEnd, setRangeEnd] = useState("");
  const [attribute, setAttribute] = useState("");
  const formatDateTime = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString();
  };

  const handleIDFilter = () => {
    let filteredData = [...data];
    setTpdata(data);
    const value = parseInt(filterValue, 10);
    const start = parseInt(rangeStart, 10);
    const end = parseInt(rangeEnd, 10);

    switch (filterCondition) {
      case "equals":
        filteredData = filteredData.filter((row) => row.id === value);
        break;
      case "lessThan":
        filteredData = filteredData.filter((row) => row.id < value);
        break;
      case "lessThanOrEqual":
        filteredData = filteredData.filter((row) => row.id <= value);
        break;
      case "greaterThan":
        filteredData = filteredData.filter((row) => row.id > value);
        break;
      case "greaterThanOrEqual":
        filteredData = filteredData.filter((row) => row.id >= value);
        break;
      case "range":
        filteredData = filteredData.filter(
          (row) => row.id >= start && row.id <= end
        );
        break;
      case "notEqual":
        filteredData = filteredData.filter((row) => row.id !== value);
        break;
      default:
        break;
    }
    setData(filteredData);
  };
  const handleAgeFilter = () => {
    let filteredData = [...data];
    setTpdata(data);
    const value = parseInt(filterValue, 10);
    const start = parseInt(rangeStart, 10);
    const end = parseInt(rangeEnd, 10);

    switch (filterCondition) {
      case "equals":
        filteredData = filteredData.filter((row) => row.age === value);
        break;
      case "lessThan":
        filteredData = filteredData.filter((row) => row.age < value);
        break;
      case "lessThanOrEqual":
        filteredData = filteredData.filter((row) => row.age <= value);
        break;
      case "greaterThan":
        filteredData = filteredData.filter((row) => row.age > value);
        break;
      case "greaterThanOrEqual":
        filteredData = filteredData.filter((row) => row.age >= value);
        break;
      case "range":
        filteredData = filteredData.filter(
          (row) => row.age >= start && row.age <= end
        );
        break;
      case "notEqual":
        filteredData = filteredData.filter((row) => row.age !== value);
        break;
      default:
        break;
    }
    setData(filteredData);
  };
  const handleSalFilter = () => {
    let filteredData = [...data];
    setTpdata(data);
    const value = parseInt(filterValue, 10);
    const start = parseInt(rangeStart, 10);
    const end = parseInt(rangeEnd, 10);

    switch (filterCondition) {
      case "equals":
        filteredData = filteredData.filter((row) => row.salary === value);
        break;
      case "lessThan":
        filteredData = filteredData.filter((row) => row.salary < value);
        break;
      case "lessThanOrEqual":
        filteredData = filteredData.filter((row) => row.salary <= value);
        break;
      case "greaterThan":
        filteredData = filteredData.filter((row) => row.salary > value);
        break;
      case "greaterThanOrEqual":
        filteredData = filteredData.filter((row) => row.salary >= value);
        break;
      case "range":
        filteredData = filteredData.filter(
          (row) => row.salary >= start && row.salary <= end
        );
        break;
      case "notEqual":
        filteredData = filteredData.filter((row) => row.salary !== value);
        break;
      default:
        break;
    }
    setData(filteredData);
  };
  const handleProjCFilter = () => {
    let filteredData = [...data];
    setTpdata(data);
    const value = parseInt(filterValue, 10);
    const start = parseInt(rangeStart, 10);
    const end = parseInt(rangeEnd, 10);

    switch (filterCondition) {
      case "equals":
        filteredData = filteredData.filter(
          (row) => row.projectsCompleted === value
        );
        break;
      case "lessThan":
        filteredData = filteredData.filter(
          (row) => row.projectsCompleted < value
        );
        break;
      case "lessThanOrEqual":
        filteredData = filteredData.filter(
          (row) => row.projectsCompleted <= value
        );
        break;
      case "greaterThan":
        filteredData = filteredData.filter(
          (row) => row.projectsCompleted > value
        );
        break;
      case "greaterThanOrEqual":
        filteredData = filteredData.filter(
          (row) => row.projectsCompleted >= value
        );
        break;
      case "range":
        filteredData = filteredData.filter(
          (row) =>
            row.projectsCompleted >= start && row.projectsCompleted <= end
        );
        break;
      case "notEqual":
        filteredData = filteredData.filter(
          (row) => row.projectsCompleted !== value
        );
        break;
      default:
        break;
    }
    setData(filteredData);
  };

  const handleNameFilter = () => {
    let filteredData = [...data];
    setTpdata(data);
    switch (filterCondition) {
      case "contains":
        filteredData = filteredData.filter(
          (row) => row.name && row.name.includes(filterValue)
        );
        break;
      case "notContains":
        filteredData = filteredData.filter(
          (row) => !row.name || !row.name.includes(filterValue)
        );
        break;
      case "equals":
        filteredData = filteredData.filter((row) => row.name === filterValue);
        break;
      case "notEqual":
        filteredData = filteredData.filter((row) => row.name !== filterValue);
        break;
      case "startsWith":
        filteredData = filteredData.filter(
          (row) => row.name && row.name.startsWith(filterValue)
        );
        break;
      case "endsWith":
        filteredData = filteredData.filter(
          (row) => row.name && row.name.endsWith(filterValue)
        );
        break;
      case "isNull":
        filteredData = filteredData.filter((row) => !row.name);
        break;
      case "isNotNull":
        filteredData = filteredData.filter((row) => row.name);
        break;
      default:
        break;
    }
    setData(filteredData);
  };
  const handleRoleFilter = () => {
    let filteredData = [...data];
    setTpdata(data);
    switch (filterCondition) {
      case "contains":
        filteredData = filteredData.filter(
          (row) => row.role && row.role.includes(filterValue)
        );
        break;
      case "notContains":
        filteredData = filteredData.filter(
          (row) => !row.role || !row.role.includes(filterValue)
        );
        break;
      case "equals":
        filteredData = filteredData.filter((row) => row.role === filterValue);
        break;
      case "notEqual":
        filteredData = filteredData.filter((row) => row.role !== filterValue);
        break;
      case "startsWith":
        filteredData = filteredData.filter(
          (row) => row.role && row.role.startsWith(filterValue)
        );
        break;
      case "endsWith":
        filteredData = filteredData.filter(
          (row) => row.role && row.role.endsWith(filterValue)
        );
        break;
      case "isNull":
        filteredData = filteredData.filter((row) => !row.role);
        break;
      case "isNotNull":
        filteredData = filteredData.filter((row) => row.role);
        break;
      default:
        break;
    }
    setData(filteredData);
  };
  const handleDepartmentFilter = () => {
    let filteredData = [...data];
    setTpdata(data);
    switch (filterCondition) {
      case "contains":
        filteredData = filteredData.filter(
          (row) => row.department && row.department.includes(filterValue)
        );
        break;
      case "notContains":
        filteredData = filteredData.filter(
          (row) => !row.department || !row.department.includes(filterValue)
        );
        break;
      case "equals":
        filteredData = filteredData.filter(
          (row) => row.department === filterValue
        );
        break;
      case "notEqual":
        filteredData = filteredData.filter(
          (row) => row.department !== filterValue
        );
        break;
      case "startsWith":
        filteredData = filteredData.filter(
          (row) => row.department && row.department.startsWith(filterValue)
        );
        break;
      case "endsWith":
        filteredData = filteredData.filter(
          (row) => row.department && row.department.endsWith(filterValue)
        );
        break;
      case "isNull":
        filteredData = filteredData.filter((row) => !row.department);
        break;
      case "isNotNull":
        filteredData = filteredData.filter((row) => row.department);
        break;
      default:
        break;
    }
    setData(filteredData);
  };
  const handleAccessFilter = () => {
    let filteredData = [...data];
    setTpdata(data);
    switch (filterCondition) {
      case "contains":
        filteredData = filteredData.filter(
          (row) => row.accessLevel && row.accessLevel.includes(filterValue)
        );
        break;
      case "notContains":
        filteredData = filteredData.filter(
          (row) => !row.accessLevel || !row.accessLevel.includes(filterValue)
        );
        break;
      case "equals":
        filteredData = filteredData.filter(
          (row) => row.accessLevel === filterValue
        );
        break;
      case "notEqual":
        filteredData = filteredData.filter(
          (row) => row.accessLevel !== filterValue
        );
        break;
      case "startsWith":
        filteredData = filteredData.filter(
          (row) => row.accessLevel && row.accessLevel.startsWith(filterValue)
        );
        break;
      case "endsWith":
        filteredData = filteredData.filter(
          (row) => row.accessLevel && row.accessLevel.endsWith(filterValue)
        );
        break;
      case "isNull":
        filteredData = filteredData.filter((row) => !row.accessLevel);
        break;
      case "isNotNull":
        filteredData = filteredData.filter((row) => row.accessLevel);
        break;
      default:
        break;
    }
    setData(filteredData);
  };
  const clearData = () => {
    setData(tpdata);
  };
  const handlefilterVALUE = (e) => {
    setFilterValue(e.target.value);
    if (filterValue === "" && tpdata !== "") setData(tpdata);
  };
  const HandleFiltr = () => {
    if (attribute === "age") handleAgeFilter();
    else if (attribute === "id") handleIDFilter();
    else if (attribute === "salary") handleSalFilter();
    else if (attribute === "projectsCompleted") handleProjCFilter();
    else if (attribute === "name") handleNameFilter();
    else if (attribute === "role") handleRoleFilter();
    else if (attribute === "department") handleDepartmentFilter();
    else if (attribute === "accessLevel") handleAccessFilter();
  };
  const HandleOnchngFil = (e) => {
    setFilterCondition(e.target.value);
    if (tpdata !== "") setData(tpdata);
  };
  const HandleOnchngAttr = (e) => {
    setAttribute(e.target.value);
    if (tpdata !== "") setData(tpdata);
  };
  const handleAttr = () => {
    if (
      attribute === "age" ||
      attribute === "id" ||
      attribute === "salary" ||
      attribute === "projectsCompleted"
    )
      return (
        <select
          className="border border-gray-300 p-2 mr-2"
          disabled={attribute === "" ? true : false}
          onChange={(e) => HandleOnchngFil(e)}
        >
          <option value="">Select Condition</option>
          <option value="equals">Equals</option>
          <option value="lessThan">Less than</option>
          <option value="lessThanOrEqual">Less than or equal</option>
          <option value="greaterThan">Greater than</option>
          <option value="greaterThanOrEqual">Greater than or equal</option>
          <option value="range">Range</option>
          <option value="notEqual">Not equal</option>
        </select>
      );
    else if (
      attribute === "name" ||
      attribute === "role" ||
      attribute === "department" ||
      attribute === "accessLevel"
    )
      return (
        <select
          className="border border-gray-300 p-2 mr-2"
          disabled={attribute === "" ? true : false}
          onChange={(e) => HandleOnchngFil(e)}
        >
          <option value="">Select Condition</option>
          <option value="contains">Contains</option>
          <option value="notContains">Not Contains</option>
          <option value="equals">Equals</option>
          <option value="notEquals">notEquals</option>
          <option value="startsWith">Starts With</option>
          <option value="endWith">Ends With</option>
          <option value="isNull">Is Null</option>
          <option value="isNotNull">Is Not Null</option>
        </select>
      );
    else if (attribute === "")
      return (
        <select
          className="border border-gray-300 p-2 mr-2"
          disabled={attribute === "" ? true : false}
        >
          <option value="">Select Condition</option>
        </select>
      );
  };
  return (
    <div className="mt-5 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-5">Shipments Task #1 </h1>
      <div className="mb-4">
        <select
          className="border border-gray-300 p-2 mr-2"
          onChange={(e) => HandleOnchngAttr(e)}
        >
          <option value="">Select Attribute</option>
          <option value="id">ID</option>
          <option value="name">Name</option>
          <option value="age">Age</option>
          <option value="role">Role</option>
          <option value="hireDate">HireDate</option>
          <option value="isActive">isActive</option>
          <option value="salary">Salary</option>
          <option value="department">Department</option>
          <option value="projectsCompleted">Projects Completed</option>
          <option value="lastLogin">LastLogin</option>
          <option value="accessLevel">AccessLevel</option>
        </select>
        {handleAttr()}
        {filterCondition !== "range" ? (
          <input
            type="text"
            className="border border-gray-300 p-2 mr-2"
            placeholder="Value"
            onChange={(e) => handlefilterVALUE(e)}
          />
        ) : (
          <>
            <input
              type="number"
              className="border border-gray-300 p-2 mr-2"
              placeholder="Start"
              onChange={(e) => setRangeStart(e.target.value)}
            />
            <input
              type="number"
              className="border border-gray-300 p-2 mr-2"
              placeholder="End"
              onChange={(e) => setRangeEnd(e.target.value)}
            />
          </>
        )}
        <button
          className="bg-blue-500 text-white p-2.5 mr-3 rounded"
          onClick={HandleFiltr}
        >
          Apply Filter
        </button>
        <button
          className="bg-blue-500 text-white p-2.5 rounded"
          onClick={clearData}
        >
          Clear
        </button>
      </div>
      <div className="flex justify-center items-center">
        <div className="overflow-x-auto">
          <table className="min-w-full border-solid border-black-200">
            <thead className="bg-gray-100">
              <tr className="flex justify-center items-center border-solid border-black-200">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 border-solid border-black-200 tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                  Age
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                  HireDate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                  isActive
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                  Salary
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                  Departments
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                  Projects Completed
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                  Last Login
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                  Access Level
                </th>
              </tr>
            </thead>
            <tbody className="bg-white border-solid border-black-200">
              {data.map((data) => (
                <tr
                  key={data["id"]}
                  className="flex justify-center items-center"
                >
                  <td className="p-5 py-4 whitespace-nowrap">{data["id"]}</td>
                  <td className="p-6 py-4 whitespace-nowrap">{data["name"]}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{data["age"]}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {data["role"]}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {data["hireDate"]}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {data["isActive"] ? "true" : "false"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {data["salary"]}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    {data["department"]}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    {data["projectsCompleted"]}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    {formatDateTime(data["lastLogin"])}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    {data["accessLevel"]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Table;
