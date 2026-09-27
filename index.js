import StudentCard from "./StudentCard";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <StudentCard name="Andrei Sanchez" course="BSIT" year="2nd Year" />
    </main>
  );
}
