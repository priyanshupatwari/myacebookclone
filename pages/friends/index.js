import Widget from "../../components/Widget";

export default function Home() {
 return (
  <>
   <main className="flex justify-center w-screen ">
    {/* widgets */}
    <section className="min-w-[300px] border-2 mt-4 ">
     <Widget />
    </section>
   </main>
  </>
 )
}