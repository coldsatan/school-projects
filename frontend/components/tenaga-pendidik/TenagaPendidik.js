import { useEffect, useState } from "react";
import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import Container from "../Container";
import SectionTitle from "../SectionTitle";

export default function TenagaPendidik({ data }) {
  const [tipe, setTipe] = useState("administration");
  const [employees, setEmployees] = useState(data);

  useEffect(async () => {
    let listEmployees;
    if (tipe === "administration") {
      listEmployees = await fetchAPI(`/employees?_where[type]=${tipe}`);
    } else {
      listEmployees = await fetchAPI(`/employees?_where[type]=${tipe}`);
    }
    setEmployees(listEmployees);
  }, [tipe, employees]);
  return (
    <>
      <section className="py-14">
        <Container>
          <SectionTitle title="Tenaga Pendidik" />
          <div className="mx-4 md:mx-14 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4 py-8">
            <button
              disabled={tipe === "administration" ? true : false}
              className="block md:inline-block md:px-8 w-full md:w-auto bg-yellow-300 transition-all py-4 text-gray-50 text-lg rounded-md disabled:bg-yellow-300/50"
              onClick={() => setTipe("administration")}
            >
              Staff Administrasi
            </button>
            <button
              disabled={tipe === "teacher" ? true : false}
              className="block md:inline-block md:px-8 w-full md:w-auto bg-yellow-300 transition-all py-4 text-gray-50 text-lg rounded-md disabled:bg-yellow-300/50"
              onClick={() => setTipe("teacher")}
            >
              Staff Pengajar
            </button>
          </div>
        </Container>
      </section>
      <section className="py-14 bg-gray-100 text-center">
        <Container>
          {employees.type === "administration" && (
            <h2 className="text-xl font-bold">Staff Administrasi</h2>
          )}
          {employees.type === "teacher" && (
            <h2 className="text-xl font-bold">Staff Pengajar</h2>
          )}
          <div className="grid md:grid-cols-4 gap-8 py-14 px-8 xl:px-48 md:px-24 font-bold">
            {employees.map((employee, i) => {
              return (
                <div key={i}>
                  <h3 className="text-xl py-4">{employee.job}</h3>
                  <img
                    src={getStrapiMedia(employee.avatar)}
                    className="h-80 w-full object-cover rounded-md"
                  />
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
