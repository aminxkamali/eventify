import HomeHeader from '../components/homePageComponents/HomeHeader';
import DiscoverEventsHeader from '../components/homePageComponents/DiscoverEventsHeader';
import UpcomingEvents from '../components/homePageComponents/UpcomingEvents';
import { Divider } from 'primereact/divider';
import EventsCategory from '../components/homePageComponents/EventsCategory';
import CreateEvent from '../components/homePageComponents/CreateEvent';
import HomeFooter from '../components/homePageComponents/HomeFooter';
import FriendsList from '../components/homePageComponents/FriendsList';
import TeamsList from '../components/homePageComponents/TeamsList';
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col text-black justify-center">
      <HomeHeader />
      <DiscoverEventsHeader />
      <UpcomingEvents />
      <div className="w-[90%] h-px bg-gray-300 mt-4 mb-4 justify-center item-center m-auto" />

      <EventsCategory />
      <div className="w-[90%] h-px bg-gray-300 mt-4 mb-4 justify-center item-center m-auto" />
      <FriendsList />
      <div className="w-[90%] h-px bg-gray-300 mt-4 mb-4 justify-center item-center m-auto" />
      <TeamsList/>
      <div className="w-[90%] h-px bg-gray-300 mt-4 mb-4 justify-center item-center m-auto" />
      <CreateEvent />
      

      <HomeFooter />
    </div>
  );
}
