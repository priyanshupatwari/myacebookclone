// import { getSession, useSession } from 'next-auth/client'
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widget from "../components/Widget";

export default function Home(props) {

  return (
    <>
    {/* main body part of home page */}
      <div className="max-w-[100vw]">
        <main className="flex">
          <section className="hidden sm:block lg:min-w-[222px] xl:min-w-[260px]">
            <Sidebar />
          </section>
          {/* feed */}
          <section className="flex-grow flex-shrink-0 max-w-[100vw]">
            <Feed />
          </section>
          {/* widgets */}
          <section className="hidden lg:block lg:min-w-[222px] xl:min-w-[300px]">
            <Widget />
          </section>
        </main>
      </div>
    </>
  )
}
// export async function getServerSideProps(context) {
//   // get the user
//   const session = await getSession(context);
//   console.log('session form server ', session);

//   return {
//     props: {
//       session
//     }
//   }
// }