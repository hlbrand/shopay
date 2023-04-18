import Header from '@/components/header';
import Footer from '@/components/footer';
import axios from 'axios';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home({ country }) {
  const { data: session } = useSession();
  // console.log(session);
  return (
    <div>
      <Header country={country} />
      {session ? 'You are logged in' : 'You are not logged in'}
      <Footer country={country} />
    </div>
  );
}

export async function getServerSideProps() {
  let data = await axios
    .get('https://api.ipregistry.co/?key=37m47uax3i054p3k')
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {
      console.log(err);
    });
  // console.log(data);
  return {
    props: {
      country: { name: data.name, flag: data.flag.emojitwo },
      // country: {
      //   name: 'Morocco',
      //   flag: 'https://cdn-icons-png.flaticon.com/512/197/197551.png?w=360',
      // },
    },
  };
}
